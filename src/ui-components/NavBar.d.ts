/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, SearchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    ControlsLayout?: PrimitiveOverrideProps<FlexProps>;
    LogoLayout?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "market 1"?: PrimitiveOverrideProps<ViewProps>;
    "Page-1"?: PrimitiveOverrideProps<ViewProps>;
    "041---Books"?: PrimitiveOverrideProps<ViewProps>;
    Shape36602555?: PrimitiveOverrideProps<IconProps>;
    Shape36602556?: PrimitiveOverrideProps<IconProps>;
    "Rectangle-path36602557"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle-path36602558"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle-path36602559"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle-path36602560"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle-path36602561"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle-path36602562"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle-path36602563"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle-path36602564"?: PrimitiveOverrideProps<IconProps>;
    Oval?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle-path36602567"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle-path36602568"?: PrimitiveOverrideProps<IconProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    MobileAddNewButton?: PrimitiveOverrideProps<ButtonProps>;
    SearchInput?: PrimitiveOverrideProps<FlexProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    ButtonsLayout?: PrimitiveOverrideProps<FlexProps>;
    AddNewButton?: PrimitiveOverrideProps<ButtonProps>;
    CategoriesLayout?: PrimitiveOverrideProps<FlexProps>;
    LinksLayout?: PrimitiveOverrideProps<FlexProps>;
    KitchenLink?: PrimitiveOverrideProps<ButtonProps>;
    ElectronicsLink?: PrimitiveOverrideProps<ButtonProps>;
    BooksLink?: PrimitiveOverrideProps<ButtonProps>;
    ClothingLink?: PrimitiveOverrideProps<ButtonProps>;
    CareLink?: PrimitiveOverrideProps<ButtonProps>;
    SportsLink?: PrimitiveOverrideProps<ButtonProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    linksLayout?: React.ReactNode;
} & {
    breakpoint?: "medium" | "small";
} & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
