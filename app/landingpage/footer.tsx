import { ArrowRightIcon } from '@radix-ui/react-icons'

export function Footer() {

    const footer = [
        {
            section: "Who We Are",
            links: [
                { name: "Auto Insurance", link: "#" },
                { name: "Valuables", link: "#" },
                { name: "Liability", link: "#" },
                { name: "Risk Engineering", link: "#" },
                { name: "Construction Safety", link: "#" },
                { name: "Industrial Hygiene", link: "#" },
            ]
        },
        {
            section: "Company",
            links: [
                { name: "About Swagita", link: "#" },
                { name: "Login Swapartner", link: "#" },
                { name: "Career", link: "#" },
            ]
        },
        {
            section: "About Us",
            links: [
                { name: "Contact Us", link: "#" },
                { name: "Our Story", link: "#" },
            ]
        },
        {
            section: "Socials",
            links: [
                { name: "Facebook", link: "#" },
                { name: "Instagram", link: "#" },
                { name: "Twitter", link: "#" },
                { name: "Youtube", link: "#" },
                { name: "Linkedin", link: "#" },

            ]
        },

    ];


    return (
        <div className="px-96 pt-14 pb-10 bg-primary text-white">
            <div className="flex flex-row justify-between">
                <div className="w-1/3  flex flex-row gap-x-10">
                    <h3 className="text-tertiary text-opacity-70">Who we are</h3>
                    <div className="flex flex-col gap-y-2">
                        {footer.find(section => section.section === "Who We Are") // Find the "Who We Are" section
                            ?.links // Access the links within the section
                            ?.map((link, index) => ( // Map through the links
                                <a key={index} href={link.link}>{link.name}</a>
                            ))}
                    </div>
                </div>
                <div className="flex flex-col w-1/3 justify-between">
                    <div className=" flex flex-row gap-x-10">
                        <h3 className="text-tertiary text-opacity-70">Company</h3>
                        <div className="flex flex-col gap-y-2">
                            {footer.find(section => section.section === "Company") // Find the "Who We Are" section
                                ?.links // Access the links within the section
                                ?.map((link, index) => ( // Map through the links
                                    <a key={index} href={link.link}>{link.name}</a>
                                ))}
                        </div>
                    </div>
                    <div className="  flex flex-row gap-x-10">
                        <h3 className="text-tertiary text-opacity-70">About Us</h3>
                        <div className="flex flex-col gap-y-2">
                            {footer.find(section => section.section === "About Us") // Find the "Who We Are" section
                                ?.links // Access the links within the section
                                ?.map((link, index) => ( // Map through the links
                                    <a key={index} href={link.link}>{link.name}</a>
                                ))}
                        </div>
                    </div>

                </div>
                <div className="w-1/3  flex flex-row gap-x-10">
                    <h3 className="text-tertiary text-opacity-70">Socials</h3>
                    <div className="flex flex-col gap-y-2">
                        {footer.find(section => section.section === "Socials") // Find the "Who We Are" section
                            ?.links // Access the links within the section
                            ?.map((link, index) => ( // Map through the links
                                <a key={index} href={link.link}>{link.name}</a>
                            ))}
                    </div>
                </div>
            </div>
            <div className="pt-16 pb-8 divide-y-2 divide-solid divide-tertiary divide-opacity-20">
                <div className='h-1/2'></div>
                <div className='h-1/2'></div>
            </div>


            <div className=" flex flex-row justify-between items-center">
                <div>
                    <div className="flex flex-row gap-x-3 items-center">
                        <p>[logo]</p>
                        <h1 className="text-2xl font-medium">Swagata</h1>
                    </div>
                    <div className="flex flex-row text-sm text-tertiary text-opacity-70 pt-2 gap-x-5">
                        <p className="">2024 Swagata. All right reserved. </p>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms and Condition</a>
                    </div>
                </div>
                <div className="flex flex-col pt-2">
                    <h3>Stay informed with our newsletter</h3>
                    <div className="text-tertiary text-opacity-70">
                        <div className="flex flex-row items-center border-b-[0.5px] border-slate-800 h-10">
                            <input type="email" placeholder="Type your email address" className="bg-transparent focus:text-white border-none focus:outline-none" />
                            <button><ArrowRightIcon className='h-6 w-6' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}