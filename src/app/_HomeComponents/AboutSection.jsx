import Image from "next/image";
import Button from "@/_components/Button";
import { PrimaryHeading, SecondaryHeading } from "@/_components/Typography";

function AboutSection({ homepageData }) {
    return (
        <section className="custom-container flex">
            <div className="w-1/2 flex flex-col justify-end h-[500px]">
                <SecondaryHeading title={homepageData?.homeAboutSubtitle} />
                <PrimaryHeading title={homepageData?.homeAboutTitle} />
                <article
                    className="home-page-lorem-ipsum-container"
                    dangerouslySetInnerHTML={{
                        __html: homepageData?.homeAboutDescription,
                    }}
                ></article>
                <Button
                    url={homepageData?.homeColoursButton.url}
                    target={homepageData?.homeColoursButton.target}
                    title={homepageData?.homeColoursButton.title}
                    extraCss="w-fit mt-3 text-red-500 border border-red-500"
                />
            </div>
            <div className="w-1/2">
                <Image
                    src={homepageData.homeAboutVideoImage.node.sourceUrl}
                    alt="bring-your-dreams-to-life"
                    width={600}
                    height={300}
                    className="w-full h-[500px] object-cover"
                />
            </div>
        </section>
    );
}

export default AboutSection;