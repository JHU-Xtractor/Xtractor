/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function ProcessNewFileButton(props) {
  const { overrides, ...rest } = props;

  const handleButtonPress = () => {
    console.log("ProcessNewFileButton button pressed");
  };
  
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
      {...getOverrideProps(overrides, "ProcessNewFileButton")}
      {...rest}
    >
      <Button
        width="580px"
        height="48px"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Process A New File"
        {...getOverrideProps(overrides, "Process New File Button")}
        onClick={handleButtonPress}
      ></Button>
    </Flex>
  );
}
