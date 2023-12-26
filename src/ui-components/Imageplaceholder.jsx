/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Image, View } from "@aws-amplify/ui-react";
export default function Imageplaceholder(props) {
  const { expand, select, overrides, ...rest } = props;
  return (
    <View
      width="221px"
      height="307px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Imageplaceholder")}
      {...rest}
    >
      <Icon
        width="221px"
        height="307px"
        viewBox={{ minX: 0, minY: 0, width: 221, height: 307 }}
        paths={[
          {
            d: "M0 0L221 0L221 307L0 307L0 0Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        onClick={select}
        {...getOverrideProps(overrides, "Rectangle 1167")}
      ></Icon>
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
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        onClick={select}
        {...getOverrideProps(overrides, "profilePicture 1")}
      ></Image>
    </View>
  );
}
