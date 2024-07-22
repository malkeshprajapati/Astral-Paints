import Button from "@/_components/Button";
import { PrimaryHeading, SecondaryHeading } from "@/_components/Typography";


const ColourRenderer = ({ title, colorCode = "#fff", isDetailed = false }) => {
    if (isDetailed) {
        return <div className="rounded-2xl py-3 w-[250px] flex flex-col items-center shadow-customBoxShadow">
            <p className="text-center mb-5 font-bold">Astral Paints</p>
            <div
                className="w-48 h-32 border-2 border-white outline outline-8"
                style={{ backgroundColor: colorCode, outlineColor: colorCode }}
            ></div>
            <p className="mt-5 mb-2 tracking-wider text-lg text-center">{title}</p>
            <p className="text-sm text-gray-500 text-center">{colorCode}</p>
        </ div>
    }
    return (
        <div>
            <div
                className="w-48 h-32 mt-[44px] border-2 border-white outline outline-8"
                style={{ backgroundColor: colorCode, outlineColor: colorCode }}
            ></div>
            <p className="mt-5 mb-2 tracking-wider text-lg text-center">{title}</p>
            <p className="text-sm text-gray-500 text-center">{colorCode}</p>
        </div>
    );
};

function ColoursSection({ homepageData, colorsData }) {
    return (
        <section id="colours-section" className="custom-container my-16">
            <SecondaryHeading title={homepageData?.homeColoursSubtitle} />
            <div className="flex justify-between items-center">
                <PrimaryHeading title={homepageData?.homeColoursTitle} />
                <Button
                    text="Explore More"
                    extraCss="border-green-500 border text-green-500"
                />
            </div>

            <div className="flex items-center gap-x-10 mx-2 mt-3">
                {colorsData?.colours?.nodes?.map((value, index) => {
                    return (
                        <ColourRenderer
                            key={value?.slug}
                            title={value?.title}
                            colorCode={value?.colourInfo?.selectColor}
                            isDetailed={index === 2}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default ColoursSection;
