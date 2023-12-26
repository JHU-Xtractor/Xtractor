/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ExpandButtonOverridesProps = {
    ExpandButton?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1168"?: PrimitiveOverrideProps<ViewProps>;
    "Vector 3"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ExpandButtonProps = React.PropsWithChildren<Partial<ViewProps> & {
    expand?: (event: SyntheticEvent) => void;
} & {
    overrides?: ExpandButtonOverridesProps | undefined | null;
}>;
export default function ExpandButton(props: ExpandButtonProps): React.ReactElement;
