/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function ExpandButton(props) {
  const { expand, overrides, ...rest } = props;
  return (
    <View
      width="33px"
      height="32px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ExpandButton")}
      {...rest}
    >
      <View
        width="26px"
        height="25px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="21.88%"
        left="0%"
        right="21.21%"
        border="1px SOLID rgba(47,73,155,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(64,170,191,0.5)"
        {...getOverrideProps(overrides, "Rectangle 1168")}
      ></View>
      <Icon
        width="16.75px"
        height="15.31px"
        viewBox={{ minX: 0, minY: 0, width: 16.75, height: 15.314285278320312 }}
        paths={[
          {
            d: "M7 0L7 15.3143L9 15.3143L9 0L7 0ZM0 8.31429L16.75 8.31429L16.75 6.31429L0 6.31429L0 8.31429Z",
            stroke: "rgba(47,73,155,1)",
            fillRule: "nonzero",
            strokeWidth: 2,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="17.05%"
        bottom="35.09%"
        left="12.88%"
        right="36.36%"
        onClick={expand}
        {...getOverrideProps(overrides, "Vector 3")}
      ></Icon>
    </View>
  );
}
