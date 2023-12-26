/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ValidPdfOverridesProps = {
    ValidPdf?: PrimitiveOverrideProps<ViewProps>;
    "Valid Types .jpeg"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ValidPdfProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ValidPdfOverridesProps | undefined | null;
}>;
export default function ValidPdf(props: ValidPdfProps): React.ReactElement;
