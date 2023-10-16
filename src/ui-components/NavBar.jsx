/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Icon,
  SearchField,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { linksLayout, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Vector: {},
        "market 1": {},
        Name: {},
        Logo: {},
        MobileAddNewButton: {},
        LogoLayout: {},
        SearchField: {},
        SearchInput: {},
        AddNewButton: {},
        ButtonsLayout: {},
        ControlsLayout: {},
        KitchenLink: {},
        ElectronicsLink: {},
        BooksLink: {},
        ClothingLink: {},
        CareLink: {},
        SportsLink: {},
        LinksLayout: {},
        CategoriesLayout: {},
        "Line 2": {},
        NavBar: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        Vector: {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 28.123779296875,
            height: 29.9310302734375,
          },
        },
        "market 1": {},
        Name: {},
        Logo: {},
        MobileAddNewButton: { variation: "primary" },
        LogoLayout: { justifyContent: "space-between" },
        SearchField: {},
        SearchInput: { width: "unset", alignSelf: "stretch" },
        AddNewButton: { variation: "link" },
        ButtonsLayout: { display: "none" },
        ControlsLayout: {
          gap: "16px",
          direction: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: "0px 16px 0px 16px",
        },
        KitchenLink: {},
        ElectronicsLink: {},
        BooksLink: {},
        ClothingLink: {},
        CareLink: {},
        SportsLink: {},
        LinksLayout: {
          gap: "14px",
          direction: "column",
          alignItems: "flex-start",
          display: "none",
        },
        CategoriesLayout: {
          gap: "8px",
          direction: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: "0px 16px 0px 16px",
          display: "none",
        },
        "Line 2": {
          viewBox: { minX: 0, minY: 0, width: 479, height: 1 },
          paths: [
            {
              d: "M0 -5.55112e-17L479 -5.55112e-17L479 -1L0 -1L0 -5.55112e-17Z",
              stroke: "rgba(229,231,235,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ],
        },
        NavBar: { gap: "16px", width: "479px" },
      },
      variantValues: { breakpoint: "small" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    medium: "medium",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  const logoOnClick = useNavigateAction({ type: "url", url: "/" });
  const mobileAddNewButtonOnClick = useNavigateAction({
    type: "url",
    url: "/post/new",
  });
  const addNewButtonOnClick = useNavigateAction({
    type: "url",
    url: "/post/new",
  });
  return (
    <Flex
      gap="24px"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.15000000596046448)"
      padding="16px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 72px 0px 72px"
        display="flex"
        {...getOverrideProps(overrides, "ControlsLayout")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "LogoLayout")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            onClick={() => {
              logoOnClick();
            }}
            {...getOverrideProps(overrides, "Logo")}
          >
            <View
              width="28.12px"
              height="31px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "market 1")}
            >
              <Icon
                width="28.12px"
                height="29.93px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 28.123779296875,
                  height: 29.931045532226562,
                }}
                paths={[
                  {
                    d: "M24.2445 6.94827L24.2445 13.3621L3.93198 13.3621C2.56459 13.3621 1.45467 11.9254 1.45467 10.1552C1.45467 8.38496 2.56459 6.94827 3.93198 6.94827L24.2445 6.94827Z",
                    fill: "rgba(242,156,31,1)",
                    fillRule: "nonzero",
                  },
                  {
                    d: "M25.2143 13.8966C25.2127 14.4862 24.7795 14.9638 24.2446 14.9655L4.36402 14.9655C1.95384 14.9655 7.59296e-08 12.8119 7.59296e-08 10.1552C7.59296e-08 7.49849 1.95384 5.34482 4.36402 5.34482L24.2446 5.34482C24.7802 5.34482 25.2143 5.82342 25.2143 6.41379C25.2143 7.00417 24.7802 7.48276 24.2446 7.48276L4.36402 7.48276C3.02503 7.48276 1.93956 8.67924 1.93956 10.1552C1.93956 11.6311 3.02503 12.8276 4.36402 12.8276L24.2446 12.8276C24.7795 12.8294 25.2127 13.3069 25.2143 13.8966Z",
                    fill: "rgba(242,156,31,1)",
                    fillRule: "nonzero",
                  },
                  {
                    d: "M27.1539 14.9655L2.90935 14.9655C2.37375 14.9655 1.93957 15.4441 1.93957 16.0345L1.93957 21.3793C1.93957 21.9697 2.37375 22.4483 2.90935 22.4483L27.1539 22.4483C27.6895 22.4483 28.1237 21.9697 28.1237 21.3793L28.1237 16.0345C28.1237 15.4441 27.6895 14.9655 27.1539 14.9655Z",
                    fill: "rgba(242,156,31,1)",
                    fillRule: "nonzero",
                  },
                  {
                    d: "M25.2143 22.4483L0.969782 22.4483C0.434186 22.4483 0 22.9269 0 23.5173L0 28.8621C0 29.4525 0.434186 29.931 0.969782 29.931L25.2143 29.931C25.7499 29.931 26.1841 29.4525 26.1841 28.8621L26.1841 23.5173C26.1841 22.9269 25.7499 22.4483 25.2143 22.4483Z",
                    fill: "rgba(242,156,31,1)",
                    fillRule: "nonzero",
                  },
                  {
                    d: "M25.2143 2.6077e-07L0.969782 2.6077e-07C0.434186 2.6077e-07 0 0.478592 0 1.06897L0 4.27586C0 4.86624 0.434186 5.34483 0.969782 5.34483L25.2143 5.34483C25.7499 5.34483 26.1841 4.86624 26.1841 4.27586L26.1841 1.06897C26.1841 0.478592 25.7499 2.6077e-07 25.2143 2.6077e-07Z",
                    fill: "rgba(242,156,31,1)",
                    fillRule: "nonzero",
                  },
                  {
                    d: "M3.87913 0L5.8187 0L5.8187 5.34483L3.87913 5.34483L3.87913 0Z",
                    fill: "rgba(242,156,31,1)",
                    fillRule: "nonzero",
                  },
                  {
                    d: "M20.3654 0L22.305 0L22.305 5.34483L20.3654 5.34483L20.3654 0Z",
                    fill: "rgba(242,156,31,1)",
                    fillRule: "nonzero",
                  },
                  {
                    d: "M20.3654 17.1035L9.69783 17.1035C9.43003 17.1035 9.21294 17.3428 9.21294 17.6379L9.21294 19.7759C9.21294 20.0711 9.43003 20.3104 9.69783 20.3104L20.3654 20.3104C20.6332 20.3104 20.8503 20.0711 20.8503 19.7759L20.8503 17.6379C20.8503 17.3428 20.6332 17.1035 20.3654 17.1035Z",
                    fill: "rgba(242,156,31,1)",
                    fillRule: "nonzero",
                  },
                  {
                    d: "M23.2748 14.9655L24.2446 14.9655L24.2446 22.4483L23.2748 22.4483L23.2748 14.9655Z",
                    fill: "rgba(242,156,31,1)",
                    fillRule: "nonzero",
                  },
                  {
                    d: "M5.8187 14.9655L6.78848 14.9655L6.78848 22.4483L5.8187 22.4483L5.8187 14.9655Z",
                    fill: "rgba(242,156,31,1)",
                    fillRule: "nonzero",
                  },
                  {
                    d: "M13.0921 27.7931C15.5022 27.7931 17.4561 27.0752 17.4561 26.1897C17.4561 25.3041 15.5022 24.5862 13.0921 24.5862C10.6819 24.5862 8.72804 25.3041 8.72804 26.1897C8.72804 27.0752 10.6819 27.7931 13.0921 27.7931Z",
                    fill: "rgba(242,156,31,1)",
                    fillRule: "nonzero",
                  },
                  {
                    d: "M2.90935 22.4483L4.84892 22.4483L4.84892 29.931L2.90935 29.931L2.90935 22.4483Z",
                    fill: "rgba(242,156,31,1)",
                    fillRule: "nonzero",
                  },
                  {
                    d: "M21.3352 22.4483L23.2748 22.4483L23.2748 29.931L21.3352 29.931L21.3352 22.4483Z",
                    fill: "rgba(242,156,31,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="1.72%"
                bottom="1.72%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="18px"
              fontWeight="600"
              color="rgba(0,0,0,1)"
              textTransform="capitalize"
              lineHeight="21.784090042114258px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Logo"
              {...getOverrideProps(overrides, "Name")}
            ></Text>
          </Flex>
          <Button
            display="none"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="link"
            children="Add New"
            onClick={() => {
              mobileAddNewButtonOnClick();
            }}
            {...getOverrideProps(overrides, "MobileAddNewButton")}
          ></Button>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="360px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "SearchInput")}
        >
          <SearchField
            placeholder="Search for anything..."
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SearchField")}
          ></SearchField>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "ButtonsLayout")}
        >
          <Button
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Add New"
            onClick={() => {
              addNewButtonOnClick();
            }}
            {...getOverrideProps(overrides, "AddNewButton")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "CategoriesLayout")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-end"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          children={linksLayout}
          {...getOverrideProps(overrides, "LinksLayout")}
        ></Flex>
      </Flex>
      <Icon
        width="unset"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1440, height: 1 }}
        paths={[
          {
            d: "M0 0L1440 0L1440 -1L0 -1L0 0Z",
            stroke: "rgba(229,231,235,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "Line 2")}
      ></Icon>
    </Flex>
  );
}
