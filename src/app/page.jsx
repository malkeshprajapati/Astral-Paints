import getApolloClient from "@/_lib/ApolloClient";
import getColorCategory from "@/_graphQL/colorCategoryQuery";
import getHomePageData from "@/_graphQL/homePageQuery";
import getBlogs from "@/_graphQL/blogsQuery";
import Banners from "./_HomeComponents/Banners";
import AboutSection from "./_HomeComponents/AboutSection";
import CategorySection from "./_HomeComponents/CategorySection";
import ServicesSection from "./_HomeComponents/ServicesSection";
import ColoursSection from "./_HomeComponents/ColoursSection";
import JoinUsSection from "./_HomeComponents/JoinUsSection";
import BlogSection from "./_HomeComponents/BlogSection";

export default async function Home() {
  const client = getApolloClient();

  const { data = {} } = await client.query({
    query: getHomePageData,
  });
  const { data: colors = {} } = await client.query({
    query: getColorCategory,
  });
  const { data: blogs = {} } = await client.query({
    query: getBlogs,
  });

  const homepageData = data.pages?.nodes?.[0]?.homepage ?? {};
  const colorsData = colors.allColourCategory?.nodes?.[0] ?? {};
  const blogsData = blogs?.blogs?.nodes ?? [];

  return (
    <main className="min-h-screen">
      {/* Banners section */}
      <Banners homepageData={homepageData} />

      <div className="relative">
        {/* Vertical Band on left */}
        <div className="absolute top-0 left-0 bottom-0 w-5 gradient-bg"></div>

        {/* Home About Section */}
        <AboutSection homepageData={homepageData} />

        {/* Category Section */}
        <CategorySection homepageData={homepageData} />

        {/* Service Section */}
        <ServicesSection homepageData={homepageData} />

        {/* Colors Section */}
        <ColoursSection homepageData={homepageData} colorsData={colorsData} />

        {/* Join Us Section */}
        <JoinUsSection homepageData={homepageData} />

        {/* Blogs Section */}
        <BlogSection homepageData={homepageData} blogsData={blogsData} />
      </div>
    </main>
  );
}
