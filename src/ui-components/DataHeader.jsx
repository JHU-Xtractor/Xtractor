/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import DataRow from "./DataRow";
import { Flex } from "@aws-amplify/ui-react";
export default function DataHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "DataHeader")}
      {...rest}
    >
      <DataRow
        display="flex"
        gap="16px"
        direction="row"
        width="991px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="16px 0px 16px 0px"
        {...getOverrideProps(overrides, "Data Header")}
      ></DataRow>
    </Flex>
  );
}
