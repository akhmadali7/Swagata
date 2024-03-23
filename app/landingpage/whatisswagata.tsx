import { FaceIcon, ImageIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoPlaySkipForwardCircle } from "react-icons/io5";


import landingPageData from "../../public/landingpage.json"


export function Whatis() {
    return (



        <div className="py-6 md:py-20 px-3 sm:px-6 md:px-16 lg:px-20 xl:px-40 2xl:px-96" id="WhySwagata">
            <div className="flex flex-col md:flex-row justify-start gap-x-6">
                <p className="text-secondary font-medium font-sans md:w-2/12">{landingPageData.Why['text-secondary']}</p>
                <h2 className="text-5xl font-sans font-medium md:w-auto">{landingPageData.Why['text-primary']}</h2>
            </div>

            <div className="flex flex-row gap-x-6 py-10">
                <div className="hidden md:block w-1/2 divide-y-2 divide-solid">
                    <div className='h-1/2'></div>
                    <div className='h-1/2'></div>
                </div>
                <p className="w-full md:w-1/2 text-slate-600">{landingPageData.Why['text-tertiary']}</p>
            </div>
            {/*
            <MdOutlineAccessTimeFilled className='h-7 w-7' />
            <FaLock className='h-7 w-7' />
            <IoPlaySkipForwardCircle className='h-7 w-7' /> */}

            <div className='flex flex-col px-6 md:px-0 md:flex-row align-top justify-between gap-x-1'>

                {landingPageData.Why['3point'].map((item: { h3: string, p: string, icon: string }, index: number) => (
                    <a href="" key={index} className='w-full md:w-1/3 px-5 py-5 group hover:bg-secondary hover:text-white rounded-md'>

                        <div className='flex flex-row items-center justify-between pr-3'>

                            <IoPlaySkipForwardCircle className='w-7 h-7 text-secondary group-hover:text-white' />

                            <ArrowRightIcon className='w-7 h-7 group-hover:text-white text-secondary' />
                        </div>

                        <h3 className='pt-10 pb-3 font-sans font-normal text-lg'>{item.h3}</h3>
                        <p className='text-slate-600'>{item.p}</p>

                    </a>


                ))}
            </div>
        </div>
    )
}