// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { useContextMenu } from "@/wab/client/components/ContextMenu";
import {
  MenuBuilder,
  MenuItemContent,
} from "@/wab/client/components/menu-builder";
import {
  VariantSettingPopoverContent,
  VariantSettingPopoverTitle,
} from "@/wab/client/components/style-controls/DefinedIndicator";
import Chip from "@/wab/client/components/widgets/Chip";
import { PlasmicVariantComboRow } from "@/wab/client/plasmic/plasmic_kit_variants/PlasmicVariantComboRow";
import { ViewCtx } from "@/wab/client/studio-ctx/view-ctx";
import { maybe } from "@/wab/common";
import { getEffectiveVariantSetting } from "@/wab/shared/effective-variant-setting";
import {
  isVariantSettingEmpty,
  makeVariantName,
  tryGetVariantSetting,
  VariantCombo,
} from "@/wab/shared/Variants";
import { isTplVariantable, summarizeTpl } from "@/wab/tpls";
import { Menu } from "antd";
import { observer } from "mobx-react-lite";
import * as React from "react";

interface VariantComboRowProps {
  viewCtx: ViewCtx;
  combo: VariantCombo;
  onClick?: () => void;
  onActivate?: () => void;
}

const VariantComboRow = observer(function VariantComboRow(
  props: VariantComboRowProps
) {
  const { viewCtx, combo, onClick, onActivate } = props;
  const tpl = viewCtx.focusedTpl() ?? undefined;
  const indicatedVs =
    tpl &&
    isTplVariantable(tpl) &&
    maybe(tryGetVariantSetting(tpl, combo), (vs) =>
      isVariantSettingEmpty(vs) ? undefined : vs
    );

  const contextMenuProps = useContextMenu({
    menu: () => {
      const builder = new MenuBuilder();
      builder.genSection(undefined, (push) => {
        push(
          <Menu.Item
            onClick={async () => {
              if (onActivate) {
                onActivate();
                const frame = viewCtx.studioCtx.focusedFrame();
                if (frame) {
                  return viewCtx.change(() =>
                    viewCtx.getViewOps().clearFrameComboSettings(frame)
                  );
                }
              }
            }}
            key={`clear-combo-settings`}
          >
            <MenuItemContent>Clear settings for this combo</MenuItemContent>
          </Menu.Item>
        );
      });
      return builder.build({
        menuName: "variant-combo-item-menu",
      });
    },
  });

  return (
    <PlasmicVariantComboRow
      labelContainer={combo.map((v) => (
        <Chip key={v.uuid}>{makeVariantName({ variant: v })}</Chip>
      ))}
      root={{ onClick, ...contextMenuProps }}
      visibleButton={
        onActivate
          ? {
              onClick: (e) => {
                e.stopPropagation();
                onActivate();
              },
            }
          : { render: () => null }
      }
      isIndicated={!!indicatedVs}
      indicator={
        indicatedVs && tpl
          ? {
              popover: () => (
                <VariantSettingPopoverContent
                  site={viewCtx.site}
                  tpl={tpl}
                  vs={indicatedVs}
                  viewCtx={viewCtx}
                />
              ),

              popoverTitle: () => (
                <VariantSettingPopoverTitle vs={indicatedVs} viewCtx={viewCtx}>
                  {`Settings for element ${summarizeTpl(
                    tpl,
                    isTplVariantable(tpl)
                      ? getEffectiveVariantSetting(
                          tpl,
                          indicatedVs?.variants
                        ).rsh()
                      : undefined
                  )}`}
                </VariantSettingPopoverTitle>
              ),

              placement: "left",
            }
          : undefined
      }
    />
  );
});

export default VariantComboRow;
