"use client";

import Button from "@/_components/Button";
import { useCallback, useEffect, useRef, useState } from "react";

function Banners({ homepageData }) {
    const [activeStep, setActiveStep] = useState(0);
    let timeoutRef = useRef();

    const bannersLength = homepageData?.banners?.length ?? 0;


    const handleNext = useCallback(() => {
        setActiveStep((prevValue) =>
            prevValue === bannersLength - 1 ? 0 : prevValue + 1
        );
    }, [bannersLength])


    const handleJumpToSlide = ({ index }) => {
        setActiveStep(index)
    }

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setInterval(() => {
            handleNext();
        }, 2000);

        return () => clearInterval(timeoutRef.current);
    }, [handleNext]);

    return (
        <section className="h-screen overflow-hidden">
            {homepageData?.banners?.map((homePageBannersData, index) => (
                <section
                    key={index} //using index as key since data is static across user journey
                    className="h-full w-full flex items-center relative bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `url(${homePageBannersData.bannerImage.node.sourceUrl})`,
                        backgroundSize: '100%',
                        transform: `translateY(-${activeStep * 100}%)`,
                        transition: "all 0.5s ease-in-out",
                    }}
                >
                    <div className="custom-container text-white">
                        <h1 className="text-5xl w-80 tracking-wider font-bold">
                            {homePageBannersData.bannersTitle}
                        </h1>
                        <p className="mt-4 mb-6">{homePageBannersData.bannerDescription}</p>
                        <Button
                            text={homePageBannersData.bannerButton.title}
                            extraCss="text-black"
                            url={homePageBannersData.bannerButton.url}
                            target={homePageBannersData.bannerButton.target}
                        />
                    </div>
                    <div className="flex flex-col items-center relative right-10">
                        {new Array(bannersLength).fill(null).map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleJumpToSlide({ index })}
                                className={`rounded-full h-12 mb-2 inline-block cursor-pointer ${activeStep === index
                                    ? "bg-white w-[8px]"
                                    : "bg-gray-200 w-[5px]"
                                    }`}
                            />
                        ))}
                    </div>
                </section>
            ))}
        </section>
    );
}

export default Banners;
