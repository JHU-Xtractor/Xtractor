/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SelectionFooterOverridesProps = {
    SelectionFooter?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1169"?: PrimitiveOverrideProps<IconProps>;
    Button4087620?: PrimitiveOverrideProps<ButtonProps>;
    Button4087626?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SelectionFooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    selectAll?: (event: SyntheticEvent) => void;
    submit?: (event: SyntheticEvent) => void;
} & {
    overrides?: SelectionFooterOverridesProps | undefined | null;
}>;
export default function SelectionFooter(props: SelectionFooterProps): React.ReactElement;
