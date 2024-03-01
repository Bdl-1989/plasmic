// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: 2FvZipCkyxl

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName,
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions,
} from "@plasmicapp/react-web/lib/host";

import EditableResourceName from "../../components/EditableResourceName"; // plasmic-import: UttGK3xVrb/component
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component
import CopyButton from "../../components/CopyButton"; // plasmic-import: u7TII072Seb/component
import Shared from "../../components/dashboard/Shared"; // plasmic-import: r2L4x5kulJ/component
import MenuButton from "../../components/widgets/MenuButton"; // plasmic-import: h69wHrrKtL/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import sty from "./PlasmicProjectListItem.module.css"; // plasmic-import: 2FvZipCkyxl/css

import ArrowRightsvgIcon from "../q_4_icons/icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: 9Jv8jb253/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

createPlasmicElementProxy;

export type PlasmicProjectListItem__VariantMembers = {
  explorations: "moreInfoOnHover";
  showWorkspace: "showWorkspace";
};
export type PlasmicProjectListItem__VariantsArgs = {
  explorations?: MultiChoiceArg<"moreInfoOnHover">;
  showWorkspace?: SingleBooleanChoiceArg<"showWorkspace">;
};
type VariantPropType = keyof PlasmicProjectListItem__VariantsArgs;
export const PlasmicProjectListItem__VariantProps = new Array<VariantPropType>(
  "explorations",
  "showWorkspace"
);

export type PlasmicProjectListItem__ArgsType = {
  timestamp?: React.ReactNode;
};
type ArgPropType = keyof PlasmicProjectListItem__ArgsType;
export const PlasmicProjectListItem__ArgProps = new Array<ArgPropType>(
  "timestamp"
);

export type PlasmicProjectListItem__OverridesType = {
  root?: Flex__<"a">;
  left?: Flex__<"div">;
  editableName?: Flex__<typeof EditableResourceName>;
  workspace?: Flex__<typeof Button>;
  projectIdCopyButton?: Flex__<typeof CopyButton>;
  right?: Flex__<"div">;
  shared?: Flex__<typeof Shared>;
  menuButton?: Flex__<typeof MenuButton>;
  updatedJustNow?: Flex__<"div">;
};

export interface DefaultProjectListItemProps {
  timestamp?: React.ReactNode;
  explorations?: MultiChoiceArg<"moreInfoOnHover">;
  showWorkspace?: SingleBooleanChoiceArg<"showWorkspace">;
  className?: string;
}

const $$ = {};

function PlasmicProjectListItem__RenderFunc(props: {
  variants: PlasmicProjectListItem__VariantsArgs;
  args: PlasmicProjectListItem__ArgsType;
  overrides: PlasmicProjectListItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "explorations",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.explorations,
      },
      {
        path: "showWorkspace",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showWorkspace,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  const [isRootFocus, triggerRootFocusProps] = useTrigger("useFocused", {});
  const [isRootFocusVisible, triggerRootFocusVisibleProps] = useTrigger(
    "useFocusVisible",
    {
      isTextInput: false,
    }
  );
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    focusFocusVisible_root: isRootFocus && isRootFocusVisible,
    hover_root: isRootHover,
  };

  return (
    <Stack__
      as={"a"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_pricing_css.plasmic_tokens,
        sty.root,
        {
          [sty.root___focused__focusVisible]: triggers.focusFocusVisible_root,
          [sty.rootexplorations_moreInfoOnHover]: hasVariant(
            $state,
            "explorations",
            "moreInfoOnHover"
          ),
          [sty.rootshowWorkspace]: hasVariant(
            $state,
            "showWorkspace",
            "showWorkspace"
          ),
        }
      )}
      href={"#"}
      data-plasmic-trigger-props={[
        triggerRootFocusProps,
        triggerRootFocusVisibleProps,
        triggerRootHoverProps,
      ]}
    >
      <div
        data-plasmic-name={"left"}
        data-plasmic-override={overrides.left}
        className={classNames(projectcss.all, sty.left, {
          [sty.left___focused__focusVisible]: triggers.focusFocusVisible_root,
          [sty.leftexplorations_moreInfoOnHover]: hasVariant(
            $state,
            "explorations",
            "moreInfoOnHover"
          ),
          [sty.leftshowWorkspace]: hasVariant(
            $state,
            "showWorkspace",
            "showWorkspace"
          ),
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox___5QBoh, {
            [sty.freeBoxexplorations_moreInfoOnHover___5QBohpRuAf]: hasVariant(
              $state,
              "explorations",
              "moreInfoOnHover"
            ),
            [sty.freeBoxshowWorkspace___5QBoh00LnU]: hasVariant(
              $state,
              "showWorkspace",
              "showWorkspace"
            ),
          })}
        >
          <EditableResourceName
            data-plasmic-name={"editableName"}
            data-plasmic-override={overrides.editableName}
            className={classNames("__wab_instance", sty.editableName, {
              [sty.editableNameexplorations_moreInfoOnHover]: hasVariant(
                $state,
                "explorations",
                "moreInfoOnHover"
              ),
              [sty.editableNameshowWorkspace]: hasVariant(
                $state,
                "showWorkspace",
                "showWorkspace"
              ),
            })}
            name={triggers.hover_root ? "Untitled Project" : "Untitled Project"}
            state={triggers.hover_root ? "hover" : undefined}
          />

          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__e1Zgn, {
              [sty.freeBoxexplorations_moreInfoOnHover__e1ZgnPRuAf]: hasVariant(
                $state,
                "explorations",
                "moreInfoOnHover"
              ),
              [sty.freeBoxshowWorkspace__e1Zgn00LnU]: hasVariant(
                $state,
                "showWorkspace",
                "showWorkspace"
              ),
            })}
          >
            {renderPlasmicSlot({
              defaultContents: "updated 1h ago",
              value: args.timestamp,
              className: classNames(sty.slotTargetTimestamp, {
                [sty.slotTargetTimestamp___focused__focusVisible]:
                  triggers.focusFocusVisible_root,
                [sty.slotTargetTimestampexplorations_moreInfoOnHover]:
                  hasVariant($state, "explorations", "moreInfoOnHover"),
                [sty.slotTargetTimestampshowWorkspace]: hasVariant(
                  $state,
                  "showWorkspace",
                  "showWorkspace"
                ),
              }),
            })}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__dkyrQ,
                {
                  [sty.textshowWorkspace__dkyrQ00LnU]: hasVariant(
                    $state,
                    "showWorkspace",
                    "showWorkspace"
                  ),
                }
              )}
            >
              {"\u2022"}
            </div>
            {(
              hasVariant($state, "showWorkspace", "showWorkspace")
                ? true
                : false
            ) ? (
              <Button
                data-plasmic-name={"workspace"}
                data-plasmic-override={overrides.workspace}
                className={classNames("__wab_instance", sty.workspace, {
                  [sty.workspaceshowWorkspace]: hasVariant(
                    $state,
                    "showWorkspace",
                    "showWorkspace"
                  ),
                })}
                endIcon={
                  <ChevronDownsvgIcon
                    className={classNames(projectcss.all, sty.svg__cf41V)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ArrowRightsvgIcon
                    className={classNames(projectcss.all, sty.svg__i6LCr)}
                    role={"img"}
                  />
                }
                type={
                  hasVariant($state, "showWorkspace", "showWorkspace")
                    ? ["link"]
                    : undefined
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zDU
                  )}
                >
                  {"PlasmicKit"}
                </div>
              </Button>
            ) : null}
            {(
              hasVariant($state, "explorations", "moreInfoOnHover") &&
              triggers.hover_root
                ? true
                : false
            ) ? (
              <CopyButton
                data-plasmic-name={"projectIdCopyButton"}
                data-plasmic-override={overrides.projectIdCopyButton}
                className={classNames(
                  "__wab_instance",
                  sty.projectIdCopyButton,
                  {
                    [sty.projectIdCopyButtonexplorations_moreInfoOnHover]:
                      hasVariant($state, "explorations", "moreInfoOnHover"),
                  }
                )}
                version={"ID: ooL7EhXDmFQWnW9sxtchhE"}
              />
            ) : null}
          </Stack__>
        </div>
      </div>
      <div
        data-plasmic-name={"right"}
        data-plasmic-override={overrides.right}
        className={classNames(projectcss.all, sty.right)}
      >
        <Shared
          data-plasmic-name={"shared"}
          data-plasmic-override={overrides.shared}
          className={classNames("__wab_instance", sty.shared)}
        />

        <MenuButton
          data-plasmic-name={"menuButton"}
          data-plasmic-override={overrides.menuButton}
          hoverText={"More…"}
          stepUp={true}
        />
      </div>
      <div
        data-plasmic-name={"updatedJustNow"}
        data-plasmic-override={overrides.updatedJustNow}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.updatedJustNow
        )}
      >
        {"updated just now"}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "left",
    "editableName",
    "workspace",
    "projectIdCopyButton",
    "right",
    "shared",
    "menuButton",
    "updatedJustNow",
  ],
  left: ["left", "editableName", "workspace", "projectIdCopyButton"],
  editableName: ["editableName"],
  workspace: ["workspace"],
  projectIdCopyButton: ["projectIdCopyButton"],
  right: ["right", "shared", "menuButton"],
  shared: ["shared"],
  menuButton: ["menuButton"],
  updatedJustNow: ["updatedJustNow"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
  left: "div";
  editableName: typeof EditableResourceName;
  workspace: typeof Button;
  projectIdCopyButton: typeof CopyButton;
  right: "div";
  shared: typeof Shared;
  menuButton: typeof MenuButton;
  updatedJustNow: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjectListItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjectListItem__VariantsArgs;
    args?: PlasmicProjectListItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjectListItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProjectListItem__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProjectListItem__ArgProps,
          internalVariantPropNames: PlasmicProjectListItem__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicProjectListItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjectListItem";
  } else {
    func.displayName = `PlasmicProjectListItem.${nodeName}`;
  }
  return func;
}

export const PlasmicProjectListItem = Object.assign(
  // Top-level PlasmicProjectListItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    left: makeNodeComponent("left"),
    editableName: makeNodeComponent("editableName"),
    workspace: makeNodeComponent("workspace"),
    projectIdCopyButton: makeNodeComponent("projectIdCopyButton"),
    right: makeNodeComponent("right"),
    shared: makeNodeComponent("shared"),
    menuButton: makeNodeComponent("menuButton"),
    updatedJustNow: makeNodeComponent("updatedJustNow"),

    // Metadata about props expected for PlasmicProjectListItem
    internalVariantProps: PlasmicProjectListItem__VariantProps,
    internalArgProps: PlasmicProjectListItem__ArgProps,
  }
);

export default PlasmicProjectListItem;
/* prettier-ignore-end */
