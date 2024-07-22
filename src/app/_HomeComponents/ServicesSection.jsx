import { PrimaryHeading, SecondaryHeading } from "@/_components/Typography"


function ServicesSection({ homepageData }) {
    return (
        <section id='services-section' className="custom-container mt-16">
            <SecondaryHeading title={homepageData?.homeServicesSubtitle} />
            <PrimaryHeading title={homepageData?.homeServicesTitle} />
            {/* data for this section is not present in api */}
            <div className="rounded-lg mt-5 shadow-customBoxShadow flex-center h-[100px]">
                <p className="text-2xl font-bold">No Data Available</p>
            </div>
        </section>
    )
}

export default ServicesSection