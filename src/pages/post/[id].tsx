import { GetPostQuery, Post } from "@/API";
import React from "react";
import { GetServerSidePropsContext } from "next";
import { getPost } from "@/graphql/queries";
import { API, GraphQLResult } from "@aws-amplify/api";
import Head from "next/head";
import {
  CommentCollection,
  NavBar,
  NavLinkButtonCollection,
  PageContent,
  PostDetail,
} from "@/ui-components";
import CommentCreateForm from "@/ui-components/CommentCreateForm";
import { Heading } from "@aws-amplify/ui-react";

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
              onClick: () => {
                window.history.back();
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
              justifyContent: "center",
              alignItems: "center",
              gap: "medium",
              children: (
                <>
                  <PostDetail
                    post={post as any}
                    overrides={{
                      PostDetail: {
                        width: "100%",
                      },
                    }}
                  />
                  <Heading marginTop="large" textAlign="center" level={5}>
                    Comments
                  </Heading>
                  <CommentCollection
                    overrideItems={({ item }) => ({
                      overrides: {
                        Review: {
                          width: "100%",
                          maxWidth: 700,
                          margin: "5px auto",
                        },
                      },
                    })}
                  />
                  <Heading marginTop="large" level={5}>
                    Add a Comment
                  </Heading>
                  <CommentCreateForm width="100%" maxWidth={700} />
                </>
              ),
            },
          }}
        />
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
