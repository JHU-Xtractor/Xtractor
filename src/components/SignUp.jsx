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
      gap="0px"
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

      <Flex
        gap="2px"
        direction="column"
        width="538px"
        height="560px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        borderRadius="8px"
        padding="11px 32px 8px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Login ")}
      >
          <Text
        // fontFamily="Inter"
        fontSize="30px"
        fontWeight="700"
        color="rgba(66,106,220,1)"
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
        // padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sign Up"
        {...getOverrideProps(overrides, "Sign Up")}
      ></Text>

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ width: '45%' }}>
    <Text
          color="rgba(66,106,220)"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="245px"
          height="28px"
          gap="unset"
          alignItems="unset"
          position="relative"
          // padding="0px 0px 0px 0px"
          children="First Name"
          fontSize="18px"
          fontWeight="600"
        ></Text>
  
        <TextField
          // title = "Enter in an academic email"
          height="unset"
          fontSize="15px"
          fontWeight="300"
          shrink="0"
          alignSelf="stretch"
          textAlign="left"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "First_name")}
        ></TextField>
  </div>
  <div style={{ width: '50%' }}>

  <Text
          color="rgba(66,106,220)"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="230px"
          height="28px"
          gap="unset"
          alignItems="unset"
          position="relative"
          // padding="0px 0px 0px 0px"
          children="Last Name"
          fontSize="18px"
          fontWeight="600"
        ></Text>
  
        <TextField
          // title = "Enter in an academic email"
          height="unset"
          fontSize="15px"
          fontWeight="300"
          shrink="0"
          alignSelf="stretch"
          textAlign="left"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "Last_name")}
        ></TextField>
  </div>
</div>
        <Text
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
          // padding="0px 0px 0px 0px"
          children="Username"
          fontSize="18px"
          fontWeight="600"
        ></Text>
        <Text
          color="rgba(0,0,0,1)"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="528px"
          height="20px"
          gap="unset"
          alignItems="unset"
          position="relative"
          // padding="0px 0px 0px 0px"
          children="Your unique identifier. Do not use spaces or special characters: ' , / \ | ( ) * ? < >"
          fontSize="14px"
          fontWeight="200"
        ></Text>
        <TextField
          // title = "Enter in an academic email"
          height="unset"
          fontSize="15px"
          fontWeight="300"
          shrink="0"
          alignSelf="stretch"
          textAlign="left"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38623774")}
        ></TextField>
          <Text
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
          // padding="0px 0px 0px 0px"
          children="Email"
          fontSize="18px"
          fontWeight="600"
        ></Text>
        <Text
          color="rgba(0,0,0,1)"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="528px"
          height="20px"
          gap="unset"
          alignItems="unset"
          position="relative"
          // padding="0px 0px 0px 0px"
          children="Your academic email (@edu). This will be used to verify your account."
          fontSize="14px"
          fontWeight="200"
        ></Text>
        <TextField
          width="unset"
          height="unset"
          color="rgba(66,106,220)"
          fontSize="15px"
          fontWeight="300"
          textAlign="left"
          shrink="0"
          alignSelf="stretch"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38623782")}
        ></TextField>
        <Text
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
          // padding="0px 0px 0px 0px"
          children="Password"
          fontSize="18px"
          fontWeight="600"
        ></Text>
        <Text
          style = {{paddingBottom: "40px"}}
          color="rgba(0,0,0,1)"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="450px"
          height="28px"
          gap="unset"
          alignItems="unset"
          position="relative"
          // padding="0px 0px 0px 0px"
          children="Must be at least 8 characters long, contain at least one number, one special character, contains lower and upper case letters"
          fontSize="14px"
          fontWeight="200"
        ></Text>
        <TextField
          width="unset"
          height="unset"
          // label="Password"
          color="rgba(66,106,220)"
          fontSize="15px"
          fontWeight="300"
          textAlign="left"
          shrink="0"
          alignSelf="stretch"
          placeholder=""
          type = "Password"

          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38623783")}
        ></TextField>
         <Text
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
          // padding="0px 0px 0px 0px"
          children="Confirm Password"
          fontSize="18px"
          fontWeight="600"
        ></Text>

        <TextField
          width="unset"
          height="unset"
          // label="Confirm Password"
          color="rgba(66,106,220)"
          fontSize="15px"
          fontWeight="300"
          textAlign="left"
          type = "password"
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
          style = {{marginTop: "20px"}}
          width="unset"
          height="40px"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Sign Up"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
