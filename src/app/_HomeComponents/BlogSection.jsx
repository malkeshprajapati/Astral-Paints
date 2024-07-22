import Button from "@/_components/Button";
import { PrimaryHeading, SecondaryHeading } from "@/_components/Typography";

function isValidDate(date) {
    const parsedDate = new Date(date);
    return !isNaN(parsedDate?.getTime()) ? parsedDate?.toLocaleDateString() : "";
}

const BlogRenderer = ({ imageUrl, date, blogTitle, isLarge = false }) => {
    return (
        <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className={`flex flex-col justify-end pl-5 pb-5 ${isLarge ? "h-full" : "h-[250px]"
                }`}
        >
            <p className="text-white italic mb-3">{isValidDate(date)}</p>
            <p className="text-white w-[85%]">{blogTitle}</p>
            {isLarge && (
                <Button text="Read More" extraCss="text-cyan-500 mt-3 w-fit" />
            )}
        </div>
    );
};

function BlogSection({ homepageData, blogsData }) {
    return (
        <section id="blogs-section" className="custom-container mt-16 pb-16">
            <SecondaryHeading title={homepageData?.blogSubtitle} />
            <PrimaryHeading title={homepageData?.blogTitle} />
            <div className="flex justify-between">
                <div className="w-[25%] flex flex-col gap-y-5">
                    {blogsData?.slice(0, 2)?.map((value) => {
                        const imageUrl = value?.featuredImage?.node?.sourceUrl;
                        return (
                            <BlogRenderer
                                key={value?.slug}
                                blogTitle={value?.title}
                                imageUrl={imageUrl}
                                date={value.date}
                            />
                        );
                    })}
                </div>
                <div className="w-[45%] flex flex-col gap-y-5">
                    {blogsData?.slice(2, 3)?.map((value) => {
                        const imageUrl = value?.featuredImage?.node?.sourceUrl;
                        return (
                            <BlogRenderer
                                key={value?.slug}
                                isLarge={true}
                                blogTitle={value?.title}
                                imageUrl={imageUrl}
                                date={value?.date}
                            />
                        );
                    })}
                </div>
                <div className="w-[25%] flex flex-col gap-y-5">
                    {/* data duplicated here to match the actual UI */}
                    {[...blogsData?.slice(3), ...blogsData?.slice(3)]?.map((value) => {
                        const imageUrl = value?.featuredImage?.node?.sourceUrl;
                        return (
                            <BlogRenderer
                                key={value?.slug}
                                blogTitle={value?.title}
                                imageUrl={imageUrl}
                                date={value?.date}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default BlogSection;
