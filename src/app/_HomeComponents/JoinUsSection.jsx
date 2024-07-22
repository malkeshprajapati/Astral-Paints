import Button from "@/_components/Button";
import { PrimaryHeading, SecondaryHeading } from "@/_components/Typography";

function JoinUsSection({ homepageData }) {
    return (
        <section
            id="become-dealer-section"
            className="py-20 flex-col flex-center text-white"
            style={{
                backgroundImage: `url(${homepageData?.homeJoinBackgroundImage?.node?.sourceUrl})`,
            }}
        >
            <SecondaryHeading title={homepageData?.homeJoinSubtitle} />
            <PrimaryHeading title={homepageData?.homeJoinTitle} />
            <article
                className="text-center w-[550px]"
                dangerouslySetInnerHTML={{
                    __html: homepageData?.homeJoinDescription,
                }}
            ></article>
            <Button
                url={homepageData?.homeJoinButton?.url}
                target={homepageData?.homeJoinButton?.target}
                title={homepageData?.homeJoinButton?.title}
                extraCss="mt-3 text-black"
            />
        </section>
    );
}

export default JoinUsSection;
