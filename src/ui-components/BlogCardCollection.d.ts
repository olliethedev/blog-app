/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BlogCardProps } from "./BlogCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogCardCollectionOverridesProps = {
    BlogCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    BlogCard?: BlogCardProps;
} & EscapeHatchProps;
export declare type BlogCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => BlogCardProps;
} & {
    overrides?: BlogCardCollectionOverridesProps | undefined | null;
}>;
export default function BlogCardCollection(props: BlogCardCollectionProps): React.ReactElement;
