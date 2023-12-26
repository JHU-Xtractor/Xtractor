/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import LogoSmall from "./LogoSmall";
import MyIcon from "./MyIcon";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function NavBarSide(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="385px"
      height="762px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="32px 0px 32px 0px"
      backgroundColor="rgba(64,170,191,0.25)"
      {...getOverrideProps(overrides, "NavBarSide")}
      {...rest}
    >
      <Flex
        gap="32px"
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
        {...getOverrideProps(overrides, "Frame 32129767087")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="618px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 32px 0px 32px"
          {...getOverrideProps(overrides, "Frame 32129767088")}
        >
          <LogoSmall
            width="131px"
            height="99px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Logo Small")}
          ></LogoSmall>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
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
                backgroundColor="rgba(207,234,239,1)"
                {...getOverrideProps(overrides, "icon39443712")}
              >
                <MyIcon
                  width="18px"
                  height="18px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  type="home"
                  {...getOverrideProps(overrides, "MyIcon39443713")}
                ></MyIcon>
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(56,85,178,1)"
                lineHeight="24px"
                textAlign="left"
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
                children="Dashboard"
                {...getOverrideProps(overrides, "label29767099")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
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
              {...getOverrideProps(overrides, "label29767101")}
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
              {...getOverrideProps(overrides, "link29767103")}
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
                backgroundColor="rgba(207,234,239,1)"
                {...getOverrideProps(overrides, "icon39433519")}
              >
                <MyIcon
                  width="18px"
                  height="18px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  type="file"
                  {...getOverrideProps(overrides, "MyIcon39433566")}
                ></MyIcon>
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(56,85,178,1)"
                lineHeight="24px"
                textAlign="left"
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
                children="Files"
                {...getOverrideProps(overrides, "label29767106")}
              ></Text>
            </Flex>
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
              {...getOverrideProps(overrides, "link29767111")}
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
                backgroundColor="rgba(207,234,239,1)"
                {...getOverrideProps(overrides, "icon39433544")}
              >
                <View
                  width="24px"
                  height="24px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 439")}
                >
                  <View
                    padding="0px 0px 0px 0px"
                    width="21px"
                    height="18px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0px"
                    left="0px"
                    {...getOverrideProps(overrides, "Group 1")}
                  >
                    <View
                      width="21px"
                      height="15px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="3px"
                      left="0px"
                      border="1px SOLID rgba(123,97,255,1)"
                      padding="0px 0px 0px 0px"
                      {...getOverrideProps(overrides, "Rectangle 1164")}
                    ></View>
                    <View
                      width="6.56px"
                      height="3px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="0px"
                      left="2.63px"
                      border="1px SOLID rgba(123,97,255,1)"
                      padding="0px 0px 0px 0px"
                      {...getOverrideProps(overrides, "Rectangle 1165")}
                    ></View>
                    <Icon
                      width="7.88px"
                      height="9px"
                      viewBox={{ minX: 0, minY: 0, width: 7.875, height: 9 }}
                      paths={[
                        {
                          d: "M6.875 4.5C6.875 6.5626 5.43858 8 3.9375 8L3.9375 10C6.78566 10 8.875 7.40796 8.875 4.5L6.875 4.5ZM3.9375 8C2.43642 8 1 6.5626 1 4.5L-1 4.5C-1 7.40796 1.08934 10 3.9375 10L3.9375 8ZM1 4.5C1 2.4374 2.43642 1 3.9375 1L3.9375 -1C1.08934 -1 -1 1.59204 -1 4.5L1 4.5ZM3.9375 1C5.43858 1 6.875 2.4374 6.875 4.5L8.875 4.5C8.875 1.59204 6.78566 -1 3.9375 -1L3.9375 1Z",
                          stroke: "rgba(123,97,255,1)",
                          fillRule: "nonzero",
                          strokeWidth: 1,
                        },
                        {
                          d: "M7.875 4.5C7.875 6.98528 6.11212 9 3.9375 9C1.76288 9 0 6.98528 0 4.5C0 2.01472 1.76288 0 3.9375 0C6.11212 0 7.875 2.01472 7.875 4.5Z",
                          fill: "rgba(217,217,217,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="6px"
                      left="6.56px"
                      {...getOverrideProps(overrides, "Ellipse 1")}
                    ></Icon>
                  </View>
                </View>
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(56,85,178,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="165px"
                height="33px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Process a New File"
                {...getOverrideProps(overrides, "label29767114")}
              ></Text>
            </Flex>
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
              {...getOverrideProps(overrides, "link29767107")}
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
                backgroundColor="rgba(207,234,239,1)"
                {...getOverrideProps(overrides, "icon39433565")}
              >
                <MyIcon
                  width="18px"
                  height="18px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  type="content"
                  {...getOverrideProps(overrides, "MyIcon39433520")}
                ></MyIcon>
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(56,85,178,1)"
                lineHeight="24px"
                textAlign="left"
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
                children="Files"
                {...getOverrideProps(overrides, "label29767110")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 32129767135")}
        >
          <Flex
            gap="9px"
            direction="row"
            width="385px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 416")}
          >
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 415")}
            >
              <Image
                width="48px"
                height="48px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="40px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1163")}
              ></Image>
              <Flex
                gap="0"
                direction="column"
                width="100px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 32129767140")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(13,26,38,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0.01px"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Wesley Peck"
                  {...getOverrideProps(overrides, "Wesley Peck")}
                ></Text>
              </Flex>
            </Flex>
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              type="settings"
              {...getOverrideProps(overrides, "MyIcon39173440")}
            ></MyIcon>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
