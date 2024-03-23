import Image from "next/image"
import { SunIcon } from '@radix-ui/react-icons'

import Image1 from "../../public/assets/landingpage/image1.jpg"

export function CTA() {
    return (
        <div className="py-5 md:py-32 px-3 sm:px-6 md:px-16 lg:px-20 xl:px-40 2xl:px-96">
            <div className="flex flex-col-reverse md:flex-row gap-x-10">
                <div className="w-full md:w-1/2 flex flex-col justify-around pr-3 pt-10 md:pt-0">
                    <div className="">
                        <p className="text-secondary font-medium font-sans ">Partner in protection</p>
                        <h2 className="text-5xl font-sans font-medium pt-5">Doing more for you and your clients</h2>
                    </div>
                    <div className="w-full divide-y-2 divide-dashed py-7 md:py-20">
                        <div className='h-1/2'></div>
                        <div className='h-1/2'></div>
                    </div>
                    <div>
                        <p className='text-slate-600'>Agents and broker are vital to Swagata&rsquo;s success. To better assist you growth, we provide a variety of tools, resources and programming to help our agents and brokers succeed.</p>
                        <div className="flex flex-row items-center pt-10 gap-x-7 font-sans text-center">
                            <a href="" className="py-[13px] px-7 bg-primary text-white rounded-full">Start free trial </a>
                            <a href="" className="py-3 px-7 bg-transparent text-black rounded-full border-solid border-[1px] border-black">Login to Swapartner Portal</a>
                        </div>
                    </div>
                </div>
                <div className="md:relative w-full md:w-1/2  md:h-auto  md:pb-0 ">
                    <Image src={Image1} alt="hero image 1" className="object-cover h-52  md:h-[500px]  w-full rounded-2xl" />
                    <div className="md:absolute bottom-5 left-5 xl:flex flex-col gap-y-3 pt-10 hidden ">
                        <div className="flex flex-row items-center gap-x-3 px-4 py-3 bg-slate-200 rounded-full w-max">
                            <SunIcon className="h-5 w-5" />
                            <div className="font-medium font-sans text-sm">Detailed Loss Information</div>
                        </div>
                        <div className="flex flex-row items-center gap-x-3 px-4 py-3 bg-slate-200 rounded-full w-max">
                            <SunIcon className="h-5 w-5" />
                            <div className="font-medium font-sans text-sm">Risk Engineering Resource Center</div>

                        </div>
                        <div className="flex flex-row items-center gap-x-3 px-4 py-3 bg-slate-200 rounded-full w-max">
                            <SunIcon className="h-5 w-5" />
                            <div className="font-medium font-sans text-sm ">Audit and Adjustment Managemer Portal</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}