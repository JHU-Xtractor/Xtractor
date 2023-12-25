/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function CloseImage(props) {
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
      {...getOverrideProps(overrides, "CloseImage")}
      {...rest}
    >
      <Button
        width="unset"
        height="unset"
        border="1px SOLID rgba(0,34,102,1)"
        shrink="0"
        backgroundColor="rgba(56,85,178,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Close Image"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
