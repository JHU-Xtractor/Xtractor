/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function Expand(props) {
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
          d: "M39.7678 1.76777C40.7441 0.791456 40.7441 -0.791456 39.7678 -1.76777L23.8579 -17.6777C22.8816 -18.654 21.2986 -18.654 20.3223 -17.6777C19.346 -16.7014 19.346 -15.1184 20.3223 -14.1421L34.4645 0L20.3223 14.1421C19.346 15.1184 19.346 16.7014 20.3223 17.6777C21.2986 18.654 22.8816 18.654 23.8579 17.6777L39.7678 1.76777ZM0 2.5L38 2.5L38 -2.5L0 -2.5L0 2.5Z",
          stroke: "rgba(56,85,178,1)",
          fillRule: "nonzero",
          strokeWidth: 5,
          style: { transform: "translate(26px, 38px)" },
        },
      ]}
      {...getOverrideProps(overrides, "Expand")}
      {...rest}
    ></Icon>
  );
}
