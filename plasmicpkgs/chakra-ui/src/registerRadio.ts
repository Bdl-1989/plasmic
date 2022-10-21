import {
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
} from "@chakra-ui/react";
import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const radioGroupMeta: ComponentMeta<RadioGroupProps> = {
  ...getComponentNameAndImportMeta("RadioGroup"),
  props: {
    value: {
      type: "string",
    },
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    isDisabled: {
      type: "boolean",
    },
    isInvalid: {
      type: "boolean",
    },
    isReadOnly: {
      type: "boolean",
    },
    isRequired: {
      type: "boolean",
    },
    children: {
      type: "slot",
      defaultValue: {
        type: "hbox",

        styles: {
          gap: "12px",
        },
        children: [
          {
            type: "component",
            name: getPlasmicComponentName("Radio"),
            props: { value: "1", children: { type: "text", value: "Radio 1" } },
          },
          {
            type: "component",
            name: getPlasmicComponentName("Radio"),
            props: { value: "2", children: { type: "text", value: "Radio 2" } },
          },
          {
            type: "component",
            name: getPlasmicComponentName("Radio"),
            props: { value: "3", children: { type: "text", value: "Radio 3" } },
          },
        ],
      },
    },
  },
};

export function registerRadioGroup(
  loader?: Registerable,
  customRadioGroupMeta?: ComponentMeta<RadioGroupProps>
) {
  const doRegisterComponent: typeof registerComponent = (...args) =>
    loader ? loader.registerComponent(...args) : registerComponent(...args);
  doRegisterComponent(RadioGroup, customRadioGroupMeta ?? radioGroupMeta);
}

export const radioMeta: ComponentMeta<RadioProps> = {
  ...getComponentNameAndImportMeta("Radio", "RadioGroup"),
  props: {
    value: {
      type: "string",
    },
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    spacing: {
      type: "string",
      defaultValue: "0.5rem",
    },
    isChecked: {
      type: "boolean",
    },
    isDisabled: {
      type: "boolean",
    },
    isInvalid: {
      type: "boolean",
    },
    isReadOnly: {
      type: "boolean",
    },
    isRequired: {
      type: "boolean",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Radio",
        },
      ],
    },
  },
};

export function registerRadio(
  loader?: Registerable,
  customRadioMeta?: ComponentMeta<RadioProps>
) {
  const doRegisterComponent: typeof registerComponent = (...args) =>
    loader ? loader.registerComponent(...args) : registerComponent(...args);
  doRegisterComponent(Radio, customRadioMeta ?? radioMeta);
}
