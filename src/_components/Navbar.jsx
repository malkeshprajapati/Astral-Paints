import Image from "next/image";
import AstralPaintsLogo from "../../public/astral_paints_logo.webp";
import Button from "./Button";

function Navbar() {
    return (
        <nav className="bg-blue-400">
            <div className="custom-container flex justify-between items-center">
                <a href="#">
                    <Image
                        src={AstralPaintsLogo}
                        alt="astral_paints_logo"
                        loading="eager"
                        width={100}
                        height={100}
                        className="w-32 h-20 object-contain"
                    />
                </a>
                <ul className="flex gap-x-5 cursor-pointer text-white">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#category-section">Category</a>
                    </li>
                    <li>
                        <a href="#services-section">Services</a>
                    </li>
                    <li>
                        <a href="#colours-section">Colours</a>
                    </li>
                    <li>
                        <a href="#">Downloads</a>
                    </li>
                    <li>
                        <a href="#become-dealer-section">Become a Dealer</a>
                    </li>
                    <li>
                        <a href="#blogs-section">Blogs</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <Button text="Enquire Now" extraCss="text-blue-500" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
