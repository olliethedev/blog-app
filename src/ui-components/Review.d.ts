/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Comment } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewOverridesProps = {
    Review?: PrimitiveOverrideProps<FlexProps>;
    ReviewContentBody?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    UserName?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    ReviewText?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ReviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    comment?: Comment;
} & {
    overrides?: ReviewOverridesProps | undefined | null;
}>;
export default function Review(props: ReviewProps): React.ReactElement;
