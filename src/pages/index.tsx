import { Blog } from "@/API";
import {
  BlogCardCollection,
  NavBar,
  NavLinkButtonCollection,
  PageContent,
} from "@/ui-components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog App</title>
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
              children: "Blog App",
            },
            HeadingLayout: {
              alignItems: "center",
            },
            ContentPortal: {
              width: "100%",
              children: (
                <BlogCardCollection
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    medium: "repeat(3, 1fr)",
                  }}
                  overrideItems={({ item }: { item: Blog }) => ({
                    className: "blog-card",
                    overrides: {
                      Info: {
                        children: (item.Posts as any)?.length,
                      },
                      Title: {
                        height: "auto",
                      },
                    },
                  })}
                />
              ),
            },
          }}
        />
      </main>
    </>
  );
}
