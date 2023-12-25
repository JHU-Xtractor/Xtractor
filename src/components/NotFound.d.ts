/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotFoundOverridesProps = {
    NotFound?: PrimitiveOverrideProps<FlexProps>;
    "Not_found"?: PrimitiveOverrideProps<TextProps>;
    "Not_found2"?: PrimitiveOverrideProps<TextProps>;
    "main_page"?: PrimitiveOverrideProps<FlexProps>;

} & EscapeHatchProps;
export declare type NotFoundProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NotFoundOverridesProps | undefined | null;
}>;
export default function NotFound(props: NotFoundProps): React.ReactElement;
