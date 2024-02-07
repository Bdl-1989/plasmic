// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import {
  DefaultTeamFiltersProps,
  PlasmicTeamFilters,
} from "@/wab/client/plasmic/plasmic_kit_analytics/PlasmicTeamFilters";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { uniqBy } from "lodash";
import * as React from "react";
import { useProjectAnalyticsMeta, useTeamProjects } from "./analytics-contexts";
import { COMPONENT_PICKER_INFO } from "./utils";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface TeamFiltersProps extends Omit<DefaultTeamFiltersProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultTeamFiltersProps altogether and have
// total control over the props for your component.
export interface TeamFiltersProps extends DefaultTeamFiltersProps {
  teamId: string;
  workspaceId?: string;
  projectId?: string;
  componentId?: string;
  splitId?: string;
  setWorkspaceId: (_?: string) => void;
  setProjectId: (_?: string) => void;
  setComponentId: (_?: string) => void;
  setSplitId: (_?: string) => void;
}

function TeamFilters_(props: TeamFiltersProps, ref: HTMLElementRefOf<"div">) {
  const {
    teamId,
    workspaceId,
    projectId,
    componentId,
    splitId,
    setWorkspaceId,
    setProjectId,
    setComponentId,
    setSplitId,
    ...rest
  } = props;

  const teamProjects = useTeamProjects(teamId) ?? [];
  const projectMeta = useProjectAnalyticsMeta(teamId, projectId) ?? {
    pages: [],
    splits: [],
  };

  return (
    <PlasmicTeamFilters
      root={{ ref }}
      workspaceSelect={{
        options: [],
        selected: undefined,
        onChange: (x) => null,
      }}
      projectSelect={{
        options: [
          {
            label: "Unset",
            value: undefined,
          },
          ...teamProjects.map((project) => ({
            label: project.name,
            value: project.id,
            group: project.workspaceId ?? undefined,
          })),
        ],
        groups: uniqBy(
          teamProjects
            .filter((project) => project.workspaceId && project.workspaceName)
            .map((project) => ({
              label: project.workspaceName!,
              value: project.workspaceId!,
            })),
          (x) => `${x.label}@${x.value}`
        ),
        selected: projectId,
        onChange: (x) => setProjectId(x),
      }}
      pageSelect={{
        isDisabled: !projectId,
        info: COMPONENT_PICKER_INFO,
        options: [
          {
            label: "Unset",
            value: undefined,
          },
          ...projectMeta.pages.map((page) => ({
            label: page.name,
            value: page.id,
          })),
        ],
        selected: componentId,
        onChange: (x) => setComponentId(x),
      }}
      optimizationsSelect={{
        options: [
          {
            label: "Unset",
            value: undefined,
          },
          ...projectMeta.splits.map((split) => ({
            label: split.name,
            value: split.id,
          })),
        ],
        selected: splitId,
        onChange: (x) => setSplitId(x),
      }}
      {...rest}
    />
  );
}

const TeamFilters = React.forwardRef(TeamFilters_);
export default TeamFilters;
