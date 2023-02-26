import React from "react";
import Head from "next/head";
import { Blog, GetBlogQuery, Post } from "@/API";
import {
  NavBar,
  NavLinkButtonCollection,
  PageContent,
  PostCardCollection,
} from "@/ui-components";
import { GetServerSidePropsContext } from "next";
import { getBlog } from "@/graphql/queries";
import { API, GraphQLResult } from "@aws-amplify/api";

interface Props {
  blog: Blog;
}

export default function BlogDetail({ blog }: Props) {
  const title = `${blog?.name} | Blog App`;
  return (
    <>
      <Head>
        <title>{title}</title>
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
              overrideItems={({ item }: { item: Blog }) => ({
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
              onClick: () => {
                window.location.href = "/";
              },
            },
            Heading: {
              children: blog?.name,
            },
            HeadingLayout: {
              alignItems: "flex-start",
            },
            ContentPortal: {
              width: "100%",
              children: (
                <PostCardCollection
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    medium: "repeat(2, 1fr)",
                  }}
                  overrideItems={({ item }: { item: Post }) => ({
                    className: "blog-card",
                    overrides: {
                      Info: {
                        children: (item.comments as any)?.length,
                      },
                      Title: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        display: "block",
                      },
                    },
                  })}
                />
              ),
            },
          }}
        ></PageContent>
      </main>
    </>
  );
}

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<{ id: string }>) => {
  const id = params?.id;
  if (!id)
    return {
      notFound: true,
    };

  const results = (await API.graphql({
    query: getBlog,
    variables: {
      id: id,
    },
  })) as GraphQLResult<GetBlogQuery>;

  return {
    props: {
      blog: results.data?.getBlog,
    },
  };
};
