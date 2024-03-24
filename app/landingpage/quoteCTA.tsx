export function QuoteCTA() {
    return (

        <div className="py-32 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-40 2xl:px-96" id="Quote">
            <div className="flex flex-col md:flex-row justify-start gap-x-6">
                <p className="text-secondary font-medium font-sans md:w-2/12">Qet a quote</p>
                <h2 className="text-3xl sm:text-5xl font-sans font-medium md:w-auto">Customizable coverage options for business of all types and sizes.</h2>
            </div>
            <div className="pt-6 md:pt-[70px] flex flex-col sm:flex-row items-center justify-between gap-x-2 gap-y-6">
                <p className="w-full sm:w-4/12">Get world-class cover that rewards you with wealth while you&rsquo;re alive </p>
                <div className="hidden lg:block w-full lg:w-1/12 divide-y-2 divide-dashed p-0">
                    <div className='h-1'></div>
                    <div className='h-1'></div>
                </div>
                <div className="flex flex-row items-center justify-center sm:justify-end gap-x-4 gap-y-6 font-sans w-auto">
                    <a href="" className="w-max py-[9px] px-3 md:px-7 bg-primary text-white rounded-full text-center">Get a quote</a>
                    <a href="" className="w-max py-2 px-3 md:px-7 bg-transparent text-black rounded-full border-solid border-[1px] border-black text-center">Let us contact you</a>
                </div>
            </div>
        </div>
    )
}