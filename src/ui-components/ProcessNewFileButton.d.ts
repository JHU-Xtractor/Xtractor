/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps } from "@aws-amplify/ui-react";
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
export declare type ProcessNewFileButtonOverridesProps = {
    ProcessNewFileButton?: PrimitiveOverrideProps<FlexProps>;
    "Process New File Button"?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProcessNewFileButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    upload?: (event: SyntheticEvent) => void;
} & {
    overrides?: ProcessNewFileButtonOverridesProps | undefined | null;
}>;
export default function ProcessNewFileButton(props: ProcessNewFileButtonProps): React.ReactElement;
