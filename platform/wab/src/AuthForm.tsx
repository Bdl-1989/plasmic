// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { RestFormData } from "./RestBuilder";
import Select2 from "./wab/client/components/widgets/Select";
import { Textbox } from "./wab/client/components/widgets/Textbox";
import {
  DefaultAuthFormProps,
  PlasmicAuthForm,
  PlasmicAuthForm__OverridesType,
} from "./wab/client/plasmic/plasmic_kit_data_queries/PlasmicAuthForm";
import { ensureType } from "./wab/common";

/** Keys to labels */
export const authTypeToLabel = {
  none: "None",
  basic: "Basic auth",
  bearer: "Bearer token",
  key: "Custom header",
} as const;

const authTypeToVariant = {
  none: undefined,
  basic: "basicAuth",
  bearer: "bearerToken",
  key: "apiKey",
} as const;

const authTypeToDefaultValue = {
  none: undefined,
  basic: ensureType<BasicAuthData>({
    type: "basic",
    username: "",
    password: "",
  }),
  bearer: ensureType<BearerAuthData>({
    type: "bearer",
    token: "",
  }),
  key: ensureType<ApiKeyAuthData>({
    type: "key",
    key: "",
    value: "",
  }),
} as const;

export interface BasicAuthData {
  type: "basic";
  username: string;
  password: string;
}

export interface BearerAuthData {
  type: "bearer";
  token: string;
}

export interface ApiKeyAuthData {
  type: "key";
  key: string;
  value: string;
}

export type AuthData = BasicAuthData | BearerAuthData | ApiKeyAuthData;

interface AuthFormProps extends DefaultAuthFormProps {}

function AuthForm(authProps: AuthFormProps) {
  const { control, watch, setValue } = useFormContext<RestFormData>();
  const authData: AuthData = watch("authData");

  const getOverrides = (): PlasmicAuthForm__OverridesType => {
    if (!authData) {
      return {};
    }
    switch (authData.type) {
      case "bearer":
        return {
          tokenRow: {
            render: (props, KeyValueRow) => (
              <KeyValueRow
                {...props}
                readOnlyValue
                value={
                  <Textbox
                    placeholder={"Token"}
                    value={authData.token}
                    onChange={(e) => {
                      console.log("!!", e.target.value, authData);

                      setValue("authData", {
                        ...authData,
                        token: e.target.value,
                      });
                    }}
                  />
                }
              />
            ),
          },
        };
      case "basic":
        return {
          usernameRow: {
            render: (props, KeyValueRow) => (
              <KeyValueRow
                {...props}
                readOnlyValue
                value={
                  <Textbox
                    placeholder={"Username"}
                    value={authData.username}
                    onChange={(e) =>
                      setValue("authData", {
                        ...authData,
                        username: e.target.value,
                      })
                    }
                  />
                }
              />
            ),
          },
          passwordRow: {
            render: (props, KeyValueRow) => (
              <KeyValueRow
                {...props}
                readOnlyValue
                value={
                  <Textbox
                    placeholder={"Password"}
                    value={authData.password}
                    onChange={(e) =>
                      setValue("authData", {
                        ...authData,
                        password: e.target.value,
                      })
                    }
                  />
                }
              />
            ),
          },
        };
      case "key":
        return {
          keyRow: {
            render: (props, KeyValueRow) => (
              <KeyValueRow
                {...props}
                readOnlyValue
                value={
                  <Textbox
                    placeholder={"Key"}
                    value={authData.key}
                    onChange={(e) =>
                      setValue("authData", {
                        ...authData,
                        key: e.target.value,
                      })
                    }
                  />
                }
              />
            ),
          },
          valueRow: {
            render: (props, KeyValueRow) => (
              <KeyValueRow
                {...props}
                readOnlyValue
                value={
                  <Textbox
                    placeholder={"Value"}
                    value={authData.value}
                    onChange={(e) =>
                      setValue("authData", {
                        ...authData,
                        value: e.target.value,
                      })
                    }
                  />
                }
              />
            ),
          },
        };
    }
  };
  return (
    <PlasmicAuthForm
      {...authProps}
      type={authData ? authTypeToVariant[authData.type] : undefined}
      typeSelect={{
        render: (props, Comp) => (
          <Controller
            name={`authData` as const}
            control={control}
            render={({ field }) => (
              <Comp
                {...props}
                aria-label={"Type"}
                value={field.value?.type ?? "none"}
                onChange={(value) =>
                  field.onChange(
                    value ? authTypeToDefaultValue[value] ?? null : null
                  )
                }
              >
                {Object.entries(authTypeToLabel).map(([key, label]) => (
                  <Select2.Option value={key} key={key}>
                    {label}
                  </Select2.Option>
                ))}
              </Comp>
            )}
          />
        ),
      }}
      {...getOverrides()}
    />
  );
}

export default AuthForm;