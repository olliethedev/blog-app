/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Post } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostCardOverridesProps = {
    PostCard?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    TitleLayout?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    InfoLayout?: PrimitiveOverrideProps<FlexProps>;
    Info?: PrimitiveOverrideProps<TextProps>;
    InfoLabel?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PostCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    post?: Post;
} & {
    overrides?: PostCardOverridesProps | undefined | null;
}>;
export default function PostCard(props: PostCardProps): React.ReactElement;
