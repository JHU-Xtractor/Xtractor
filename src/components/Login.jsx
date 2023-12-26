/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function Login(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0px"
      direction="column"
      width="528px"
      height="250px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="8px"
      padding="11px 32px 8px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Login")}
      {...rest}
    >
      <Text
        // fontFamily="Inter"
        style={{ margin: 0, padding: 0 }} // Added this line
        fontSize="15px"
        fontWeight="600"
        color="rgba(66,106,220)"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="528px"
        height="28px"
        gap="unset"
        alignItems="unset"
        position="relative"
        
        children="Username"
        {...getOverrideProps(overrides, "Login")}
      ></Text>
      <TextField
        width="unset"
        height="unset"
        // labelPlacement="left"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField29766939")}
      ></TextField>
      <Text
        // fontFamily="Inter"
        style={{ margin: 0, padding: 0 }} // Added this line
        fontSize="15px"
        fontWeight="600"
        color="rgba(66,106,220)"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="528px"
        height="28px"
        gap="unset"
        alignItems="unset"
        position="relative"
        padding="0px 0px 0px 0px"
        children="Password"
        {...getOverrideProps(overrides, "Password")}
      ></Text>
      <TextField
        width="unset"
        height="unset"
        type = "password"
        // label="Password"
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
        style = {{marginTop: "20px"}}
        width="unset"
        height="35px"
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
        <Button
        style={{ backgroundColor: 'white', fontSize: '15px', color: 'grey', alignContent: "left"}}
        width="unset"
        height="32px"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Sign Up"
        {...getOverrideProps(overrides, "Sign Up")}
      ></Button>
        <Button
        style={{ backgroundColor: 'white', fontSize: '15px', color: 'grey', alignContent: "right", paddingTop: "10px"}}
        width="unset"
        height="32px"
        
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Forgot Password"
        {...getOverrideProps(overrides, "Forgot Password")}
      ></Button>
     
      </View>
    </Flex>
  );
}
