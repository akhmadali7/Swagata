export function Navbar() {

    const navLinks = [
        { name: "Get product", link: "#" },
        { name: "Why Swagata?", link: "#" },
        { name: "Study Case", link: "#" },
        { name: "About Us", link: "#" },
        { name: "Contact Us", link: "#" },
    ]


    return (
        <nav className="bg-tertiary flex flex-col justify-center">
            <div className="flex flex-row justify-between px-3 xl:px-96 py-4 md:py-6">
                <div className="flex flex-row gap-x-2">
                    <p>[Logo]</p>
                    <p className="font-medium">Swagata</p>
                </div>
                <div className="hidden lg:flex flex-row gap-x-4 xl:gap-x-11">
                    {navLinks.map((item, index) => (
                        <div key={index}>
                            <a href="">{item.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </nav >
    )
}