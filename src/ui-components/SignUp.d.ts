/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type SignUpOverridesProps = {
    SignUp?: PrimitiveOverrideProps<FlexProps>;
    "Sign Up"?: PrimitiveOverrideProps<TextProps>;
    "Login "?: PrimitiveOverrideProps<FlexProps>;
    TextField38623774?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38623782?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38623783?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38623825?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38623836?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SignUpProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SignUpOverridesProps | undefined | null;
}>;
export default function SignUp(props: SignUpProps): React.ReactElement;
