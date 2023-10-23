/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  CheckboxField,
  Flex,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Login(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="19px"
      direction="column"
      width="539px"
      height="318px"
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
      <CheckboxField
        width="unset"
        height="unset"
        label="Stayed Signed In"
        shrink="0"
        size="default"
        defaultChecked={false}
        isDisabled={false}
        labelPosition="end"
        {...getOverrideProps(overrides, "CheckboxField")}
      ></CheckboxField>
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
        width="479px"
        height="31px"
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
          fontSize="16px"
          fontWeight="700"
          color="rgba(56,85,178,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="172px"
          height="29px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="-2px"
          left="272px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign Up"
          {...getOverrideProps(overrides, "label3854575")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="172px"
          height="29px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="-2px"
          left="100px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Not A Register User?"
          {...getOverrideProps(overrides, "label38591747")}
        ></Text>
      </View>
    </Flex>
  );
}
