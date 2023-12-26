/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoSmallProps } from "./LogoSmall";
import { MyIconProps } from "./MyIcon";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarSideOverridesProps = {
    NavBarSide?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32129767087"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32129767088"?: PrimitiveOverrideProps<FlexProps>;
    "Logo Small"?: LogoSmallProps;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    icon39443712?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39443713?: MyIconProps;
    label29767099?: PrimitiveOverrideProps<TextProps>;
    Section?: PrimitiveOverrideProps<FlexProps>;
    label29767101?: PrimitiveOverrideProps<TextProps>;
    link29767103?: PrimitiveOverrideProps<FlexProps>;
    icon39433519?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39433566?: MyIconProps;
    label29767106?: PrimitiveOverrideProps<TextProps>;
    link29767111?: PrimitiveOverrideProps<FlexProps>;
    icon39433544?: PrimitiveOverrideProps<FlexProps>;
    "Frame 439"?: PrimitiveOverrideProps<ViewProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1165"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
    label29767114?: PrimitiveOverrideProps<TextProps>;
    link29767107?: PrimitiveOverrideProps<FlexProps>;
    icon39433565?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39433520?: MyIconProps;
    label29767110?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767135"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 416"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 415"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1163"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 32129767140"?: PrimitiveOverrideProps<FlexProps>;
    "Wesley Peck"?: PrimitiveOverrideProps<TextProps>;
    MyIcon39173440?: MyIconProps;
} & EscapeHatchProps;
export declare type NavBarSideProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarSideOverridesProps | undefined | null;
}>;
export default function NavBarSide(props: NavBarSideProps): React.ReactElement;
