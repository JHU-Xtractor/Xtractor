/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoSmallProps } from "./LogoSmall";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarSideOverridesProps = {
    NavBarSide?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32129767087"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32129767088"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 443"?: PrimitiveOverrideProps<ViewProps>;
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
    "Group 3"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 439"?: PrimitiveOverrideProps<ViewProps>;
    "Vector 4"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 3"?: PrimitiveOverrideProps<IconProps>;
    label29767114?: PrimitiveOverrideProps<TextProps>;
    "Frame 444"?: PrimitiveOverrideProps<ViewProps>;
    Collapse?: PrimitiveOverrideProps<ViewProps>;
    "Vector 1"?: PrimitiveOverrideProps<IconProps>;
    "Frame 32129767135"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 416"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 415"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1163"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 32129767140"?: PrimitiveOverrideProps<FlexProps>;
    "Wesley Peck"?: PrimitiveOverrideProps<TextProps>;
    MyIcon39173440?: MyIconProps;
} & EscapeHatchProps;
export declare type NavBarSideProps = React.PropsWithChildren<Partial<FlexProps> & {
    collapse?: (event: SyntheticEvent) => void;
} & {
    overrides?: NavBarSideOverridesProps | undefined | null;
}>;
export default function NavBarSide(props: NavBarSideProps): React.ReactElement;
