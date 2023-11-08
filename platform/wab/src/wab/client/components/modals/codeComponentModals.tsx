import { isKnownComponent, ProjectDependency } from "@/wab/classes";
// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { Component } from "@/wab/classes";
import {
  reactConfirm,
  reactHardConfirm,
  showTemporaryPrompt,
} from "@/wab/client/components/quick-modals";
import Button from "@/wab/client/components/widgets/Button";
import { Icon } from "@/wab/client/components/widgets/Icon";
import Select from "@/wab/client/components/widgets/Select";
import { Textbox } from "@/wab/client/components/widgets/Textbox";
import CloseIcon from "@/wab/client/plasmic/plasmic_kit/PlasmicIcon__Close";
import MinusIcon from "@/wab/client/plasmic/plasmic_kit/PlasmicIcon__Minus";
import PencilIcon from "@/wab/client/plasmic/plasmic_kit/PlasmicIcon__Pencil";
import PlusIcon from "@/wab/client/plasmic/plasmic_kit/PlasmicIcon__Plus";
import TrashsvgIcon from "@/wab/client/plasmic/q_4_icons/icons/PlasmicIcon__Trashsvg";
import { StudioCtx } from "@/wab/client/studio-ctx/StudioCtx";
import { ensure, filterFalsy, sortBy, spawn, withoutNils } from "@/wab/common";
import { removeFromArray } from "@/wab/commons/collections";
import {
  CodeComponent,
  getComponentDisplayName,
  isCodeComponent,
} from "@/wab/components";
import { isBuiltinCodeComponent } from "@/wab/shared/code-components/builtin-code-components";
import {
  CodeComponentMetaDiffWithComponent,
  UnknownComponentError,
} from "@/wab/shared/code-components/code-components";
import { typeDisplayName, typesEqual } from "@/wab/shared/core/model-util";
import { $$$ } from "@/wab/shared/TplQuery";
import { getReferencingComponents, visitComponentRefs } from "@/wab/sites";
import { replaceTplTreeByEmptyBox } from "@/wab/tpls";
import { Alert, Form, notification } from "antd";
import * as React from "react";
import semver from "semver";
import { Modal } from "src/wab/client/components/widgets/Modal";
import { failableAsync } from "ts-failable";
import sty from "./SiteDiffs.module.css";

type RemapComponentResponse = CodeComponent | "delete";

async function promptRemapCodeComponent(props: {
  studioCtx: StudioCtx;
  component: CodeComponent;
  refComponents: Component[];
  title: string | React.ReactNode;
}) {
  const { studioCtx, component, refComponents, title } = props;
  const candidates = sortBy(
    withoutNils(
      studioCtx.codeComponentsRegistry
        .getRegisteredCodeComponents()
        .map((r) => {
          const comp = studioCtx.site.components.find(
            (c): c is CodeComponent =>
              isCodeComponent(c) &&
              !isBuiltinCodeComponent(c) &&
              c.name === r.meta.name
          );
          if (!comp || comp === component) {
            return null;
          }

          return comp;
        })
    ),
    (comp) => getComponentDisplayName(comp)
  );
  return showTemporaryPrompt<RemapComponentResponse>((onSubmit, onCancel) => (
    <Modal
      title={title}
      visible={true}
      footer={null}
      onCancel={() => onCancel()}
    >
      <p>
        Component <code>{getComponentDisplayName(component)}</code> is no longer
        registered, but is being used by{" "}
        {refComponents.map((c) => getComponentDisplayName(c)).join(", ")}. What
        would you like to do?
      </p>
      <div className="flex flex-vcenter">
        <Select
          type="bordered"
          placeholder={"Replace with another component..."}
          onChange={async (value) => {
            if (value) {
              const comp = ensure(
                candidates.find((c) => c.uuid === value),
                "Must have picked from candidates list"
              );
              if (
                await reactConfirm({
                  message: `Replace all instances of "${getComponentDisplayName(
                    component
                  )}" with "${getComponentDisplayName(comp)}"?`,
                })
              ) {
                onSubmit(comp);
              }
            }
          }}
        >
          {candidates.map((comp) => (
            <Select.Option
              key={comp.uuid}
              value={comp.uuid}
              textValue={getComponentDisplayName(comp)}
            >
              <div className="flex fill-width flex-vcenter">
                <span className="flex-fill">
                  {getComponentDisplayName(comp)}{" "}
                </span>
                <code
                  className="ml-lg text-ellipsis"
                  style={{ maxWidth: 200 }}
                  title={comp.codeComponentMeta.importPath}
                >
                  {comp.codeComponentMeta.importPath}
                </code>
              </div>
            </Select.Option>
          ))}
        </Select>
        {/* <div>
          <Dropdown
            trigger={["click"]}
            overlay={() => (
              <Menu>
                {withoutNils(
                  studioCtx.codeComponentsRegistry
                    .getRegisteredCodeComponents()
                    .map((r) => {
                      const comp = studioCtx.site.components.find(
                        (c): c is CodeComponent =>
                          isCodeComponent(c) &&
                          !isBuiltinCodeComponent(c) &&
                          c.name === r.meta.name
                      );
                      if (!comp || comp === component) {
                        return null;
                      }
                      return (
                        <Menu.Item
                          key={comp.uuid}
                          onClick={() => onSubmit(comp)}
                        >
                          <div className="flex fill-width flex-vcenter">
                            <span className="flex-fill">
                              {getComponentDisplayName(comp)}{" "}
                            </span>
                            <code className="ml-lg">
                              {comp.codeComponentMeta.importPath}
                            </code>
                          </div>
                        </Menu.Item>
                      );
                    })
                )}
              </Menu>
            )}
          >
            <Button
              endIcon={<Icon icon={ChevronDownsvgIcon} />}
              withIcons={["endIcon"]}
            >
              Replace with another component...
            </Button>
          </Dropdown>
        </div> */}
        <div className="mh-lg">or</div>
        <div>
          <Button
            startIcon={<Icon icon={TrashsvgIcon} />}
            withIcons={["startIcon"]}
            onClick={() => onSubmit("delete")}
          >
            Delete all existing uses
          </Button>
        </div>
      </div>
    </Modal>
  ));
}

/**
 * Returns true if `fromComponent` instances have successfully been replaced and
 * it's been deleted, and false if the user closed the form
 */
export async function tryRemapComponent(
  studioCtx: StudioCtx,
  component: CodeComponent,
  titleMessage: React.ReactNode
) {
  if (!studioCtx.site.components.includes(component)) {
    // may be a sub component that was removed when parent was removed
    return true;
  }
  const refComponents = getReferencingComponents(studioCtx.site, component);
  if (refComponents.length > 0) {
    const componentToRemap = await promptRemapCodeComponent({
      studioCtx,
      component,
      refComponents: refComponents,
      title: titleMessage,
    });
    if (!componentToRemap) {
      return false;
    }
    await studioCtx.changeUnsafe(() => {
      if (componentToRemap === "delete") {
        visitComponentRefs(studioCtx.site, component, (tplComponent, owner) => {
          if (isKnownComponent(owner) && owner.tplTree === tplComponent) {
            // We need to replace the root, just create an empty free box with
            // all vsettings
            replaceTplTreeByEmptyBox(owner);
          } else {
            $$$(tplComponent).remove({ deep: true });
          }
        });
      } else {
        // Swap with the component to remap to
        studioCtx.tplMgr().swapComponents(component, componentToRemap);
      }
      studioCtx.siteOps().tryRemoveComponent(component);
    });
  } else {
    await studioCtx.changeUnsafe(() =>
      studioCtx.siteOps().tryRemoveComponent(component)
    );
  }
  return true;
}

export async function fixMissingCodeComponents(
  studioCtx: StudioCtx,
  missingComponents: CodeComponent[],
  missingContexts: CodeComponent[]
) {
  return failableAsync<void, never>(async ({ success }) => {
    for (const c of missingComponents) {
      // Loop until it's fixed
      let fixed = false;
      while (!fixed) {
        fixed = await tryRemapComponent(
          studioCtx,
          c,
          <>
            Code component no longer registered: {getComponentDisplayName(c)} (
            <code>{c.codeComponentMeta?.importPath}</code>)
          </>
        );
      }
    }

    for (const c of missingContexts) {
      spawn(
        studioCtx.change(
          ({ success: changeSuccess }) => {
            removeFromArray(
              studioCtx.site.globalContexts,
              studioCtx.site.globalContexts.find((tpl) => tpl.component === c)
            );
            studioCtx.siteOps().tryRemoveComponent(c);
            return changeSuccess();
          },
          { noUndoRecord: true }
        )
      );
    }
    return success();
  });
}

type FixReactVersionHostLessPackagesResponse = "delete" | undefined;

function promptFixReactVersionForHostLessPackages(props: {
  hostLessPkgInfo: HostLessPackageInfo;
}) {
  const { hostLessPkgInfo } = props;
  return showTemporaryPrompt<FixReactVersionHostLessPackagesResponse>(
    (onSubmit, onCancel) => (
      <Modal
        title={"Invalid React version"}
        visible={true}
        footer={null}
        onCancel={() => onCancel()}
      >
        <p>
          The {hostLessPkgInfo.name} requires a React version {">="}{" "}
          {hostLessPkgInfo.minimumReactVersion} and your current version is{" "}
          {React.version}. We suggest you to upgrade your React version and
          refresh this page after it.
        </p>
        <p>
          If you <strong>can't</strong> upgrade your react version you will need
          to delete all existing uses of this package.
        </p>
        <div>
          <Button
            startIcon={<Icon icon={TrashsvgIcon} />}
            withIcons={["startIcon"]}
            onClick={() => onSubmit("delete")}
          >
            Delete all existing uses
          </Button>
        </div>
      </Modal>
    )
  );
}

export async function fixInvalidReactVersion(
  studioCtx: StudioCtx,
  hostLessPkgInfo: HostLessPackageInfo
) {
  return failableAsync<void, never>(async ({ run, success }) => {
    let shouldDelete: FixReactVersionHostLessPackagesResponse = "delete";
    do {
      shouldDelete = await promptFixReactVersionForHostLessPackages({
        hostLessPkgInfo,
      });
    } while (!shouldDelete);
    run(
      await studioCtx.change(({ success: deleteSuccess }) => {
        const dep = studioCtx.site.projectDependencies.find(
          (projectDep) =>
            projectDep.site.hostLessPackageInfo === hostLessPkgInfo
        );
        spawn(
          studioCtx.projectDependencyManager.removeByPkgId(
            ensure(
              dep,
              `didn't find the ${hostLessPkgInfo.name} pkg in the list of project dependencies`
            ).pkgId
          )
        );
        return deleteSuccess();
      })
    );
    return success();
  });
}

export const duplicateCodeComponentErrorDescription = (
  <p>
    Failed to load Studio, please make sure to register each code component with
    a unique <code>name</code>. In case you have two components with the same
    name in your codebase, you can register them with different{" "}
    <code>name</code>s but with the same <code>importName</code>.
  </p>
);

export function unknownCodeComponentErrorDescription(
  err: UnknownComponentError
) {
  return (
    <p>
      Some code components reference a component that is not registered. Please
      either register a code component named <code>{err.componentName}</code>
      or remove the references to it.
    </p>
  );
}

export async function showModalToRefreshCodeComponentProps(
  changes: CodeComponentMetaDiffWithComponent[],
  opts?: { force?: boolean }
) {
  if (opts?.force) {
    return true;
  }
  return !!(await showTemporaryPrompt<boolean>((onSubmit, onCancel) => (
    <Modal
      title={<h2>Refresh code component props</h2>}
      visible
      footer={null}
      onCancel={() => onCancel()}
    >
      <>
        <p>
          Some registered code components have updated existing props. Would you
          like to refresh these props? If you don't, your code components may
          not behave correctly.
        </p>
        <ul>
          {changes.map((diff) => (
            <ComponentPropDeltas diff={diff} />
          ))}
        </ul>
        <div className="mt-xlg">
          <Button
            className="mr-sm"
            type="primary"
            onClick={() => onSubmit(true)}
          >
            Confirm
          </Button>
        </div>
      </>
    </Modal>
  )));
}

function ComponentPropDeltas(props: {
  diff: CodeComponentMetaDiffWithComponent;
}) {
  const { diff } = props;
  const { component: c, addedProps, updatedProps, removedProps } = diff;
  return (
    <ul className={sty.item} key={c.name}>
      <h2>{getComponentDisplayName(c)}</h2>
      <ul className={sty.item}>
        {removedProps.length > 0 && (
          <ul>
            <div className={sty.headerItem}>
              <Icon icon={CloseIcon} className="removed-fg mr-sm" />
              Removed
            </div>
            <ul className="pl-xxlg">
              {removedProps.map((param) => (
                <li className={sty.item} key={param.variable.name}>
                  <strong>{param.variable.name}</strong> (
                  {typeDisplayName(param.type)})
                </li>
              ))}
            </ul>
          </ul>
        )}
      </ul>
      {addedProps.length > 0 && (
        <ul>
          <div className={sty.headerItem}>
            <Icon icon={PlusIcon} className="added-fg mr-sm" />
            Added
          </div>
          <ul className="pl-xxlg">
            {addedProps.map((param) => (
              <li className={sty.item} key={param.variable.name}>
                <strong>{param.variable.name}</strong> (
                {typeDisplayName(param.type)})
              </li>
            ))}
          </ul>
        </ul>
      )}
      {updatedProps.length > 0 && (
        <ul>
          <div className={sty.headerItem}>
            <Icon icon={PencilIcon} className="dimfg mr-sm" />
            Updated
          </div>
          <ul className="pl-xxlg">
            {updatedProps.map(({ before, after }) => {
              if (!typesEqual(before.type, after.type)) {
                // Needs to delete the param and add a new one
                // with the correct type
                return (
                  <li className={sty.item} key={after.variable.name}>
                    <s>
                      <strong>{before.variable.name}</strong> (
                      {typeDisplayName(before.type)})
                    </s>
                    <br />
                    <strong>{after.variable.name}</strong> (
                    {typeDisplayName(after.type)})
                  </li>
                );
              } else {
                return (
                  <li className={sty.item} key={after.variable.name}>
                    <strong>{after.variable.name}</strong> (
                    {typeDisplayName(after.type)})
                  </li>
                );
              }
            })}
          </ul>
        </ul>
      )}
    </ul>
  );
}

export function notifyInvalidImportName(components: string[]) {
  notification.error({
    message: "Some registered components have invalid javascript names",
    description: (
      <p>
        The following code components have invalid names; please use a valid
        javascript variable name in{" "}
        <a href="https://docs.plasmic.app/learn/code-components/#register-code-components-from-the-host-application">
          <code>meta.name</code> or <code>meta.importName</code>
        </a>{" "}
        for the following components:{" "}
        {components.map((c, i) => (
          <>
            {i > 0 && (i + 1 === components.length ? " and " : ", ")}
            <code>{c}</code>
          </>
        ))}
        .
      </p>
    ),
    duration: 0,
  });
}

interface HostLessPackageInfo {
  name: string;
  npmPkg: string[];
  cssImport: string[];
  deps: string[];
  minimumReactVersion?: string | null;
}

interface HostLessPackageFormProps {
  onSubmit: (res: HostLessPackageInfo | undefined) => void;
  initialValue?: HostLessPackageInfo;
}

function HostLessPackageForm({
  onSubmit,
  initialValue,
}: HostLessPackageFormProps) {
  const [form] = Form.useForm<HostLessPackageInfo>();
  const isProd = process.env.NODE_ENV === "production";
  return (
    <Modal
      title={null}
      visible={true}
      footer={null}
      onCancel={() => onSubmit(undefined)}
      closable={false}
      wrapClassName="prompt-modal"
    >
      {isProd && (
        <Alert
          type="warning"
          message={<strong>DO NOT USE THIS FORM</strong>}
          description={
            <div>
              <p>...unless you read this first!</p>
              <p>
                Submitting this form will publish a new version of this hostless
                project, which means new projects that import from this will be
                using the new version, but existing projects will not. This can
                cause issues!
              </p>
              <p>
                You should <strong>only use this form</strong> for:
              </p>
              <ul className="disc-list">
                <li>
                  <strong>
                    Creating a hostless project for the first time
                  </strong>
                  , or updating a hostless project that is not public yet.
                </li>
                <li>
                  <strong>You have a bundle migration</strong> that will
                  upgradeHostlessProject() and you're are ready to deploy this
                  to production RIGHT NOW.
                </li>
              </ul>
              <p>
                In general, you should use the Jenkins job to upgrade-hostless
                instead.
              </p>
            </div>
          }
        />
      )}
      <Form
        form={form}
        initialValues={initialValue}
        onFinish={async (values) => {
          if (values.name) {
            const proceed =
              !isProd ||
              (await reactHardConfirm({
                title: "ARE YOU SUPER SURE??",
                message:
                  "Did you read the warning and understand the implications, and will not make life difficult for the support engineer?",
                mustType: "Yes I am super duper sure",
              }));
            if (proceed) {
              onSubmit({
                name: values.name,
                npmPkg: filterFalsy(values.npmPkg || []),
                cssImport: filterFalsy(values.cssImport || []),
                deps: filterFalsy(values.deps || []),
                minimumReactVersion: values.minimumReactVersion,
              });
            } else {
              onSubmit(undefined);
            }
          }
        }}
      >
        <Form.Item name="name" label="What's the package for this project?">
          <Textbox
            name="input"
            placeholder="react-youtube"
            data-test-id="hostless-name"
            styleType={["bordered"]}
            autoFocus
          />
        </Form.Item>
        <Form.List name="npmPkg">
          {(fields, { add, remove }) => (
            <>
              NPM Package to be installed: <br />
              {fields.map((field) => (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Form.Item
                    name={field.name}
                    fieldKey={field.key}
                    style={{ width: "100%" }}
                  >
                    <Textbox
                      placeholder="@plasmicpkgs/react-youtube"
                      styleType={["bordered"]}
                      data-test-id="hostless-npm-pkg"
                    />
                  </Form.Item>
                  <Button onClick={() => remove(field.name)}>
                    <Icon icon={MinusIcon} />
                  </Button>
                </div>
              ))}
              <Form.Item>
                <Button
                  onClick={() => add()}
                  data-test-id="hostless-npm-pkg-plus"
                >
                  <Icon icon={PlusIcon} />
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.List name="cssImport">
          {(fields, { add, remove }) => (
            <>
              CSS path to be imported:
              {fields.map((field) => (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Form.Item
                    name={field.name}
                    fieldKey={field.key}
                    style={{ width: "100%" }}
                  >
                    <Textbox
                      placeholder="antd/dist/antd.css"
                      styleType={["bordered"]}
                    />
                  </Form.Item>
                  <Button onClick={() => remove(field.name)}>
                    <Icon icon={MinusIcon} />
                  </Button>
                </div>
              ))}
              <Form.Item>
                <Button onClick={() => add()}>
                  <Icon icon={PlusIcon} />
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.List name="deps">
          {(fields, { add, remove }) => (
            <>
              Any dependencies to other hostless packages?
              {fields.map((field) => (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Form.Item
                    name={field.name}
                    fieldKey={field.key}
                    style={{ width: "100%" }}
                  >
                    <Textbox placeholder="commerce" styleType={["bordered"]} />
                  </Form.Item>
                  <Button onClick={() => remove(field.name)}>
                    <Icon icon={MinusIcon} />
                  </Button>
                </div>
              ))}
              <Form.Item>
                <Button onClick={() => add()}>
                  <Icon icon={PlusIcon} />
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item
          name="minimumReactVersion"
          label="What's the minimum react version required for this project? (leave empty for none)"
          style={{ flexDirection: "column" }}
          labelCol={{ span: 24 }}
        >
          <Textbox
            name="input"
            placeholder=""
            data-test-id="hostless-react-version"
            styleType={["bordered"]}
          />
        </Form.Item>
        <Form.Item style={{ margin: 0 }}>
          <Button
            className="mr-sm"
            htmlType="submit"
            data-test-id="hostless-prompt-submit"
          >
            {"Submit (yes I'm sure!)"}
          </Button>
          <Button onClick={() => onSubmit(undefined)}>Cancel</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export async function promptHostLessPackageInfo(
  initialValue?: HostLessPackageInfo
) {
  return showTemporaryPrompt<HostLessPackageInfo | undefined>((onSubmit) => (
    <HostLessPackageForm onSubmit={onSubmit} initialValue={initialValue} />
  ));
}

// Returns true if the user needs to upgrade their host version
export function checkAndNotifyUnsupportedHostVersion(requiredVersion?: number) {
  if (!requiredVersion) {
    return false;
  }
  if (+((window.parent as any).__PlasmicHostVersion ?? "2") < requiredVersion) {
    notification.error({
      message: (
        <>
          Please upgrade the <code>@plasmicapp/*</code> packages in your host
          app
        </>
      ),
      description:
        "This feature requires a more recent version of the Plasmic NPM packages",
    });
    return true;
  }
  return false;
}

export function notifyCodeLibraryInsertion(
  name: string,
  jsIdentifier: string,
  type: string
) {
  if (!name) return;
  const commonOpts = { duration: 0 };
  switch (type) {
    case "function":
      notification.success({
        message: (
          <>
            <code>{name}</code> library installed. You can now use this package
            with the following code snippet:
            <br />
            <code lang="javascript">$$.{jsIdentifier}()</code>
          </>
        ),
        ...commonOpts,
      });
      break;
    case "object":
      notification.success({
        message: (
          <>
            <code>{name}</code> library installed. You can now call functions in
            this package from any code snippet with (replace "FUNCTION"):
            <br />
            <code lang="javascript">$$.{jsIdentifier}.FUNCTION()</code>
          </>
        ),
        ...commonOpts,
      });
      break;
    default:
      break;
  }
}

// Returns true if the user needs to upgrade their react version
export function checkAndNotifyUnsupportedReactVersion(
  sc: StudioCtx,
  deps: ProjectDependency[]
) {
  const invalidDep = deps.find(
    (dep) =>
      dep.site.hostLessPackageInfo?.minimumReactVersion &&
      semver.lt(
        sc.getSubReactVersion(),
        dep.site.hostLessPackageInfo?.minimumReactVersion
      )
  );
  if (invalidDep) {
    // Host app needs to be version 2 or greater to use the store
    notification.error({
      message: (
        <>
          Please upgrade the <code>react</code> package in your host app
        </>
      ),
      description: `This feature requires a react version >= ${
        invalidDep.site.hostLessPackageInfo!.minimumReactVersion
      }`,
    });
    return true;
  }
  return false;
}
