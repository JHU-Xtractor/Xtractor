/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BrowseFileButtonOverridesProps = {
    BrowseFileButton?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type BrowseFileButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BrowseFileButtonOverridesProps | undefined | null;
}>;
export default function BrowseFileButton(props: BrowseFileButtonProps): React.ReactElement;
