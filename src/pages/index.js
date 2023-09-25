import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";


const HomePage = () => {
  return (
    <div>
      {/* for seo */}
      <Head>
        <title>next home page</title>
        <meta name="home page " description="this is next js home page" />
      </Head>
      home page
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}
