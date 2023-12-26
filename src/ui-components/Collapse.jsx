/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function Collapse(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="79px"
      height="76px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 79, height: 76 }}
      paths={[
        {
          d: "M41.8177 1.76777C42.794 0.791456 42.794 -0.791456 41.8177 -1.76777L25.9078 -17.6777C24.9315 -18.654 23.3486 -18.654 22.3723 -17.6777C21.396 -16.7014 21.396 -15.1184 22.3723 -14.1421L36.5144 0L22.3723 14.1421C21.396 15.1184 21.396 16.7014 22.3723 17.6777C23.3486 18.654 24.9315 18.654 25.9078 17.6777L41.8177 1.76777ZM0 2.5L40.05 2.5L40.05 -2.5L0 -2.5L0 2.5Z",
          stroke: "rgba(56,85,178,1)",
          fillRule: "nonzero",
          strokeWidth: 5,
          style: { transform: "translate(60.05px, 38px)" },
        },
      ]}
      {...getOverrideProps(overrides, "Collapse")}
      {...rest}
    ></Icon>
  );
}
