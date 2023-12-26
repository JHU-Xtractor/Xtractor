/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DataRowProps } from "./DataRow";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DataHeaderOverridesProps = {
    DataHeader?: PrimitiveOverrideProps<FlexProps>;
    "Data Header"?: DataRowProps;
} & EscapeHatchProps;
export declare type DataHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DataHeaderOverridesProps | undefined | null;
}>;
export default function DataHeader(props: DataHeaderProps): React.ReactElement;
