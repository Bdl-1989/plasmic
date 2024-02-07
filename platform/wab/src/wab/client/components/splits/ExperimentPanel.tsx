import { isKnownGlobalVariantSplitContent } from "@/wab/classes";
// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { Split, Variant } from "@/wab/classes";
import { makeVariantsController } from "@/wab/client/components/variants/VariantsController";
import DimTokenSpinner from "@/wab/client/components/widgets/DimTokenSelector";
import { EditableLabel } from "@/wab/client/components/widgets/EditableLabel";
import {
  DefaultExperimentPanelProps,
  PlasmicExperimentPanel,
} from "@/wab/client/plasmic/plasmic_kit_optimize/PlasmicExperimentPanel";
import { useStudioCtx } from "@/wab/client/studio-ctx/StudioCtx";
import { spawn } from "@/wab/common";
import { SplitStatus, SplitType } from "@/wab/splits";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { observer } from "mobx-react";
import * as React from "react";
import EditOverrideToggleButton from "./EditOverrideToggleButton";
import SliceControls from "./SliceControls";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface ExperimentPanelProps extends Omit<DefaultExperimentPanelProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultExperimentPanelProps altogether and have
// total control over the props for your component.
export interface ExperimentPanelProps extends DefaultExperimentPanelProps {
  split: Split;
  idx: number;
  values: any[];
  changeValues: (_: any[]) => void;
}

const getExperimentPanelSplitType = (split: Split) => {
  // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
  switch (split.splitType) {
    case SplitType.Experiment:
      return undefined;
    case SplitType.Schedule:
      return "schedule";
    case SplitType.Segment:
      return "segment";
  }
  return undefined;
};

const EditableVariantName = observer(function EditableVariantName(props: {
  variant?: Variant;
}) {
  const { variant } = props;
  const [editing, setEditing] = React.useState(false);
  const studioCtx = useStudioCtx();
  return (
    <EditableLabel
      value={variant?.name ?? "variation"}
      editing={editing}
      onAbort={() => setEditing?.(false)}
      disabled={!variant}
      onEdit={(newName: string) => {
        if (variant) {
          if (newName && newName !== variant?.name) {
            spawn(
              studioCtx.change(({ success }) => {
                variant.name = newName;
                return success();
              })
            );
          }
        }
        setEditing(false);
      }}
    >
      {variant?.name}
    </EditableLabel>
  );
});

function ExperimentPanel_(
  props: ExperimentPanelProps,
  ref: HTMLElementRefOf<"div">
) {
  const { split, idx, values, changeValues } = props;

  const studioCtx = useStudioCtx();
  const vcontroller = makeVariantsController(studioCtx);

  const content = split.slices[1].contents[0];
  const testVariant = isKnownGlobalVariantSplitContent(content)
    ? content.variant
    : undefined;
  const [isTargeting, setIsTargeting] = React.useState(
    testVariant && vcontroller?.isTargeted(testVariant)
  );
  const slice = split.slices[idx];
  const isBase = idx === 0;

  const promote = (variant: Variant) => {
    spawn(
      studioCtx.change(({ success }) => {
        const tplMgr = studioCtx.tplMgr();
        /* Copy styles of variant in all components */
        studioCtx.site.components.forEach((component) => {
          const base = tplMgr.ensureBaseVariant(component);
          tplMgr.copyToVariant(component, variant, base);
        });
        split.status = SplitStatus.Stopped;
        return success();
      })
    );
  };

  if (split.splitType !== SplitType.Experiment) {
    return <EditOverrideToggleButton slice={slice} />;
  }

  return (
    <PlasmicExperimentPanel
      root={{ ref }}
      versionName={
        split.splitType === SplitType.Experiment && idx === 1
          ? "Version B"
          : undefined
      }
      variantName={{
        value: testVariant?.name ?? "variation",
        onChange: (e) => {
          e.persist();
          spawn(
            studioCtx.change(({ success }) => {
              if (testVariant) {
                testVariant.name = e.target.value;
              }
              return success();
            })
          );
        },
      }}
      isBase={isBase}
      type={getExperimentPanelSplitType(split)}
      percentage={{
        render: () => (
          <div
            style={{
              width: 40,
            }}
          >
            <DimTokenSpinner
              value={`${values[idx]}%`}
              onChange={(val) => {
                if (val) {
                  const num = +val.substring(0, val.length - 1);
                  const newVals = [...values];
                  newVals[idx] = num;
                  newVals[1 - idx] = 100 - num;
                  changeValues(newVals);
                }
              }}
              noClear={true}
              allowedUnits={["%"]}
            />
          </div>
        ),
      }}
      isEditing={!isBase && isTargeting}
      actionBtn={{
        onClick: () => {
          if (!isBase) {
            spawn(
              studioCtx.change(({ success }) => {
                const _content = slice.contents[0];
                if (isKnownGlobalVariantSplitContent(_content)) {
                  const variant = _content.variant;
                  if (isTargeting) {
                    vcontroller?.onClearVariants();
                  } else {
                    vcontroller?.onClickVariant(variant);
                  }
                }
                return success();
              })
            );
            setIsTargeting(!isTargeting);
          }
        },
      }}
      controlContainer={
        <SliceControls
          split={split}
          idx={idx}
          values={values}
          onChange={(vals) => changeValues(vals)}
        />
      }
      promoteBtn={{
        onClick: () => {
          if (testVariant) {
            promote(testVariant);
          }
        },
      }}
    />
  );
}

const ExperimentPanel = observer(React.forwardRef(ExperimentPanel_));
export default ExperimentPanel;
