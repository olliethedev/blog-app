import { Blog, GetPostQuery, Post } from "@/API";
import React from "react";
import { GetServerSidePropsContext } from "next";
import { getBlog, getPost } from "@/graphql/queries";
import { API, GraphQLResult } from "@aws-amplify/api";
import Head from "next/head";
import {
  NavBar,
  NavLinkButtonCollection,
  PageContent,
  PostDetail,
} from "@/ui-components";
import CommentCreateForm from "@/ui-components/CommentCreateForm";

interface Props {
  post: Post;
}

export default function PostDetailPage({ post }: Props) {
  const title = `${post?.title} | Blog App`;
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
              children: post?.title,
            },
            HeadingLayout: {
              alignItems: "flex-start",
            },
            ContentPortal: {
              width: "100%",
              children: (
                <>
                  <PostDetail
                    post={post}
                    blog={post?.blog}
                    overrides={{
                      PostDetail: {
                        width: "100%",
                      },
                    }}
                  />
                  <CommentCreateForm />
                </>
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
    query: getPost,
    variables: {
      id: id,
    },
  })) as GraphQLResult<GetPostQuery>;

  return {
    props: {
      post: results.data?.getPost,
    },
  };
};
