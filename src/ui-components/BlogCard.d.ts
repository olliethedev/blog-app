/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Blog } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogCardOverridesProps = {
    BlogCard?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    TitleLayout?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    InfoLayout?: PrimitiveOverrideProps<FlexProps>;
    Info?: PrimitiveOverrideProps<TextProps>;
    InfoLabel?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BlogCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    blog?: Blog;
} & {
    overrides?: BlogCardOverridesProps | undefined | null;
}>;
export default function BlogCard(props: BlogCardProps): React.ReactElement;
