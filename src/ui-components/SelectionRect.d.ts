/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type SelectionRectOverridesProps = {
    SelectionRect?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1170"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SelectionRectProps = React.PropsWithChildren<Partial<ViewProps> & {
    close?: (event: SyntheticEvent) => void;
} & {
    overrides?: SelectionRectOverridesProps | undefined | null;
}>;
export default function SelectionRect(props: SelectionRectProps): React.ReactElement;
