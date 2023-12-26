/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Image, View } from "@aws-amplify/ui-react";
export default function UploadFileImage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="199px"
      height="260px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "UploadFileImage")}
      {...rest}
    >
      <Image
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="-6.03%"
        right="6.03%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://xtractor-web.s3.amazonaws.com/Upload.JPG"
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
    </View>
  );
}