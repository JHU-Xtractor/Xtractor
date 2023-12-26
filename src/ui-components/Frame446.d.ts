/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame446OverridesProps = {
    Frame446?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1168"?: PrimitiveOverrideProps<ViewProps>;
    "Vector 3"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Frame446Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame446OverridesProps | undefined | null;
}>;
export default function Frame446(props: Frame446Props): React.ReactElement;
