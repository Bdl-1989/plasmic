// This is a skeleton starter React component generated by Plasmic.
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import uniqBy from "lodash/uniqBy";
// This file is owned by you, feel free to edit as you see fit.
import { documentTitle } from "@/wab/client/components/dashboard/page-utils";
import { Spinner } from "@/wab/client/components/widgets";
import { useAppCtx } from "@/wab/client/contexts/AppContexts";
import {
  useAsyncFnStrict,
  useAsyncStrict,
} from "@/wab/client/hooks/useAsyncStrict";
import { useProjectsFilter } from "@/wab/client/hooks/useProjectsFilter";
import {
  DefaultMyPlaygroundProps,
  PlasmicMyPlayground,
} from "@/wab/client/plasmic/plasmic_kit_dashboard/PlasmicMyPlayground";
import { PERSONAL_WORKSPACE } from "@/wab/shared/Labels";
import * as React from "react";

export type MyPlaygroundProps = DefaultMyPlaygroundProps;

function MyPlayground_(props: MyPlaygroundProps, ref: HTMLElementRefOf<"div">) {
  const appCtx = useAppCtx();

  const [asyncData, fetchAsyncData] = useAsyncFnStrict(async () => {
    const { workspace, perms: workspacePerms } =
      await appCtx.api.getPersonalWorkspace();
    const workspaceId = workspace.id;
    const { projects, perms: projectsPerms } = await appCtx.api.getProjects({
      query: "byWorkspace",
      workspaceId,
    });
    const databases = await appCtx.api.listCmsDatabasesForWorkspace(
      workspaceId
    );
    const perms = uniqBy([...workspacePerms, ...projectsPerms], (p) => p.id);
    return { workspace, projects, databases, perms };
  }, []);
  useAsyncStrict(fetchAsyncData, []);

  const {
    projects,
    databases,
    matcher,
    props: filterProps,
  } = useProjectsFilter(asyncData.value?.projects, asyncData.value?.databases);

  return (
    <>
      {documentTitle(PERSONAL_WORKSPACE)}
      <PlasmicMyPlayground
        root={{ ref }}
        {...props}
        defaultLayout={{
          wrapChildren: (children) =>
            !asyncData?.value ? <Spinner /> : children,
        }}
        workspaceSection={
          !asyncData?.value
            ? {
                render: () => null,
              }
            : {
                workspace: {
                  ...asyncData.value?.workspace,
                  name: PERSONAL_WORKSPACE,
                  description: PERSONAL_WORKSPACE,
                },
                filterProps,
                databases,
                projects,
                perms: asyncData.value.perms,
                matcher,
                onUpdate: async () => {
                  await fetchAsyncData();
                },
              }
        }
      />
    </>
  );
}

const MyPlayground = React.forwardRef(MyPlayground_);
export default MyPlayground;
