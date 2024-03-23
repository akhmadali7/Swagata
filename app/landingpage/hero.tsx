import landingPageData from "../../public/landingpage.json"

export function Hero() {
    return (

        <div className="bg-tertiary">
            <div className="py-6 md:pt-20 md:pb-16 px-3 sm:px-6 md:px-16 lg:px-20 xl:px-40 2xl:px-96">
                <div className="flex flex-col md:flex-row align-middle justify-center xl:justify-start lg:container gap-x-3 md:gap-x-10">

                    <div className="xl:w-3/5">
                        <h1 className="text-4xl md:text-6xl font-medium leading-[50px] md:leading-[80px] font-sans">{landingPageData.Hero.header1}</h1>
                    </div>
                    <div className="xl:w-2/5 flex flex-col justify-end xl:justify-between pt-6 md:pt-0">
                        <h3 className="pr-3  md:px-0">{landingPageData.Hero.header2}</h3>
                        <div className="flex flex-row sm:flex-row items-center pt-6 gap-x-2 md:gap-x-5  gap-y-3 font-sans">
                            <a href="" className="py-[9px] px-4 lg:px-7 bg-primary text-white rounded-full text-center">Start free trial </a>
                            <a href="" className="py-2 px-4 lg:px-7 bg-transparent text-black rounded-full border-solid border-[1px] border-black text-center">Our Study Case</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}