import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";
import {
  CmsDataProvider,
  cmsDataProviderMeta,
  CmsQueryLoader,
  cmsQueryLoaderMeta,
  CmsRowField,
  cmsRowFieldMeta,
  CmsRowLink,
  cmsRowLinkMeta,
  CmsRowLoader,
  cmsRowLoaderMeta,
  CmsRowRepeater,
  cmsRowRepeaterMeta,
} from "./components";

export function registerAll(loader?: {
  registerComponent: typeof registerComponent;
}) {
  //const registerContext = loader?.registerContext ?? hostRegisterContext;
  //registerContext(CmsDataProvider, cmsDataProviderMeta);

  const _registerComponent = <T extends React.ComponentType<any>>(
    Component: T,
    defaultMeta: ComponentMeta<React.ComponentProps<T>>
  ) => {
    if (loader) {
      loader.registerComponent(Component, defaultMeta);
    } else {
      registerComponent(Component, defaultMeta);
    }
  };

  _registerComponent(CmsDataProvider, cmsDataProviderMeta);
  _registerComponent(CmsQueryLoader, cmsQueryLoaderMeta);
  _registerComponent(CmsRowRepeater, cmsRowRepeaterMeta);
  _registerComponent(CmsRowField, cmsRowFieldMeta);
  _registerComponent(CmsRowLink, cmsRowLinkMeta);
  _registerComponent(CmsRowLoader, cmsRowLoaderMeta);
}
