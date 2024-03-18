export function CTA() {
    return (
        <div className="px-96 py-40">
            <div className="flex flex-row gap-x-10">
                <div className="w-1/2 flex flex-col justify-around pr-3">
                    <div className="">
                        <p className="text-secondary font-medium font-sans ">Partner in protection</p>
                        <h2 className="text-5xl font-sans font-medium pt-5">Doing more for you and your clients</h2>
                    </div>
                    <div className="w-full divide-y-2 divide-dashed py-20">
                        <div className='h-1/2'></div>
                        <div className='h-1/2'></div>
                    </div>
                    <div>
                        <p>Agents and broker are vital to Swagata&rsquo;s success. To better assist you growth, we provide a variety of tools, resources and programming to help our agents and brokers succeed.</p>
                        <div className="flex flex-row items-center pt-10 gap-x-7 font-sans">
                            <a href="" className="py-[13px] px-7 bg-primary text-white rounded-full">Start free trial </a>
                            <a href="" className="py-3 px-7 bg-transparent text-black rounded-full border-solid border-[1px] border-black">Login to Swapartner Portal</a>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-auto bg-slate-500 rounded-xl"></div>
            </div>
        </div>
    )
}