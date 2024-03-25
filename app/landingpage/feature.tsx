import React from 'react';

import { MdHealthAndSafety, MdCleanHands } from "react-icons/md"; //1
import { GiGoldBar } from "react-icons/gi";
import { HiKey, HiLightningBolt } from "react-icons/hi";
import { HiMiniBuildingLibrary } from "react-icons/hi2";


//kalo bisa store value icon ke json sebenarnya ga perlu deklarasi dan assign value disini, skrg jadinya ga terlalu dynamic
const features = [
    {
        icon: MdHealthAndSafety, //gatau cara nyimpen ini di json
        h3: "Auto insurance",
        p: "Your safety is what drives us to provide an exceptional standard of service.",
        number: "01"
    },
    {
        icon: GiGoldBar,
        h3: "Valuables",
        p: "Protect your valuables so their stories continue for generations to come.",
        number: "02"
    },
    {
        icon: HiKey,
        h3: "Liability",
        p: "Extra protection for you and the people you care about.",
        number: "03"
    },
    {
        icon: HiLightningBolt,
        h3: "Risk Engineering Services",
        p: "The in-house Risk Engineering Services team provides customized services.",
        number: "04"
    },
    {
        icon: HiMiniBuildingLibrary,
        h3: "Construction Safety",
        p: "Your safety is what drives us to provide exceptional standard of service.",
        number: "05"
    },
    {
        icon: MdCleanHands,
        h3: "Industrial Hygiene Analysis",
        p: "We help our clients customized Industrial Hygiene services to meet each of their unique needs.",
        number: "06"
    }
];

export default features;

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
            {/* {features.map(({ icon: IconComponent, h3 }, index) => (
                <div key={index}>
                    <IconComponent className='w-7 h-7 text-secondary' />
                    <p>{h3}</p>
                </div>
            ))} */}

            <div>
                <div className='pt-16 grid grid-row-1 md:grid-cols-3 gap-x-16 gap-y-16 px-10 sm:px-0 '>
                    {features.map(({ icon: IconComponent, h3, p, number }, index) => (

                        <div key={index} className=''>
                            <div className='flex flex-row justify-between '>
                                <IconComponent className='w-7 h-7 text-secondary' />
                                <h3 className='text-xl font-sans font-medium text-slate-400 pr-5'>{number}</h3>
                            </div>
                            <h3 className='pt-5 font-sans font-medium'>{h3}</h3>
                            <p className='pt-2 text-slate-600'>{p}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}