export function Hero() {

    const contentText = {
        heroHeaderH1: "Taking care of what's important",
        heroHeaderH3: "We've built our life and business insurance products from the ground up to both protect you and reward you.",

    }


    return (
        <div className="bg-tertiary">
            <div className="py-12 px-3 xl:px-96 ">
                <div className="flex flex-col xl:flex-row align-middle justify-center xl:justify-start lg:container">


                    <div className="xl:w-3/5">
                        <h1 className="text-6xl font-medium leading-[80px] font-sans">{contentText.heroHeaderH1}</h1>
                    </div>
                    <div className="xl:w-2/5 flex flex-col justify-around">
                        <h3 className="">{contentText.heroHeaderH3}</h3>
                        <div className="flex flex-row items-center pt-6 gap-x-7 font-sans">
                            <a href="" className="py-[13px] px-7 bg-primary text-white rounded-full">Start free trial </a>
                            <a href="" className="py-3 px-7 bg-transparent text-black rounded-full border-solid border-[1px] border-black">Our Study Case</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}