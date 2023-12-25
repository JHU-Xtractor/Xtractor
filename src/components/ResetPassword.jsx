/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function ResetPassword(props) {
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
      {...getOverrideProps(overrides, "ResetPassword")}
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
        children="   Password Reset"
        {...getOverrideProps(overrides, "Password Reset")}
      ></Text>
      <Flex
        gap="-364px"
        direction="column"
        width="522px"
        height="108px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        borderRadius="8px"
        padding="11px 32px 8px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Reset")}
      >
        <TextField
          width="473px"
          height="unset"
          label="Please Enter In Your Account Email to Reset Your Password"
          placeholder="Email"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField")}
        ></TextField>
        <View
          width="508px"
          height="156px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 438")}
        >
          <Button
            width="476px"
            height="unset"
            position="absolute"
            top="0px"
            left="-1px"
            backgroundColor="rgba(56,85,178,1)"
            size="default"
            isDisabled={false}
            variation="default"
            children="Submit"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </View>
      </Flex>
    </Flex>
  );
}
