import Images from "next/image"
import image1 from "../../public/assets/landingpage/image1.jpg"
import image2 from "../../public/assets/landingpage/image2.jpg"
import landingPageData from "../../public/landingpage.json"


const { plan } = landingPageData;
const individualPlan = plan.find(p => p.id === 1);
const businessPlan = plan.find(p => p.id === 2);

export function Hero2() {
    return (
        <div className="">
            <div className="bg-tertiary">
                <div className=" flex flex-col gap-y-32 sm:flex-row items-center align-top gap-x-6 pb-10 px-3 sm:px-6 md:px-16 lg:px-20 xl:px-40 2xl:px-96">

                    <div className="bg-white rounded-xl w-full md:w-1/2 h-[300px] ">
                        <div className="py-5 px-5">
                            <h1 className="font-medium pb-1 font-sans">{individualPlan?.name}</h1>
                            <p className="text-slate-700">{individualPlan?.description}</p>
                        </div>
                        <div className="bg-slate-500 h-[300px] rounded-b-xl">

                        </div>
                        {/* <Images src={image2} alt="" className="object-cover rounded-b-lg max-w-full max-h-full" /> */}
                    </div>

                    <div className="bg-white rounded-xl w-full md:w-1/2 h-[300px]">
                        <div className="py-5 px-5">
                            <h1 className="font-medium pb-1 font-sans">{businessPlan?.name}</h1>
                            <p className="text-slate-700">{businessPlan?.description}</p>
                        </div>
                        <div className="bg-slate-500 h-[300px] rounded-b-xl">
                        </div>
                        {/* <Images src={image1} alt="" className="object-cover rounded-b-lg max-w-full max-h-[300px]" /> */}
                    </div>
                </div>
            </div>


            <div className="flex flex-col  md:flex-row  gap-x-2 gap-y-3 py-10 pt-[150px] px-3 sm:px-6 md:px-16 lg:px-20 xl:px-40 2xl:px-96">
                <h2 className="md:w-1/3 font-medium text-2xl font-sans pr-4">{landingPageData.Hero2.header1}</h2>
                <div className="md:w-1/3">
                    <h3 className="font-medium text-base font-sans pb-2">{landingPageData.Hero2.keypoint1.keypoint}</h3>
                    <p className="text-slate-700">{landingPageData.Hero2.keypoint1.description}</p>
                </div>
                <div className="md:w-1/3">
                    <h3 className="font-medium text-base font-sans pb-2">{landingPageData.Hero2.keypoint2.keypoint}</h3>
                    <p className="text-slate-700">{landingPageData.Hero2.keypoint2.description}</p>
                </div>
            </div>

        </div>
    )
}