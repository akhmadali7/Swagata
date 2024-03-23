import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'

export function Feature() {
    return (
        <div className="py-20 px-96 bg-[#F7F7F7] bg-opacity-80">
            <div className="flex flex-col md:flex-row justify-start gap-x-6">
                <p className="text-secondary font-medium font-sans md:w-2/12">Swagata featured products</p>
                <h2 className="text-5xl font-sans font-medium md:w-auto">Raise your expectation of what your insurer should deliver.</h2>
            </div>
            <div className="pt-8 flex flex-row justify-between items-end">
                <p className="w-2/4">We think insurance should be more about living. So we&rsquo;ve designed our products to protect and create wealth while you&rsquo;re alive</p>
                <div className="w-1/4 flex flex-row gap-x-3 justify-center items-end">
                    <h3 className="font-medium font-sans text-2xl">19<span className="font-base text-lg">K+</span></h3>
                    <p>Client trust with us</p>
                </div>
                <div className="w-1/4 flex flex-row gap-x-3 justify-center items-end">
                    <h3 className="font-medium font-sans text-2xl">13<span className="font-base text-lg">K+</span></h3>
                    <p>Business protected</p>
                </div>
            </div>


            {/* Simplify later using defined variable */}
            <div className='pt-16 flex flex-row gap-x-6'>
                <div className='md:w-1/3'>
                    <div className='flex flex-row justify-between'>
                        <FaceIcon className='w-7 h-7 text-secondary' />
                        <h3 className='text-xl font-sans font-medium text-slate-400 pr-5'>01</h3>
                    </div>
                    <h3 className='pt-5 font-sans font-medium'>Auto Insurance</h3>
                    <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className='md:w-1/3'>
                    <div className='flex flex-row justify-between'>
                        <FaceIcon className='w-7 h-7 text-secondary' />
                        <h3 className='text-xl font-sans font-medium text-slate-400 pr-5'>01</h3>
                    </div>
                    <h3 className='pt-5 font-sans font-medium'>Auto Insurance</h3>
                    <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className='md:w-1/3'>
                    <div className='flex flex-row justify-between'>
                        <FaceIcon className='w-7 h-7 text-secondary' />
                        <h3 className='text-xl font-sans font-medium text-slate-400 pr-5'>01</h3>
                    </div>
                    <h3 className='pt-5 font-sans font-medium'>Auto Insurance</h3>
                    <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
            <div className='pt-10 flex flex-row gap-x-6'>
                <div className='md:w-1/3'>
                    <div className='flex flex-row justify-between'>
                        <FaceIcon className='w-7 h-7 text-secondary' />
                        <h3 className='text-xl font-sans font-medium text-slate-400 pr-5'>01</h3>
                    </div>
                    <h3 className='pt-5 font-sans font-medium'>Auto Insurance</h3>
                    <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className='md:w-1/3'>
                    <div className='flex flex-row justify-between'>
                        <FaceIcon className='w-7 h-7 text-secondary' />
                        <h3 className='text-xl font-sans font-medium text-slate-400 pr-5'>01</h3>
                    </div>
                    <h3 className='pt-5 font-sans font-medium'>Auto Insurance</h3>
                    <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className='md:w-1/3'>
                    <div className='flex flex-row justify-between'>
                        <FaceIcon className='w-7 h-7 text-secondary' />
                        <h3 className='text-xl font-sans font-medium text-slate-400 pr-5'>01</h3>
                    </div>
                    <h3 className='pt-5 font-sans font-medium'>Auto Insurance</h3>
                    <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
        </div>
    )
}