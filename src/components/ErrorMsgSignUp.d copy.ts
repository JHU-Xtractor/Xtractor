/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ErrorMsgSignUpOverridesProps = {
    ErrorMsgSignUp?: PrimitiveOverrideProps<FlexProps>;
    "Login Failed"?: PrimitiveOverrideProps<AlertProps>;
} & EscapeHatchProps;
export declare type ErrorMsgSignUpProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ErrorMsgSignUpOverridesProps | undefined | null;
    errormessage?: string | undefined | null;
}>;
export default function ErrorMsgSignUp(props: ErrorMsgSignUpProps): React.ReactElement;
