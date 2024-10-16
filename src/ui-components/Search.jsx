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
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Search(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        _Magnifyingglass: {},
        "Placeholder Label": {},
        content: {},
        Search: {},
      },
      variantValues: {
        state: "Default",
        topbar: "False",
        mic: "False",
        clearIcon: "False",
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="300px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 0.10000000149011612px 0.30000001192092896px rgba(0, 0, 0, 0.10000000149011612)"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Search")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="48px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="2px"
        padding="12px 16px 12px 16px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "content")}
      >
        <View
          width="28px"
          height="28px"
          {...getOverrideProps(overrides, "_Magnifyingglass")}
        ></View>
        <Text
          fontFamily="Roboto"
          fontSize="17px"
          fontWeight="400"
          color="rgba(60,60,67,0.6)"
          lineHeight="22px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.35px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Search"
          {...getOverrideProps(overrides, "Placeholder Label")}
        ></Text>
      </Flex>
    </Flex>
  );
}
