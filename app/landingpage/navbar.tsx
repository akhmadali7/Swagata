import { BiLogoJoomla } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";

export function Navbar() {

    const navLinks = [
        { name: "Get product", link: "#" },
        { name: "Why Swagata?", link: "#WhySwagata" },
        { name: "Study Case", link: "#" },
        { name: "About Us", link: "#" },
        { name: "Contact Us", link: "#Quote" },
    ]


    return (
        <nav className="sticky top-0 bg-tertiary flex flex-col justify-center z-[1]">
            <div className="flex flex-row justify-between px-3 py-3 md:py-5 md:px-16 lg:px-20 xl:px-40 2xl:px-96">
                <div className="flex flex-row gap-x-2 items-center">
                    <BiLogoJoomla className='h-5 w-5 md:h-7 md:w-7' />
                    <p className="font-medium font-sans text-[20px] md:text-2xl">Swagata</p>
                </div>
                <IoMenu className="h-5 w-5 md:h-7 md:w-7 flex lg:hidden text-secondary" />
                <div className="hidden lg:flex flex-row items-center gap-x-4 md:gap-x-5 xl:gap-x-7 2xl:gap-x-11">
                    {navLinks.map((item, index) => (
                        <div key={index} className="">
                            <a href={item.link}>{item.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </nav >
    )
}