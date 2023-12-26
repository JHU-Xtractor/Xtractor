/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Alert, Flex } from "@aws-amplify/ui-react";
export default function UploadInProgress(props) {
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
      {...getOverrideProps(overrides, "UploadInProgress")}
      {...rest}
    >
      <Alert
        width="264px"
        height="59px"
        backgroundColor="rgba(184,206,249,1)"
        shrink="0"
        variation="default"
        isDismissible={false}
        hasIcon={false}
        children="File Upload In Progress"
        {...getOverrideProps(overrides, "File Uploaded")}
      ></Alert>
    </Flex>
  );
}