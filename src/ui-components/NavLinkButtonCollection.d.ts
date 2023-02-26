/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NavLinkButtonProps } from "./NavLinkButton";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavLinkButtonCollectionOverridesProps = {
    NavLinkButtonCollection?: PrimitiveOverrideProps<CollectionProps>;
    NavLinkButton?: NavLinkButtonProps;
} & EscapeHatchProps;
export declare type NavLinkButtonCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => NavLinkButtonProps;
} & {
    overrides?: NavLinkButtonCollectionOverridesProps | undefined | null;
}>;
export default function NavLinkButtonCollection(props: NavLinkButtonCollectionProps): React.ReactElement;
