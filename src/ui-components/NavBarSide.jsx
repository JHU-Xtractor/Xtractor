/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import LogoSmall from "./LogoSmall";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function NavBarSide(props) {
  const { collapse, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="385px"
      height="762px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="4px 0px 10px rgba(0, 0, 0, 0.25)"
      padding="32px 0px 32px 0px"
      backgroundColor="rgba(255,255,255,1)"
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
          <View
            width="340px"
            height="105px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 443")}
          >
            <LogoSmall
              width="104px"
              height="74px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="17px"
              left="11px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Logo Small")}
            ></LogoSmall>
          </View>
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
                {...getOverrideProps(overrides, "icon39443712")}
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
                {...getOverrideProps(overrides, "icon39433519")}
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
                height="66px"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="4px"
                padding="6px 6px 6px 6px"
                {...getOverrideProps(overrides, "icon39433544")}
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
          </Flex>
          <View
            width="343px"
            height="190px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 444")}
          >
            <View
              width="77px"
              height="76px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="118px"
              left="263px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Collapse")}
            >
              <Icon
                width="53px"
                height="40.5px"
                viewBox={{ minX: 0, minY: 0, width: 53, height: 40.5 }}
                paths={[
                  {
                    d: "M0 21.5L-1.93891 19.9218L-3.30574 21.6011L-1.83886 23.1937L0 21.5ZM53 19L0 19L0 24L53 24L53 19ZM1.93891 23.0782L19.4389 1.57818L15.5611 -1.57818L-1.93891 19.9218L1.93891 23.0782ZM-1.83886 23.1937L15.6611 42.1937L19.3389 38.8063L1.83886 19.8063L-1.83886 23.1937Z",
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
                top="20.5px"
                left="15.5px"
                onClick={collapse}
                {...getOverrideProps(overrides, "Vector 1")}
              ></Icon>
            </View>
          </View>
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
