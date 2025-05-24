import Head from "next/head";

function PageHead({ title = "KoxNotes", description = "A simple notes app with Firebase and Next.js" }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}

export default PageHead;
