/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Alert, Flex } from "@aws-amplify/ui-react";
export default function ErrorMsgSignUp(props) {
  const { overrides, errormessage,...rest } = props;
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
      {...getOverrideProps(overrides, "LoginFailed")}
      {...rest}
    >
      <Alert
        style = {{ color: 'rgb(255, 255, 255)', margin: 0, padding: 0, fontSize: '15px'}}
        width="475px"
        height="50px"
        backgroundColor="rgba(255,0,0,1)"
        shrink="0"
        borderRadius="3px"
        variation="default"
        isDismissible={false}
        hasIcon={false}
        children={errormessage}
        {...getOverrideProps(overrides, "Login Failed")}
      ></Alert>
    </Flex>
  );
}
