import { FaceIcon, ImageIcon, ArrowRightIcon } from '@radix-ui/react-icons'

export function Whatis() {
    return (

        <div className="py-10 px-96">
            <div className="flex flex-col md:flex-row justify-start gap-x-6">
                <p className="text-secondary font-medium font-sans md:w-2/12">Why choose Swagata</p>
                <h2 className="text-5xl font-sans font-medium md:w-auto">Built from the ground up for the internet generation.</h2>
            </div>
            <div className="flex flex-row gap-x-6 pt-10">
                <p className="w-1/2">--------------- </p>
                <p className="w-1/2">Swagata insurance is a digital-first insurer, using technology to make life insurance simpler, smarter and more rewarding.</p>
            </div>

            <div className='flex flex-row gap-x-6 pt-10'>
                <div className='w-1/3 px-5 py-5'>
                    <div className='flex flex-row items-center justify-between pr-3'>
                        <ImageIcon className='w-6 h-6 text-secondary' />
                        <ArrowRightIcon className='w-6 h-6 text-secondary ' />
                    </div>
                    <h3 className='pt-10 pb-3 font-sans font-normal text-lg'>Do everything online in no time. No more paperwork</h3>
                    <p>Get a quoted and covered in under 10 minutes online.</p>
                </div>
                <div className='w-1/3 bg-slate-100'>

                </div>
                <div className='w-1/3 bg-slate-200'>

                </div>
            </div>
        </div>
    )
}