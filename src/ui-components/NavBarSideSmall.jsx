/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import LogoMini from "./LogoMini";
import MyIcon from "./MyIcon";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function NavBarSideSmall(props) {
  const {
    expand,
    src = "s3://xtractor-web/xtractor_w_trans.png",
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="104px"
      height="762px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="4px 0px 10px rgba(0, 0, 0, 0.25)"
      padding="53px 0px 32px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBarSideSmall")}
      {...rest}
    >
      <Flex
        gap="29px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32140771063")}
      >
        <LogoMini
          width="unset"
          height="77px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Logo Mini")}
        ></LogoMini>
        <Flex
          gap="44px"
          direction="column"
          width="unset"
          height="618px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 32140771064")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 22px 0px 22px"
            {...getOverrideProps(overrides, "Frame 414")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 322")}
            >
              <Flex
                gap="0"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="4px"
                padding="6px 6px 6px 6px"
                {...getOverrideProps(overrides, "icon40771068")}
              >
                <MyIcon
                  width="37px"
                  height="38px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  type="home"
                  {...getOverrideProps(overrides, "MyIcon40771069")}
                ></MyIcon>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="195px"
            justifyContent="space-between"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 18px 0px 18px"
            {...getOverrideProps(overrides, "Section")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
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
              children="Manage"
              {...getOverrideProps(overrides, "label")}
            ></Text>
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "link40771073")}
            >
              <Flex
                gap="0"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="4px"
                padding="6px 10px 6px 10px"
                {...getOverrideProps(overrides, "icon40771074")}
              >
                <MyIcon
                  width="39px"
                  height="37px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  type="file"
                  {...getOverrideProps(overrides, "MyIcon40771075")}
                ></MyIcon>
              </Flex>
            </Flex>
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="70px"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "link40771077")}
            >
              <Flex
                gap="0"
                direction="row"
                width="unset"
                height="83px"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="4px"
                padding="6px 10px 6px 10px"
                {...getOverrideProps(overrides, "icon40771078")}
              >
                <Flex
                  padding="0px 0px 0px 0px"
                  width="53px"
                  height="46px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "Group 3")}
                >
                  <View
                    width="53px"
                    height="46px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    position="absolute"
                    top="0px"
                    left="0px"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 439")}
                  >
                    <Icon
                      width="41px"
                      height="35px"
                      viewBox={{ minX: 0, minY: 0, width: 41, height: 35 }}
                      paths={[
                        {
                          d: "M0 35L-1.5 35L-1.5 36.5L0 36.5L0 35ZM41 35L41 36.5L42.5 36.5L42.5 35L41 35ZM41 7L42.5 7L42.5 5.5L41 5.5L41 7ZM0 7L0 5.5L-1.5 5.5L-1.5 7L0 7ZM6.5 0L6.5 -1.5L5 -1.5L5 0L6.5 0ZM18 0L19.5 0L19.5 -1.5L18 -1.5L18 0ZM0 36.5L41 36.5L41 33.5L0 33.5L0 36.5ZM42.5 35L42.5 7L39.5 7L39.5 35L42.5 35ZM-1.5 7L-1.5 35L1.5 35L1.5 7L-1.5 7ZM6.5 5.5L0 5.5L0 8.5L6.5 8.5L6.5 5.5ZM8 7L8 0L5 0L5 7L8 7ZM6.5 1.5L18 1.5L18 -1.5L6.5 -1.5L6.5 1.5ZM41 5.5L18 5.5L18 8.5L41 8.5L41 5.5ZM18 5.5L6.5 5.5L6.5 8.5L18 8.5L18 5.5ZM16.5 0L16.5 7L19.5 7L19.5 0L16.5 0Z",
                          stroke: "rgba(56,85,178,1)",
                          fillRule: "nonzero",
                          strokeWidth: 3,
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="6px"
                      left="4px"
                      {...getOverrideProps(overrides, "Vector 4")}
                    ></Icon>
                    <Icon
                      width="18px"
                      height="18px"
                      viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
                      paths={[
                        {
                          d: "M15 9C15 12.3137 12.3137 15 9 15L9 21C15.6274 21 21 15.6274 21 9L15 9ZM9 15C5.68629 15 3 12.3137 3 9L-3 9C-3 15.6274 2.37258 21 9 21L9 15ZM3 9C3 5.68629 5.68629 3 9 3L9 -3C2.37258 -3 -3 2.37258 -3 9L3 9ZM9 3C12.3137 3 15 5.68629 15 9L21 9C21 2.37258 15.6274 -3 9 -3L9 3Z",
                          stroke: "rgba(47,73,155,1)",
                          fillRule: "nonzero",
                          strokeWidth: 3,
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="18px"
                      left="16px"
                      {...getOverrideProps(overrides, "Ellipse 3")}
                    ></Icon>
                  </View>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <View
            width="91px"
            height="151px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 445")}
          >
            <Icon
              width="50px"
              height="48px"
              viewBox={{ minX: 0, minY: 0, width: 50, height: 48 }}
              paths={[
                {
                  d: "M50 25.8151L51.7576 27.593L53.4251 25.9446L51.8868 24.175L50 25.8151ZM0 28.3151L50 28.3151L50 23.3151L0 23.3151L0 28.3151ZM51.8868 24.175L29.4458 -1.64016L25.6723 1.64016L48.1132 27.4553L51.8868 24.175ZM48.2424 24.0372L25.8015 46.2221L29.3166 49.7779L51.7576 27.593L48.2424 24.0372Z",
                  stroke: "rgba(56,85,178,1)",
                  fillRule: "nonzero",
                  strokeWidth: 5,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="93px"
              left="21px"
              onClick={expand}
              {...getOverrideProps(overrides, "Vector 2")}
            ></Icon>
          </View>
        </Flex>
      </Flex>
    </Flex>
  );
}
