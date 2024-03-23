import { MdHealthAndSafety, MdCleanHands } from "react-icons/md"; //1
import { GiGoldBar } from "react-icons/gi";
import { HiKey, HiLightningBolt } from "react-icons/hi";
import { HiMiniBuildingLibrary } from "react-icons/hi2";

import landingPageData from "../../public/landingpage.json"


export function Feature() {
    return (
        <div className="py-20 px-3 sm:px-6 md:px-16 lg:px-20 xl:px-40 2xl:px-96 bg-[#F7F7F7] bg-opacity-80">

            <div className='flex flex-col'>
                <div className="flex flex-col md:flex-row justify-start gap-x-6">
                    <p className="text-secondary font-medium font-sans md:w-2/12">{landingPageData.Feature1.p}</p>
                    <h2 className="text-5xl font-sans font-medium md:w-auto">{landingPageData.Feature1.h2}</h2>
                </div>
                <div className="pt-16 flex flex-col md:flex-row justify-between md:items-end gap-y-6">
                    <p className="w-full md:w-2/4 text-stone-600">{landingPageData.Feature1.description}</p>

                    <div className='w-full md:w-2/4 flex flex-row md:flex-row gap-x-6'>
                        <div className="w-full md:w-1/2 flex flex-row gap-x-3 justify-center items-center md:items-end">
                            <h3 className="font-medium font-sans text-2xl">{landingPageData.Feature1.total_client}<span className="font-base text-lg">K+</span></h3>
                            <p className='text-slate-600'>Client trust with us</p>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-row gap-x-3 justify-center items-center md:items-end">
                            <h3 className="font-medium font-sans text-2xl">{landingPageData.Feature1.total_business}<span className="font-base text-lg">K+</span></h3>
                            <p className='text-slate-600'>Business protected</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* <MdHealthAndSafety />
            <GiGoldBar />
            <HiKey />
            <HiLightningBolt />
            <HiMiniBuildingLibrary />
            <MdCleanHands /> */}

            <div>
                {/* Simplify later using defined variable */}
                <div className='pt-16 grid grid-row-1 md:grid-cols-3 gap-x-16 gap-y-16 px-32 md:px-0 '>
                    {landingPageData.Feature2.map((item: { h3: string, p: string, icon: string, number: string }, index: number) => (
                        <div key={index} className=''>
                            <div className='flex flex-row justify-between '>
                                <MdCleanHands className='w-7 h-7 text-secondary' />
                                <h3 className='text-xl font-sans font-medium text-slate-400 pr-5'>{item.number}</h3>
                            </div>
                            <h3 className='pt-5 font-sans font-medium'>{item.h3}</h3>
                            <p className='pt-2 text-slate-600'>{item.p}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}