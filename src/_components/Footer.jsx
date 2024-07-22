import Image from "next/image";
import getHomePageData from "@/_graphQL/homePageQuery";
import getApolloClient from "@/_lib/ApolloClient";
import AstralPaintsLogo from "../../public/astral_paints_logo.webp";
import Button from "./Button";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone, MdOutlineMailOutline } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

async function Footer() {
    const client = getApolloClient();

    const { data = {} } = await client.query({
        query: getHomePageData,
    });

    const FooterBgImage =
        data.pages?.nodes?.[0].homepage?.homeJoinBackgroundImage?.node?.sourceUrl ??
        "";

    return (
        <footer
            className="pt-10"
            style={{
                backgroundImage: `url(${FooterBgImage})`,
            }}
        >
            <div className="custom-container text-white flex justify-between pb-5">
                <div className="w-[40%]">
                    <a href="#">
                        <Image
                            src={AstralPaintsLogo}
                            alt="astral_paints_logo"
                            loading="lazy"
                            width={100}
                            height={100}
                            className="w-48 h-32 object-contain"
                        />
                    </a>
                    <h6 className="text-primary font-bold mb-5">Reach Us</h6>
                    <p className="flex gap-x-5 text-sm">
                        <CiLocationOn size={22} /> #417/418, 11th Cross, 4thPhase, Peenya
                        Industrial Area, <br /> Bangalore- 560 058
                    </p>
                    <p className="flex gap-x-5 text-sm my-5">
                        <MdOutlinePhone size={22} />
                        <a href="tel:+918042552555">+91 - 80 - 42552555</a>
                    </p>
                    <p className="flex gap-x-5 text-sm">
                        <MdOutlineMailOutline size={22} />
                        <a href="mailto:info@gem-paints.com">info@gem-paints.com</a>
                    </p>
                </div>
                <div className="w-[55%] mt-10">
                    {/* News letter section */}
                    <div className="flex justify-between gap-x-3">
                        <div>
                            <h6 className="text-primary font-bold">
                                Sign Up To Our Newsletter
                            </h6>
                            <p className="text-[12px] mt-1">
                                Lorem, ipsum dolor sit amet consectetur
                            </p>
                        </div>
                        <div className="flex justify-between h-max items-center border border-primary rounded-full">
                            <input
                                className="bg-transparent text-sm text-white placeholder:text-white border-0 outline-0 focus:border-0 focus:outline-0 pl-5 pr-1"
                                placeholder="Enter Email Address"
                                type="email"
                                inputMode="email"
                            />
                            <Button
                                text="Enquire Now"
                                extraCss="!bg-blue-400 text-white text-nowrap"
                            />
                        </div>
                    </div>

                    {/* Footer info and links */}
                    <div className="flex justify-between mt-10 relative">
                        <ul>
                            <li className="text-primary font-bold mb-2">About</li>
                            <li className="text-sm mb-2">About Astrals</li>
                            <li className="text-sm mb-2">Paint Journey</li>
                            <li className="text-sm mb-2">Group Companies</li>
                        </ul>
                        <ul>
                            <li className="text-primary font-bold mb-2">Category</li>
                            <li className="text-sm mb-2">Interior Paints</li>
                            <li className="text-sm mb-2">Exterior Points</li>
                            <li className="text-sm mb-2">Undercoats</li>
                            <li className="text-sm mb-2">Painting Tools</li>
                            <li className="text-sm mb-2">Water Proofing</li>
                        </ul>
                        <ul>
                            <li className="text-primary font-bold mb-2">Services</li>
                            <li className="text-sm mb-2">Wall Painting</li>
                            <li className="text-sm mb-2">Water Solution</li>
                            <li className="text-sm mb-2">Painting</li>
                            <li className="text-sm mb-2">Colour Shades</li>
                        </ul>
                        <ul>
                            <li className="text-primary font-bold mb-2">Downloads</li>
                            <li className="text-primary font-bold mb-2">Become A Dealer</li>
                            <li className="text-primary font-bold mb-2">Blogs</li>
                            <li className="text-primary font-bold mb-2">Contact</li>
                        </ul>
                        <ul className="flex gap-x-3 absolute bottom-2 right-0">
                            <li className="w-8 h-8 rounded-full border border-white flex-center">
                                <TiSocialFacebook size={16} />
                            </li>
                            <li className="w-8 h-8 rounded-full border border-white flex-center">
                                <FaInstagram size={16} />
                            </li>
                            <li className="w-8 h-8 rounded-full border border-white flex-center">
                                <FaYoutube size={16} />
                            </li>
                            <li className="w-8 h-8 rounded-full border border-white flex-center">
                                <FaXTwitter size={16} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-white bg-blue-400 py-5">
                <div className="custom-container flex justify-between">
                    <p>Terms & Conditions</p>
                    <p>ALL RIGHTS RESERVED</p>
                    <p>PRIVACY POLICY</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
