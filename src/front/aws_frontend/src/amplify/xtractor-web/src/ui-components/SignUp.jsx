/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function SignUp(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SignUp")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="60px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="   Sign Up"
        {...getOverrideProps(overrides, "Sign Up")}
      ></Text>
      <Flex
        gap="24px"
        direction="column"
        width="538px"
        height="607px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        borderRadius="8px"
        padding="11px 32px 8px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Login ")}
      >
        <TextField
          width="unset"
          height="unset"
          label="Email - Please Use Your Academic Email "
          shrink="0"
          alignSelf="stretch"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38623774")}
        ></TextField>
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
          {...getOverrideProps(overrides, "TextField38623782")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Password - Must be at least 8 characters with numbers, letters, and one special character"
          shrink="0"
          alignSelf="stretch"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38623783")}
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
          {...getOverrideProps(overrides, "TextField38623825")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Confirm Password"
          shrink="0"
          alignSelf="stretch"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38623836")}
        ></TextField>
        <Button
          width="476px"
          height="unset"
          border="1px SOLID rgba(56,85,178,1)"
          shrink="0"
          backgroundColor="rgba(56,85,178,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Sign Up"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
