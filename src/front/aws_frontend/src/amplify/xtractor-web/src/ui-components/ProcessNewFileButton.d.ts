/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProcessNewFileButtonOverridesProps = {
    ProcessNewFileButton?: PrimitiveOverrideProps<FlexProps>;
    "Process New File Button"?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProcessNewFileButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    uploadFile?: (event: SyntheticEvent) => void;
} & {
    overrides?: ProcessNewFileButtonOverridesProps | undefined | null;
}>;
export default function ProcessNewFileButton(props: ProcessNewFileButtonProps): React.ReactElement;
