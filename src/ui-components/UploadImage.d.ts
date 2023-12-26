/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type UploadImageOverridesProps = {
    UploadImage?: PrimitiveOverrideProps<ViewProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "Line 5"?: PrimitiveOverrideProps<IconProps>;
    "Line 6"?: PrimitiveOverrideProps<IconProps>;
    "Line 7"?: PrimitiveOverrideProps<IconProps>;
    "Line 8"?: PrimitiveOverrideProps<IconProps>;
    "Line 9"?: PrimitiveOverrideProps<IconProps>;
    "Line 10"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type UploadImageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UploadImageOverridesProps | undefined | null;
}>;
export default function UploadImage(props: UploadImageProps): React.ReactElement;
