// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import {
  DefaultSharePageModalProps,
  PlasmicSharePageModal,
} from "@/wab/client/plasmic/plasmic_kit_analytics/PlasmicSharePageModal";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import * as React from "react";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface SharePageModalProps extends Omit<DefaultSharePageModalProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultSharePageModalProps altogether and have
// total control over the props for your component.
export interface SharePageModalProps extends DefaultSharePageModalProps {}

const COPIED_TIME = 3300;

function SharePageModal_(
  props: SharePageModalProps,
  ref: HTMLElementRefOf<"div">
) {
  const curUrl = window.location.href;

  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(curUrl);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, COPIED_TIME);
  };

  return (
    <PlasmicSharePageModal
      root={{ ref }}
      urlBox={{ value: curUrl }}
      copied={isCopied}
      copyBtn={{
        disabled: isCopied,
        onClick: () => handleCopy(),
      }}
      {...props}
    />
  );
}

const SharePageModal = React.forwardRef(SharePageModal_);
export default SharePageModal;
