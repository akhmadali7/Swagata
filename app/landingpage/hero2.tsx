import Images from "next/image"
import image1 from "../../public/assets/landingpage/image1.jpg"
import image2 from "../../public/assets/landingpage/image2.jpg"

export function Hero2() {
    return (
        <div className="pb-">
            <div className="bg-tertiary px-96 ">
                <div className="relative flex flex-row  align-top gap-x-6 pb-10">

                    <div className="bg-white rounded-xl w-1/2">
                        <div className="py-5 px-5">
                            <h1 className="font-medium pb-1 font-sans">Individuals and Family</h1>
                            <p className="text-slate-800">If you die, we give you a proper send-off and help your family keep living their best life</p>
                        </div>
                        <div className="bg-slate-500 h-[300px] rounded-b-xl">

                        </div>
                        {/* <Images src={image2} alt="" className="object-cover rounded-b-lg max-w-[684px] max-h-[400px]" /> */}
                    </div>
                    <div className="bg-white rounded-xl w-1/2">
                        <div className="py-5 px-5">
                            <h1 className="font-medium pb-1 font-sans">Individuals and Familiy</h1>
                            <p className="text-slate-800">If you die, we give you a proper send-off and help your family keep living their best life</p>
                        </div>
                        <div className="bg-slate-500 h-[300px] rounded-b-xl">

                        </div>
                        {/* <Images src={image2} alt="" className="object-cover rounded-b-lg max-w-[684px] max-h-[400px]" /> */}
                    </div>


                </div>
            </div>

            {/*  */}
            <div className="flex flex-col items-center md:flex-row px-1 md:px-96 gap-x-2 py-10">
                <h2 className="md:w-1/3 font-medium text-2xl font-sans pr-4">Simpler, smarter, more rewarding cover</h2>
                <div className="md:w-1/3">
                    <h3 className="font-medium text-base font-sans">We help make sure you have no gaps</h3>
                    <p className="text-slate-700">With Swagata, you get comprehensive, not patchwork protection</p>
                </div>
                <div className="md:w-1/3">
                    <h3 className="font-medium text-base font-sans">We look out for you</h3>
                    <p className="text-slate-700">You get a protective partner to help prevent issues from happening in the first place </p>
                </div>

            </div>

        </div>
    )
}