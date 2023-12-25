/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Image } from "@aws-amplify/ui-react";
export default function LogoLarge(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { "xtractor 1": {}, LogoLarge: {} }, variantValues: {} },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="344px"
      height="283px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "LogoLarge")}
      {...rest}
    >
      <Image
        width="344px"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://xtractor-web.s3.amazonaws.com/xtractor_w_trans.png"
        {...getOverrideProps(overrides, "xtractor 1")}
      ></Image>
    </Flex>
  );
}
