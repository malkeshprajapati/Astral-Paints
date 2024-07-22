import Button from "@/_components/Button";
import { PrimaryHeading, SecondaryHeading } from "@/_components/Typography";

const CategoryRenderer = ({ url, title, imageUrl, isFirst = false }) => {
    if (isFirst) {
        return (
            <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className={"inline-flex items-end w-full h-full"}
            >
                <div className="w-full bg-orange-400 py-3 px-5 flex items-center justify-between">
                    <p className="text-lg font-bold text-white tracking-wide">{title}</p>
                    <Button
                        text="Read More"
                        extraCss="w-fit text-orange-400 border border-orange-400"
                        url={url}
                    />
                </div>
            </div>
        );
    }
    return (
        <a
            href={url}
            style={{ backgroundImage: `url(${imageUrl})` }}
            className={"pb-5 pl-5 inline-flex items-end w-[47%] h-48"}
        >
            <p className="text-lg font-bold text-white tracking-wide">{title}</p>
        </a>
    );
};

function CategorySection({ homepageData }) {
    return (
        <section id="category-section" className="custom-container mt-16">
            <SecondaryHeading title={homepageData?.homeCategorySubtitle} />
            <PrimaryHeading title={homepageData?.homeCategoryTitle} />
            <div className="flex justify-between mt-3 gap-x-5">
                <div className="w-[49%]">
                    {homepageData?.categories?.slice(0, 1).map((value, index) => {
                        const imageUrl = value?.image?.node?.sourceUrl;
                        return (
                            <CategoryRenderer
                                key={index + 1000} //using index as key since data is static across user journey
                                url={value?.link}
                                title={value?.title}
                                imageUrl={imageUrl}
                                isFirst={true}
                            />
                        );
                    })}
                </div>
                <div className="w-[49%] flex flex-wrap justify-between gap-x-3 gap-y-8">
                    {homepageData?.categories?.slice(1).map((value, index) => {
                        const imageUrl = value.image.node.sourceUrl;
                        return (
                            <CategoryRenderer
                                key={index} //using index as key since data is static across user journey
                                url={value.link}
                                title={value.title}
                                imageUrl={imageUrl}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default CategorySection;
