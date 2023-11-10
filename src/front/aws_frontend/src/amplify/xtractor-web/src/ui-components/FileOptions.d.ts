/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FileOptionsOverridesProps = {
    FileOptions?: PrimitiveOverrideProps<ViewProps>;
    Options?: PrimitiveOverrideProps<TextProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type FileOptionsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FileOptionsOverridesProps | undefined | null;
}>;
export default function FileOptions(props: FileOptionsProps): React.ReactElement;
