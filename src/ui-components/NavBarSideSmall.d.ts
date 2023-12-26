/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LogoMiniProps } from "./LogoMini";
import { MyIconProps } from "./MyIcon";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarSideSmallOverridesProps = {
    NavBarSideSmall?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32140771063"?: PrimitiveOverrideProps<FlexProps>;
    "Logo Mini"?: LogoMiniProps;
    "Frame 32140771064"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    icon40771068?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40771069?: MyIconProps;
    Section?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    link40771073?: PrimitiveOverrideProps<FlexProps>;
    icon40771074?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40771075?: MyIconProps;
    link40771077?: PrimitiveOverrideProps<FlexProps>;
    icon40771078?: PrimitiveOverrideProps<FlexProps>;
    "Group 3"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 439"?: PrimitiveOverrideProps<ViewProps>;
    "Vector 4"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 3"?: PrimitiveOverrideProps<IconProps>;
    "Frame 445"?: PrimitiveOverrideProps<ViewProps>;
    "Vector 2"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NavBarSideSmallProps = React.PropsWithChildren<Partial<FlexProps> & {
    expand?: (event: SyntheticEvent) => void;
    src?: String;
} & {
    overrides?: NavBarSideSmallOverridesProps | undefined | null;
}>;
export default function NavBarSideSmall(props: NavBarSideSmallProps): React.ReactElement;
