/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function ValidPdf(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="270px"
      height="53px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ValidPdf")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(82,82,82,1)"
        lineHeight="21px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="204px"
        height="18px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="9px"
        left="39px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Valid Types .jpeg"
        {...getOverrideProps(overrides, "Valid Types .jpeg")}
      ></Text>
    </View>
  );
}
