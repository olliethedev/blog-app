import React from "react";
import Head from "next/head";
import { NavBar, NavLinkButtonCollection, PageContent } from "@/ui-components";
import PostCreateForm from "@/ui-components/PostCreateForm";

const NewPost = () => {
  return (
    <>
      <Head>
        <title>Create New | Blog App</title>
        <meta
          name="description"
          content="Example Blog App built with AWS Amplify"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar
          linksLayout={
            <NavLinkButtonCollection
              wrap="wrap"
              justifyContent="center"
              gap={0}
              overrideItems={() => ({
                minWidth: "max-content",
                overrides: {
                  Button: {
                    padding: "5px 5px",
                  },
                },
              })}
            />
          }
          overrides={{
            NavBar: {
              width: "100%",
            },
            LinksLayout: {
              width: "100%",
              wrap: "wrap",
              gap: 0,
            },
            CategoriesLayout: {
              width: "100%",
            },
          }}
        />
        <PageContent
          overrides={{
            PageContent: {
              width: "100%",
              maxWidth: 1200,
              margin: "5px auto",
            },
            BackButton: {
              display: "none",
            },
            Heading: {
              children: "Create New Post",
            },
            HeadingLayout: {
              alignItems: "center",
            },
            ContentPortal: {
              width: "100%",
              margin: "0 auto",
              alignItems: "center",
              justifyContent: "center",
              children: (
                <PostCreateForm
                  width="100%"
                  maxWidth={600}
                  onSubmit={(values) => {
                    return { ...values };
                  }}
                />
              ),
            },
          }}
        />
      </main>
    </>
  );
};

export default NewPost;
