import { NavBar } from "@/ui-components";
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
        <NavBar />
      </main>
    </>
  );
}
