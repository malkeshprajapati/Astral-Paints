import { ApolloWrapper } from "@/_lib/ApolloWrapper";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";
import getApolloClient from "@/_lib/ApolloClient";
import getHomePageData from "@/_graphQL/homePageQuery";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const client = getApolloClient();

  const { data = {} } = await client.query({
    query: getHomePageData,
  });

  const metadata = data.pages?.nodes?.[0]?.seo || {}

  return {
    title: metadata.title ?? '',
    description: metadata.metaDesc ?? '',
    canonical: metadata.canonical ?? '',
    openGraph: {
      type: metadata.opengraphType ?? '',
      siteName: metadata.opengraphSiteName ?? '',
      title: metadata.opengraphTitle ?? '',
      description: metadata.opengraphDescription ?? '',
      url: metadata.opengraphUrl ?? '',
      images: [
        {
          url: metadata.opengraphImage?.mediaItemUrl ?? '',
          width: 1100,
          height: 650,
          alt: metadata.opengraphTitle ?? '',
        },
      ],
    }
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <Navbar />
          {children}
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
