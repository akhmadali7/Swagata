export function QuoteCTA() {
    return (

        <div className="px-96 py-32" id="Quote">
            <div className="flex flex-col md:flex-row justify-start gap-x-6">
                <p className="text-secondary font-medium font-sans md:w-2/12">Qet a quote</p>
                <h2 className="text-5xl font-sans font-medium md:w-auto">Customizable coverage options for business of all types and sizes</h2>
            </div>
            <div className="pt-[70px] flex flex-row items-center justify-between gap-x-3">
                <p className="w-4/12">Get world-class cover that rewards you with wealth while you&rsquo;re alive </p>
                <div className="w-3/12 divide-y-2 divide-dashed p-0">
                    <div className='h-1'></div>
                    <div className='h-1'></div>
                </div>
                <div className="flex flex-row items-center justify-end gap-x-4 font-sans w-auto">
                    <a href="" className="py-[9px] px-7 bg-primary text-white rounded-full">Get a quote</a>
                    <a href="" className="py-2 px-7 bg-transparent text-black rounded-full border-solid border-[1px] border-black">Let us contact you</a>
                </div>
            </div>
        </div>
    )
}