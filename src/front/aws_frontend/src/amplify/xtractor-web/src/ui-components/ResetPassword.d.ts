/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResetPasswordOverridesProps = {
    ResetPassword?: PrimitiveOverrideProps<FlexProps>;
    "Password Reset"?: PrimitiveOverrideProps<TextProps>;
    Reset?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 438"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ResetPasswordProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ResetPasswordOverridesProps | undefined | null;
}>;
export default function ResetPassword(props: ResetPasswordProps): React.ReactElement;
