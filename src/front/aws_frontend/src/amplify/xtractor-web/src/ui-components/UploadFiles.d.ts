/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UploadFilesOverridesProps = {
    UploadFiles?: PrimitiveOverrideProps<FlexProps>;
    "Frame 440"?: PrimitiveOverrideProps<ViewProps>;
    "Arrow 1"?: PrimitiveOverrideProps<IconProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Upload Files"?: PrimitiveOverrideProps<TextProps>;
    "PDFs Only"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UploadFilesProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: UploadFilesOverridesProps | undefined | null;
}>;
export default function UploadFiles(props: UploadFilesProps): React.ReactElement;
