/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginOverridesProps = {
    Login?: PrimitiveOverrideProps<FlexProps>;
    TextField29766939?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38474616?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 437"?: PrimitiveOverrideProps<ViewProps>;
    "Not An Existing user?"?: PrimitiveOverrideProps<TextProps>;
    "Sign Up"?: PrimitiveOverrideProps<TextProps>;
    "Forgot Password"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LoginProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LoginOverridesProps | undefined | null;
}>;
export default function Login(props: LoginProps): React.ReactElement;
