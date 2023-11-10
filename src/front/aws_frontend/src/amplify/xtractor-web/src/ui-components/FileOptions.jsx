/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function FileOptions(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="155px"
      height="75px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FileOptions")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="108px"
        height="35px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="23px"
        left="13px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Options"
        {...getOverrideProps(overrides, "Options")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="23px"
        height="13.2px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="32px"
        left="91px"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <Icon
          width="16.55px"
          height="3.08px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.456787109375,
            height: 13.19140625,
          }}
          paths={[
            {
              d: "M-0.183021 0.983109L16.3667 4.0641L16.7327 2.09788L0.183021 -0.983109L-0.183021 0.983109Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="2.61px"
          transformOrigin="top left"
          transform="rotate(44.3deg)"
          {...getOverrideProps(overrides, "Line 2")}
        ></Icon>
        <Icon
          width="16px"
          height="3.1px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 13.646728515625,
            height: 13.2041015625,
          }}
          paths={[
            {
              d: "M0.190422 4.08516L16.19 0.981702L15.8092 -0.981702L-0.190422 2.12176L0.190422 4.08516Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="11.66px"
          left="9.35px"
          transformOrigin="top left"
          transform="rotate(-46.8deg)"
          {...getOverrideProps(overrides, "Line 3")}
        ></Icon>
      </View>
    </View>
  );
}
