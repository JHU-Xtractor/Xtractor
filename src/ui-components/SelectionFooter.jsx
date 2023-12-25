/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Icon, View } from "@aws-amplify/ui-react";
export default function SelectionFooter(props) {
  const { selectAll, submit, overrides, ...rest } = props;
  return (
    <View
      width="879px"
      height="44px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SelectionFooter")}
      {...rest}
    >
      <Icon
        width="880px"
        height="41px"
        viewBox={{ minX: 0, minY: 0, width: 880, height: 41 }}
        paths={[
          {
            d: "M0 0L880 0L880 41L0 41L0 0Z",
            fill: "rgba(64,170,191,0.5)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="3px"
        left="-1px"
        {...getOverrideProps(overrides, "Rectangle 1169")}
      ></Icon>
      <Button
        width="unset"
        height="27px"
        position="absolute"
        borderRadius="4px"
        top="10px"
        left="547px"
        backgroundColor="rgba(56,85,178,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Select All"
        onClick={selectAll}
        {...getOverrideProps(overrides, "Button4087620")}
      ></Button>
      <Button
        width="unset"
        height="27px"
        position="absolute"
        borderRadius="4px"
        top="9px"
        left="714px"
        backgroundColor="rgba(56,85,178,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Submit"
        onClick={submit}
        {...getOverrideProps(overrides, "Button4087626")}
      ></Button>
    </View>
  );
}
