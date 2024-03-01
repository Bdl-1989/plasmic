// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: nSkQWLjK-B

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

import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component
import NavButton from "../../components/dashboard/NavButton"; // plasmic-import: 82ZzbE4hazN/component
import FreeTrial from "../../components/FreeTrial"; // plasmic-import: p3GgKAlaQe/component
import NavSeparator from "../../components/dashboard/NavSeparator"; // plasmic-import: cOUHQYmbvX/component
import NavTeamSection from "../../components/dashboard/NavTeamSection"; // plasmic-import: VqaN_WL-stA/component
import NavWorkspaceButton from "../../components/dashboard/NavWorkspaceButton"; // plasmic-import: Cma6XahJmS/component

import { useScreenVariants as useScreenVariants_2DzYbdw5Xtx } from "../PlasmicGlobalVariant__Screen"; // plasmic-import: 2dzYbdw5Xtx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import sty from "./PlasmicDefaultLayout.module.css"; // plasmic-import: nSkQWLjK-B/css

import MarkFullColorIcon from "../plasmic_kit_design_system/PlasmicIcon__MarkFullColor"; // plasmic-import: l_n_OBLJg/icon
import PlusIcon from "../plasmic_kit/PlasmicIcon__Plus"; // plasmic-import: -k064DlQ8k8-L/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import RocketsvgIcon from "../q_4_icons/icons/PlasmicIcon__Rocketsvg"; // plasmic-import: uRQfbBjV9/icon
import TriangleBottomIcon from "../plasmic_kit/PlasmicIcon__TriangleBottom"; // plasmic-import: A8NQUZ7Lg1OHO/icon
import UnorderedListsvgIcon from "../q_4_icons/icons/PlasmicIcon__UnorderedListsvg"; // plasmic-import: suHkgkKOX/icon
import GolfsvgIcon from "../q_4_icons/icons/PlasmicIcon__Golfsvg"; // plasmic-import: U5dSOeF1P/icon
import Icon19Icon from "./icons/PlasmicIcon__Icon19"; // plasmic-import: MHEeMLIhlB/icon
import SparklessvgIcon from "../q_4_icons/icons/PlasmicIcon__Sparklessvg"; // plasmic-import: 9Z0Cu-c5J/icon
import UsersPlussvgIcon from "../q_4_icons/icons/PlasmicIcon__UsersPlussvg"; // plasmic-import: OqMJdWElK/icon
import BooksvgIcon from "../q_4_icons/icons/PlasmicIcon__Booksvg"; // plasmic-import: hxRmy8Nhq/icon
import HelpIcon from "../plasmic_kit/PlasmicIcon__Help"; // plasmic-import: -9-68IGPdLG-5/icon

createPlasmicElementProxy;

export type PlasmicDefaultLayout__VariantMembers = {
  navigation: "allProjects" | "myProjects" | "starters";
  hideStarters: "hideStarters";
  hideTeams: "hideTeams";
  hideNewProjectButton: "hideNewProjectButton";
  newProjectButtonAsDropdown: "newProjectButtonAsDropdown";
};
export type PlasmicDefaultLayout__VariantsArgs = {
  navigation?: SingleChoiceArg<"allProjects" | "myProjects" | "starters">;
  hideStarters?: SingleBooleanChoiceArg<"hideStarters">;
  hideTeams?: SingleBooleanChoiceArg<"hideTeams">;
  hideNewProjectButton?: SingleBooleanChoiceArg<"hideNewProjectButton">;
  newProjectButtonAsDropdown?: SingleBooleanChoiceArg<"newProjectButtonAsDropdown">;
};
type VariantPropType = keyof PlasmicDefaultLayout__VariantsArgs;
export const PlasmicDefaultLayout__VariantProps = new Array<VariantPropType>(
  "navigation",
  "hideStarters",
  "hideTeams",
  "hideNewProjectButton",
  "newProjectButtonAsDropdown"
);

export type PlasmicDefaultLayout__ArgsType = {
  children?: React.ReactNode;
  avatar?: React.ReactNode;
  teams?: React.ReactNode;
};
type ArgPropType = keyof PlasmicDefaultLayout__ArgsType;
export const PlasmicDefaultLayout__ArgProps = new Array<ArgPropType>(
  "children",
  "avatar",
  "teams"
);

export type PlasmicDefaultLayout__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<"header">;
  headerWrapper?: Flex__<"div">;
  headerLogoLink?: Flex__<"a">;
  headerLogo?: Flex__<"svg">;
  headerActions?: Flex__<"div">;
  newProjectButton?: Flex__<typeof Button>;
  text?: Flex__<"div">;
  upgradeButton?: Flex__<typeof NavButton>;
  freeTrial?: Flex__<typeof FreeTrial>;
  wrapper?: Flex__<"div">;
  sidebar?: Flex__<"aside">;
  nav?: Flex__<"nav">;
  allProjectsButton?: Flex__<typeof NavButton>;
  myProjectsButton?: Flex__<typeof NavButton>;
  startersButton?: Flex__<typeof NavButton>;
  navFooter?: Flex__<"footer">;
  newTeamButton?: Flex__<typeof NavButton>;
  documentationButton?: Flex__<typeof NavButton>;
  helpButton?: Flex__<typeof NavButton>;
  userButton?: Flex__<typeof NavButton>;
  main?: Flex__<"main">;
};

export interface DefaultDefaultLayoutProps {
  children?: React.ReactNode;
  avatar?: React.ReactNode;
  teams?: React.ReactNode;
  navigation?: SingleChoiceArg<"allProjects" | "myProjects" | "starters">;
  hideStarters?: SingleBooleanChoiceArg<"hideStarters">;
  hideTeams?: SingleBooleanChoiceArg<"hideTeams">;
  hideNewProjectButton?: SingleBooleanChoiceArg<"hideNewProjectButton">;
  newProjectButtonAsDropdown?: SingleBooleanChoiceArg<"newProjectButtonAsDropdown">;
  className?: string;
}

const $$ = {};

function PlasmicDefaultLayout__RenderFunc(props: {
  variants: PlasmicDefaultLayout__VariantsArgs;
  args: PlasmicDefaultLayout__ArgsType;
  overrides: PlasmicDefaultLayout__OverridesType;
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
        path: "navigation",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.navigation,
      },
      {
        path: "hideStarters",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hideStarters,
      },
      {
        path: "hideTeams",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hideTeams,
      },
      {
        path: "hideNewProjectButton",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.hideNewProjectButton,
      },
      {
        path: "newProjectButtonAsDropdown",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.newProjectButtonAsDropdown,
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_2DzYbdw5Xtx(),
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_pricing_css.plasmic_tokens,
        sty.root,
        { [sty.roothideTeams]: hasVariant($state, "hideTeams", "hideTeams") }
      )}
    >
      <header
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        className={classNames(projectcss.all, sty.header)}
      >
        <div
          data-plasmic-name={"headerWrapper"}
          data-plasmic-override={overrides.headerWrapper}
          className={classNames(projectcss.all, sty.headerWrapper, {
            [sty.headerWrapperhideNewProjectButton]: hasVariant(
              $state,
              "hideNewProjectButton",
              "hideNewProjectButton"
            ),
          })}
        >
          <a
            data-plasmic-name={"headerLogoLink"}
            data-plasmic-override={overrides.headerLogoLink}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.headerLogoLink
            )}
            href={"/"}
          >
            <MarkFullColorIcon
              data-plasmic-name={"headerLogo"}
              data-plasmic-override={overrides.headerLogo}
              className={classNames(projectcss.all, sty.headerLogo)}
              role={"img"}
            />
          </a>
          <Stack__
            as={"div"}
            data-plasmic-name={"headerActions"}
            data-plasmic-override={overrides.headerActions}
            hasGap={true}
            className={classNames(projectcss.all, sty.headerActions)}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox___8H74X, {
                [sty.freeBoxhideNewProjectButton___8H74X7VyVs]: hasVariant(
                  $state,
                  "hideNewProjectButton",
                  "hideNewProjectButton"
                ),
              })}
            >
              <Button
                data-plasmic-name={"newProjectButton"}
                data-plasmic-override={overrides.newProjectButton}
                className={classNames("__wab_instance", {
                  [sty.newProjectButtonhideNewProjectButton]: hasVariant(
                    $state,
                    "hideNewProjectButton",
                    "hideNewProjectButton"
                  ),
                })}
                endIcon={
                  <ChevronDownsvgIcon
                    className={classNames(projectcss.all, sty.svg__iw3P2, {
                      [sty.svgnewProjectButtonAsDropdown__iw3P2LewDp]:
                        hasVariant(
                          $state,
                          "newProjectButtonAsDropdown",
                          "newProjectButtonAsDropdown"
                        ),
                    })}
                    role={"img"}
                  />
                }
                size={"wide"}
                startIcon={
                  <PlusIcon
                    className={classNames(projectcss.all, sty.svg__pMrgf)}
                    role={"img"}
                  />
                }
                type={["clearPrimary"]}
                withIcons={
                  hasVariant(
                    $state,
                    "newProjectButtonAsDropdown",
                    "newProjectButtonAsDropdown"
                  )
                    ? ["startIcon", "endIcon"]
                    : ["startIcon"]
                }
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text,
                    {
                      [sty.texthideNewProjectButton]: hasVariant(
                        $state,
                        "hideNewProjectButton",
                        "hideNewProjectButton"
                      ),
                    }
                  )}
                >
                  {"New project"}
                </div>
              </Button>
            </div>
            <NavButton
              data-plasmic-name={"upgradeButton"}
              data-plasmic-override={overrides.upgradeButton}
              bold={true}
              className={classNames("__wab_instance", sty.upgradeButton)}
              endIcon={
                <TriangleBottomIcon
                  className={classNames(projectcss.all, sty.svg__uSFd)}
                  role={"img"}
                />
              }
              smallIcon={true}
              startIcon={
                <RocketsvgIcon
                  className={classNames(projectcss.all, sty.svg__vF1)}
                  role={"img"}
                />
              }
              violet={true}
            >
              {"Upgrade"}
            </NavButton>
            <FreeTrial
              data-plasmic-name={"freeTrial"}
              data-plasmic-override={overrides.freeTrial}
              className={classNames("__wab_instance", sty.freeTrial)}
              topBar={
                hasVariant(globalVariants, "screen", "mobile")
                  ? true
                  : undefined
              }
            />
          </Stack__>
        </div>
      </header>
      <div
        className={classNames(projectcss.all, sty.freeBox__g4Hbj, {
          [sty.freeBoxhideTeams__g4Hbj5Ktlm]: hasVariant(
            $state,
            "hideTeams",
            "hideTeams"
          ),
        })}
      >
        <div
          data-plasmic-name={"wrapper"}
          data-plasmic-override={overrides.wrapper}
          className={classNames(projectcss.all, sty.wrapper)}
        >
          <aside
            data-plasmic-name={"sidebar"}
            data-plasmic-override={overrides.sidebar}
            className={classNames(projectcss.all, sty.sidebar, {
              [sty.sidebarhideTeams]: hasVariant(
                $state,
                "hideTeams",
                "hideTeams"
              ),
              [sty.sidebarnavigation_allProjects]: hasVariant(
                $state,
                "navigation",
                "allProjects"
              ),
            })}
          >
            <Stack__
              as={"nav"}
              data-plasmic-name={"nav"}
              data-plasmic-override={overrides.nav}
              hasGap={true}
              className={classNames(projectcss.all, sty.nav, {
                [sty.navhideTeams]: hasVariant(
                  $state,
                  "hideTeams",
                  "hideTeams"
                ),
              })}
            >
              <NavButton
                data-plasmic-name={"allProjectsButton"}
                data-plasmic-override={overrides.allProjectsButton}
                className={classNames("__wab_instance", sty.allProjectsButton, {
                  [sty.allProjectsButtonnavigation_allProjects]: hasVariant(
                    $state,
                    "navigation",
                    "allProjects"
                  ),
                })}
                endIcon={
                  <TriangleBottomIcon
                    className={classNames(projectcss.all, sty.svg__ti7An)}
                    role={"img"}
                  />
                }
                href={`/projects`}
                selected={
                  hasVariant($state, "navigation", "allProjects")
                    ? true
                    : undefined
                }
                startIcon={
                  <UnorderedListsvgIcon
                    className={classNames(projectcss.all, sty.svg__suQ4M)}
                    role={"img"}
                  />
                }
              >
                {"All projects"}
              </NavButton>
              <NavButton
                data-plasmic-name={"myProjectsButton"}
                data-plasmic-override={overrides.myProjectsButton}
                className={classNames("__wab_instance", sty.myProjectsButton, {
                  [sty.myProjectsButtonnavigation_allProjects]: hasVariant(
                    $state,
                    "navigation",
                    "allProjects"
                  ),
                  [sty.myProjectsButtonnavigation_myProjects]: hasVariant(
                    $state,
                    "navigation",
                    "myProjects"
                  ),
                })}
                endIcon={
                  <TriangleBottomIcon
                    className={classNames(projectcss.all, sty.svg__ebJx)}
                    role={"img"}
                  />
                }
                href={`/playground`}
                selected={
                  hasVariant($state, "navigation", "myProjects")
                    ? true
                    : undefined
                }
                startIcon={
                  <GolfsvgIcon
                    className={classNames(projectcss.all, sty.svg__gluGf)}
                    role={"img"}
                  />
                }
              >
                {"My Playground"}
              </NavButton>
              <NavSeparator
                className={classNames(
                  "__wab_instance",
                  sty.navSeparator__e9MNn,
                  {
                    [sty.navSeparatorhideStarters__e9MNnwfmdR]: hasVariant(
                      $state,
                      "hideStarters",
                      "hideStarters"
                    ),
                    [sty.navSeparatorhideTeams__e9MNn5Ktlm]: hasVariant(
                      $state,
                      "hideTeams",
                      "hideTeams"
                    ),
                  }
                )}
                hideStarters={
                  hasVariant($state, "hideStarters", "hideStarters")
                    ? true
                    : undefined
                }
              />

              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___1I5Dl, {
                  [sty.freeBoxhideTeams___1I5Dl5Ktlm]: hasVariant(
                    $state,
                    "hideTeams",
                    "hideTeams"
                  ),
                })}
              >
                {renderPlasmicSlot({
                  defaultContents: (
                    <NavTeamSection
                      className={classNames(
                        "__wab_instance",
                        sty.navTeamSection__fNQog
                      )}
                    />
                  ),

                  value: args.teams,
                })}
              </Stack__>
              <NavSeparator
                className={classNames(
                  "__wab_instance",
                  sty.navSeparator__xnjTf,
                  {
                    [sty.navSeparatorhideStarters__xnjTfwfmdR]: hasVariant(
                      $state,
                      "hideStarters",
                      "hideStarters"
                    ),
                    [sty.navSeparatorhideTeams__xnjTf5Ktlm]: hasVariant(
                      $state,
                      "hideTeams",
                      "hideTeams"
                    ),
                  }
                )}
                hideStarters={
                  hasVariant($state, "hideStarters", "hideStarters")
                    ? true
                    : undefined
                }
              />

              <NavButton
                data-plasmic-name={"startersButton"}
                data-plasmic-override={overrides.startersButton}
                className={classNames("__wab_instance", sty.startersButton, {
                  [sty.startersButtonhideStarters]: hasVariant(
                    $state,
                    "hideStarters",
                    "hideStarters"
                  ),
                  [sty.startersButtonnavigation_allProjects]: hasVariant(
                    $state,
                    "navigation",
                    "allProjects"
                  ),
                  [sty.startersButtonnavigation_starters]: hasVariant(
                    $state,
                    "navigation",
                    "starters"
                  ),
                })}
                endIcon={
                  <TriangleBottomIcon
                    className={classNames(projectcss.all, sty.svg__tkcPl)}
                    role={"img"}
                  />
                }
                href={`/projects`}
                selected={
                  hasVariant($state, "navigation", "starters")
                    ? true
                    : undefined
                }
                startIcon={
                  <SparklessvgIcon
                    className={classNames(projectcss.all, sty.svg__cyyvY)}
                    role={"img"}
                  />
                }
              >
                {hasVariant(globalVariants, "screen", "mobile")
                  ? "Starters"
                  : "Starters"}
              </NavButton>
            </Stack__>
            <Stack__
              as={"footer"}
              data-plasmic-name={"navFooter"}
              data-plasmic-override={overrides.navFooter}
              hasGap={true}
              className={classNames(projectcss.all, sty.navFooter)}
            >
              <NavButton
                data-plasmic-name={"newTeamButton"}
                data-plasmic-override={overrides.newTeamButton}
                className={classNames("__wab_instance", sty.newTeamButton)}
                endIcon={
                  <TriangleBottomIcon
                    className={classNames(projectcss.all, sty.svg__fmNan)}
                    role={"img"}
                  />
                }
                startIcon={
                  <UsersPlussvgIcon
                    className={classNames(projectcss.all, sty.svg___9DbPc)}
                    role={"img"}
                  />
                }
              >
                {"New organization"}
              </NavButton>
              <NavButton
                data-plasmic-name={"documentationButton"}
                data-plasmic-override={overrides.documentationButton}
                className={classNames(
                  "__wab_instance",
                  sty.documentationButton
                )}
                endIcon={
                  <TriangleBottomIcon
                    className={classNames(projectcss.all, sty.svg__qc8Uw)}
                    role={"img"}
                  />
                }
                href={"https://docs.plasmic.app/"}
                startIcon={
                  <BooksvgIcon
                    className={classNames(projectcss.all, sty.svg___2Eo9K)}
                    role={"img"}
                  />
                }
                target={"_blank"}
              >
                {"Documentation"}
              </NavButton>
              <NavButton
                data-plasmic-name={"helpButton"}
                data-plasmic-override={overrides.helpButton}
                className={classNames("__wab_instance", sty.helpButton)}
                endIcon={
                  <TriangleBottomIcon
                    className={classNames(projectcss.all, sty.svg___9PUi)}
                    role={"img"}
                  />
                }
                href={"https://forum.plasmic.app/c/5"}
                startIcon={
                  <HelpIcon
                    className={classNames(projectcss.all, sty.svg__lkX6)}
                    role={"img"}
                  />
                }
                target={"_blank"}
              >
                {"Help"}
              </NavButton>
              <NavButton
                data-plasmic-name={"userButton"}
                data-plasmic-override={overrides.userButton}
                className={classNames("__wab_instance", sty.userButton)}
                endIcon={
                  <ChevronDownsvgIcon
                    className={classNames(projectcss.all, sty.svg__dvFlL)}
                    role={"img"}
                  />
                }
                startIcon={
                  <div
                    className={classNames(projectcss.all, sty.freeBox__hmXkw)}
                  >
                    {renderPlasmicSlot({
                      defaultContents: (
                        <img
                          alt={""}
                          className={classNames(
                            projectcss.all,
                            projectcss.img,
                            sty.img__xzqEi
                          )}
                        />
                      ),

                      value: args.avatar,
                    })}
                  </div>
                }
                withEndIcon={true}
              >
                {"kim23"}
              </NavButton>
            </Stack__>
          </aside>
          <main
            data-plasmic-name={"main"}
            data-plasmic-override={overrides.main}
            className={classNames(projectcss.all, sty.main, {
              [sty.mainhideTeams]: hasVariant($state, "hideTeams", "hideTeams"),
              [sty.mainnavigation_allProjects]: hasVariant(
                $state,
                "navigation",
                "allProjects"
              ),
            })}
          >
            {renderPlasmicSlot({
              defaultContents: null,
              value: args.children,
            })}
          </main>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "headerWrapper",
    "headerLogoLink",
    "headerLogo",
    "headerActions",
    "newProjectButton",
    "text",
    "upgradeButton",
    "freeTrial",
    "wrapper",
    "sidebar",
    "nav",
    "allProjectsButton",
    "myProjectsButton",
    "startersButton",
    "navFooter",
    "newTeamButton",
    "documentationButton",
    "helpButton",
    "userButton",
    "main",
  ],
  header: [
    "header",
    "headerWrapper",
    "headerLogoLink",
    "headerLogo",
    "headerActions",
    "newProjectButton",
    "text",
    "upgradeButton",
    "freeTrial",
  ],
  headerWrapper: [
    "headerWrapper",
    "headerLogoLink",
    "headerLogo",
    "headerActions",
    "newProjectButton",
    "text",
    "upgradeButton",
    "freeTrial",
  ],
  headerLogoLink: ["headerLogoLink", "headerLogo"],
  headerLogo: ["headerLogo"],
  headerActions: [
    "headerActions",
    "newProjectButton",
    "text",
    "upgradeButton",
    "freeTrial",
  ],
  newProjectButton: ["newProjectButton", "text"],
  text: ["text"],
  upgradeButton: ["upgradeButton"],
  freeTrial: ["freeTrial"],
  wrapper: [
    "wrapper",
    "sidebar",
    "nav",
    "allProjectsButton",
    "myProjectsButton",
    "startersButton",
    "navFooter",
    "newTeamButton",
    "documentationButton",
    "helpButton",
    "userButton",
    "main",
  ],
  sidebar: [
    "sidebar",
    "nav",
    "allProjectsButton",
    "myProjectsButton",
    "startersButton",
    "navFooter",
    "newTeamButton",
    "documentationButton",
    "helpButton",
    "userButton",
  ],
  nav: ["nav", "allProjectsButton", "myProjectsButton", "startersButton"],
  allProjectsButton: ["allProjectsButton"],
  myProjectsButton: ["myProjectsButton"],
  startersButton: ["startersButton"],
  navFooter: [
    "navFooter",
    "newTeamButton",
    "documentationButton",
    "helpButton",
    "userButton",
  ],
  newTeamButton: ["newTeamButton"],
  documentationButton: ["documentationButton"],
  helpButton: ["helpButton"],
  userButton: ["userButton"],
  main: ["main"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "header";
  headerWrapper: "div";
  headerLogoLink: "a";
  headerLogo: "svg";
  headerActions: "div";
  newProjectButton: typeof Button;
  text: "div";
  upgradeButton: typeof NavButton;
  freeTrial: typeof FreeTrial;
  wrapper: "div";
  sidebar: "aside";
  nav: "nav";
  allProjectsButton: typeof NavButton;
  myProjectsButton: typeof NavButton;
  startersButton: typeof NavButton;
  navFooter: "footer";
  newTeamButton: typeof NavButton;
  documentationButton: typeof NavButton;
  helpButton: typeof NavButton;
  userButton: typeof NavButton;
  main: "main";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDefaultLayout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDefaultLayout__VariantsArgs;
    args?: PlasmicDefaultLayout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDefaultLayout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDefaultLayout__ArgsType,
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
          internalArgPropNames: PlasmicDefaultLayout__ArgProps,
          internalVariantPropNames: PlasmicDefaultLayout__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicDefaultLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDefaultLayout";
  } else {
    func.displayName = `PlasmicDefaultLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicDefaultLayout = Object.assign(
  // Top-level PlasmicDefaultLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    headerWrapper: makeNodeComponent("headerWrapper"),
    headerLogoLink: makeNodeComponent("headerLogoLink"),
    headerLogo: makeNodeComponent("headerLogo"),
    headerActions: makeNodeComponent("headerActions"),
    newProjectButton: makeNodeComponent("newProjectButton"),
    text: makeNodeComponent("text"),
    upgradeButton: makeNodeComponent("upgradeButton"),
    freeTrial: makeNodeComponent("freeTrial"),
    wrapper: makeNodeComponent("wrapper"),
    sidebar: makeNodeComponent("sidebar"),
    nav: makeNodeComponent("nav"),
    allProjectsButton: makeNodeComponent("allProjectsButton"),
    myProjectsButton: makeNodeComponent("myProjectsButton"),
    startersButton: makeNodeComponent("startersButton"),
    navFooter: makeNodeComponent("navFooter"),
    newTeamButton: makeNodeComponent("newTeamButton"),
    documentationButton: makeNodeComponent("documentationButton"),
    helpButton: makeNodeComponent("helpButton"),
    userButton: makeNodeComponent("userButton"),
    main: makeNodeComponent("main"),

    // Metadata about props expected for PlasmicDefaultLayout
    internalVariantProps: PlasmicDefaultLayout__VariantProps,
    internalArgProps: PlasmicDefaultLayout__ArgProps,
  }
);

export default PlasmicDefaultLayout;
/* prettier-ignore-end */
