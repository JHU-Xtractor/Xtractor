/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function UploadFiles(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UploadFiles")}
      {...rest}
    >
      <View
        width="211px"
        height="263px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 440")}
      >
        <Icon
          width="195px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 1, height: 195 }}
          paths={[
            {
              d: "M196.768 1.76777C197.744 0.791456 197.744 -0.791456 196.768 -1.76777L180.858 -17.6777C179.882 -18.654 178.299 -18.654 177.322 -17.6777C176.346 -16.7014 176.346 -15.1184 177.322 -14.1421L191.464 0L177.322 14.1421C176.346 15.1184 176.346 16.7014 177.322 17.6777C178.299 18.654 179.882 18.654 180.858 17.6777L196.768 1.76777ZM0 2.5L195 2.5L195 -2.5L0 -2.5L0 2.5Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 5,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="240px"
          left="105.5px"
          transformOrigin="top left"
          transform="rotate(-90deg)"
          {...getOverrideProps(overrides, "Arrow 1")}
        ></Icon>
      </View>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Upload Files"
          {...getOverrideProps(overrides, "Upload Files")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="PDFs Only"
          {...getOverrideProps(overrides, "PDFs Only")}
        ></Text>
      </Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Upload "
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
