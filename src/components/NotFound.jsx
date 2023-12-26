/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
export default function Terms(props) {
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
      {...getOverrideProps(overrides, "Terms")}
      {...rest}
    >
      <Flex

        gap="0px"
        direction="column"
        width="538px"
        height="200px"
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
          marginTop={"0vh"}
          fontSize="30px"
          fontWeight="500"
          color="rgba(66,106,220)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="490px"
          height="300px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
            children = "404 Not Found"
          {...getOverrideProps(
            overrides,
            "Not_found")}
        ></Text>
        
        <Text
          // fontFamily="Inter"
          marginTop={"-45vh"}
          fontSize="20px"
          fontWeight="500"
          color="rgba(66,106,220)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="490px"
          height="300px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
            children = "Either the page you are looking for does not exist or you do not have access to it."
          {...getOverrideProps(
            overrides,
            "Not_found2")}
        ></Text>

        <Link to="/">
        <Text
          // fontFamily="Inter"
          marginTop={"-40vh"}
          fontSize="15px"
          fontWeight="500"
          color="rgba(66,106,220)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="490px"
          height="300px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
            children = "Click here to go back to the main page."
          {...getOverrideProps(
            overrides,
            "main_page")}
        ></Text>
        </Link>

      </Flex>
    </Flex>
  );
}
