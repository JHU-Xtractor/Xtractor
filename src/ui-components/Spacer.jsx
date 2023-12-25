/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Divider, View } from "@aws-amplify/ui-react";
export default function Spacer(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="300px"
      height="21px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Spacer")}
      {...rest}
    >
      <Divider
        width="300px"
        height="21px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </View>
  );
}
