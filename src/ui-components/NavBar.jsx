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
        Shape36602555: {},
        Shape36602556: {},
        "Rectangle-path36602557": {},
        "Rectangle-path36602558": {},
        "Rectangle-path36602559": {},
        "Rectangle-path36602560": {},
        "Rectangle-path36602561": {},
        "Rectangle-path36602562": {},
        "Rectangle-path36602563": {},
        "Rectangle-path36602564": {},
        Oval: {},
        "Rectangle-path36602567": {},
        "Rectangle-path36602568": {},
        Group: {},
        "041---Books": {},
        "Page-1": {},
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
        Shape36602555: {},
        Shape36602556: {},
        "Rectangle-path36602557": {},
        "Rectangle-path36602558": {},
        "Rectangle-path36602559": {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 26.18408203125,
            height: 5.344818115234375,
          },
        },
        "Rectangle-path36602560": {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 1.939453125,
            height: 5.344818115234375,
          },
        },
        "Rectangle-path36602561": {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 1.939453125,
            height: 5.344818115234375,
          },
        },
        "Rectangle-path36602562": {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 11.637451171875,
            height: 3.2069091796875,
          },
        },
        "Rectangle-path36602563": {},
        "Rectangle-path36602564": {},
        Oval: {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 8.72802734375,
            height: 3.2069091796875,
          },
        },
        "Rectangle-path36602567": {},
        "Rectangle-path36602568": {},
        Group: {},
        "041---Books": {},
        "Page-1": {},
        "market 1": {},
        Name: {},
        Logo: {},
        MobileAddNewButton: {},
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
              <View
                padding="0px 0px 0px 0px"
                width="28.12px"
                height="29.93px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="1.72%"
                bottom="1.72%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Page-1")}
              >
                <View
                  padding="0px 0px 0px 0px"
                  width="28.12px"
                  height="29.93px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "041---Books")}
                >
                  <Icon
                    width="22.79px"
                    height="6.41px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 22.789794921875,
                      height: 6.413787841796875,
                    }}
                    paths={[
                      {
                        d: "M22.7899 0L22.7899 6.41379L2.47731 6.41379C1.10992 6.41379 0 4.9771 0 3.2069C0 1.43669 1.10992 0 2.47731 0L22.7899 0Z",
                        fill: "rgba(245,239,202,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="23.21%"
                    bottom="55.36%"
                    left="5.17%"
                    right="13.79%"
                    {...getOverrideProps(overrides, "Shape36602555")}
                  ></Icon>
                  <Icon
                    width="25.21px"
                    height="9.62px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 25.21435546875,
                      height: 9.620697021484375,
                    }}
                    paths={[
                      {
                        d: "M25.2143 8.55173C25.2127 9.14137 24.7795 9.61894 24.2446 9.6207L4.36402 9.6207C1.95384 9.6207 0 7.46703 0 4.81035C0 2.15367 1.95384 5.34483e-08 4.36402 0L24.2446 0C24.7802 0 25.2143 0.478593 25.2143 1.06897C25.2143 1.65934 24.7802 2.13793 24.2446 2.13793L4.36402 2.13793C3.02503 2.13793 1.93956 3.33441 1.93956 4.81035C1.93956 6.28628 3.02503 7.48277 4.36402 7.48277L24.2446 7.48277C24.7795 7.48453 25.2127 7.96209 25.2143 8.55173Z",
                        fill: "rgba(242,156,31,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="17.86%"
                    bottom="50%"
                    left="0%"
                    right="10.34%"
                    {...getOverrideProps(overrides, "Shape36602556")}
                  ></Icon>
                  <Icon
                    width="26.18px"
                    height="7.48px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 26.18408203125,
                      height: 7.482757568359375,
                    }}
                    paths={[
                      {
                        d: "M25.2143 0L0.969782 0C0.434186 0 0 0.478592 0 1.06897L0 6.41379C0 7.00417 0.434186 7.48276 0.969782 7.48276L25.2143 7.48276C25.7499 7.48276 26.1841 7.00417 26.1841 6.41379L26.1841 1.06897C26.1841 0.478592 25.7499 0 25.2143 0Z",
                        fill: "rgba(125,101,153,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="50%"
                    bottom="25%"
                    left="6.9%"
                    right="0%"
                    {...getOverrideProps(overrides, "Rectangle-path36602557")}
                  ></Icon>
                  <Icon
                    width="26.18px"
                    height="7.48px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 26.18408203125,
                      height: 7.482757568359375,
                    }}
                    paths={[
                      {
                        d: "M25.2143 0L0.969782 0C0.434186 0 0 0.478592 0 1.06897L0 6.41379C0 7.00417 0.434186 7.48276 0.969782 7.48276L25.2143 7.48276C25.7499 7.48276 26.1841 7.00417 26.1841 6.41379L26.1841 1.06897C26.1841 0.478592 25.7499 0 25.2143 0Z",
                        fill: "rgba(230,76,60,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="75%"
                    bottom="0%"
                    left="0%"
                    right="6.9%"
                    {...getOverrideProps(overrides, "Rectangle-path36602558")}
                  ></Icon>
                  <Icon
                    width="26.18px"
                    height="5.34px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 26.18408203125,
                      height: 5.3448333740234375,
                    }}
                    paths={[
                      {
                        d: "M25.2143 0L0.969782 0C0.434186 0 0 0.478592 0 1.06897L0 4.27586C0 4.86624 0.434186 5.34483 0.969782 5.34483L25.2143 5.34483C25.7499 5.34483 26.1841 4.86624 26.1841 4.27586L26.1841 1.06897C26.1841 0.478592 25.7499 0 25.2143 0Z",
                        fill: "rgba(59,151,211,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="82.14%"
                    left="0%"
                    right="6.9%"
                    {...getOverrideProps(overrides, "Rectangle-path36602559")}
                  ></Icon>
                  <Icon
                    width="1.94px"
                    height="5.34px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.939453125,
                      height: 5.3448333740234375,
                    }}
                    paths={[
                      {
                        d: "M0 0L1.93957 0L1.93957 5.34483L0 5.34483L0 0Z",
                        fill: "rgba(103,185,204,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="82.14%"
                    left="13.79%"
                    right="79.31%"
                    {...getOverrideProps(overrides, "Rectangle-path36602560")}
                  ></Icon>
                  <Icon
                    width="1.94px"
                    height="5.34px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.939453125,
                      height: 5.3448333740234375,
                    }}
                    paths={[
                      {
                        d: "M0 0L1.93957 0L1.93957 5.34483L0 5.34483L0 0Z",
                        fill: "rgba(103,185,204,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="82.14%"
                    left="72.41%"
                    right="20.69%"
                    {...getOverrideProps(overrides, "Rectangle-path36602561")}
                  ></Icon>
                  <Icon
                    width="11.64px"
                    height="3.21px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 11.637451171875,
                      height: 3.2068939208984375,
                    }}
                    paths={[
                      {
                        d: "M11.1525 0L0.484891 0C0.217093 0 0 0.239296 0 0.534483L0 2.67241C0 2.9676 0.217093 3.2069 0.484891 3.2069L11.1525 3.2069C11.4203 3.2069 11.6374 2.9676 11.6374 2.67241L11.6374 0.534483C11.6374 0.239296 11.4203 0 11.1525 0Z",
                        fill: "rgba(159,201,211,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="57.14%"
                    bottom="32.14%"
                    left="32.76%"
                    right="25.86%"
                    {...getOverrideProps(overrides, "Rectangle-path36602562")}
                  ></Icon>
                  <Icon
                    width="0.97px"
                    height="7.48px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 0.9697265625,
                      height: 7.482757568359375,
                    }}
                    paths={[
                      {
                        d: "M0 0L0.969783 0L0.969783 7.48276L0 7.48276L0 0Z",
                        fill: "rgba(180,154,202,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="50%"
                    bottom="25%"
                    left="82.76%"
                    right="13.79%"
                    {...getOverrideProps(overrides, "Rectangle-path36602563")}
                  ></Icon>
                  <Icon
                    width="0.97px"
                    height="7.48px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 0.9697265625,
                      height: 7.482757568359375,
                    }}
                    paths={[
                      {
                        d: "M0 0L0.969783 0L0.969783 7.48276L0 7.48276L0 0Z",
                        fill: "rgba(180,154,202,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="50%"
                    bottom="25%"
                    left="20.69%"
                    right="75.86%"
                    {...getOverrideProps(overrides, "Rectangle-path36602564")}
                  ></Icon>
                  <Icon
                    width="8.73px"
                    height="3.21px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 8.72802734375,
                      height: 3.2068939208984375,
                    }}
                    paths={[
                      {
                        d: "M4.36402 3.2069C6.7742 3.2069 8.72804 2.48901 8.72804 1.60345C8.72804 0.717888 6.7742 0 4.36402 0C1.95384 0 0 0.717888 0 1.60345C0 2.48901 1.95384 3.2069 4.36402 3.2069Z",
                        fill: "rgba(245,239,202,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="82.14%"
                    bottom="7.14%"
                    left="31.03%"
                    right="37.93%"
                    {...getOverrideProps(overrides, "Oval")}
                  ></Icon>
                  <View
                    padding="0px 0px 0px 0px"
                    width="20.37px"
                    height="7.48px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="75%"
                    bottom="0%"
                    left="10.34%"
                    right="17.24%"
                    {...getOverrideProps(overrides, "Group")}
                  >
                    <Icon
                      width="1.94px"
                      height="7.48px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 1.939453125,
                        height: 7.482757568359375,
                      }}
                      paths={[
                        {
                          d: "M0 0L1.93957 0L1.93957 7.48276L0 7.48276L0 0Z",
                          fill: "rgba(242,156,31,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="0%"
                      bottom="0%"
                      left="0%"
                      right="90.48%"
                      {...getOverrideProps(overrides, "Rectangle-path36602567")}
                    ></Icon>
                    <Icon
                      width="1.94px"
                      height="7.48px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 1.939453125,
                        height: 7.482757568359375,
                      }}
                      paths={[
                        {
                          d: "M0 0L1.93957 0L1.93957 7.48276L0 7.48276L0 0Z",
                          fill: "rgba(242,156,31,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="0%"
                      bottom="0%"
                      left="90.48%"
                      right="0%"
                      {...getOverrideProps(overrides, "Rectangle-path36602568")}
                    ></Icon>
                  </View>
                </View>
              </View>
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
