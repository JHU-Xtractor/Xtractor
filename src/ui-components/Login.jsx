/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function Login(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="19px"
      direction="column"
      width="528px"
      height="330px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="8px"
      padding="11px 32px 8px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Login")}
      {...rest}
    >
      <TextField
        width="unset"
        height="unset"
        label="Username"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField29766939")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="Password"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField38474616")}
      ></TextField>
      <Button
        width="unset"
        height="32px"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Login"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <View
        width="472px"
        height="43px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 437")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="14px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="169px"
          height="28px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="3px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Not An Existing user?"
          {...getOverrideProps(overrides, "Not An Existing user?")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="600"
          color="rgba(56,85,178,1)"
          lineHeight="14px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="137px"
          height="23px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="3px"
          left="157px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign Up"
          {...getOverrideProps(overrides, "Sign Up")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="600"
          color="rgba(137,148,159,1)"
          lineHeight="14px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="138px"
          height="18px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="5px"
          left="358px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Forgot Password"
          {...getOverrideProps(overrides, "Forgot Password")}
        ></Text>
      </View>
    </Flex>
  );
}
