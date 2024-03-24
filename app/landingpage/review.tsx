import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import Image1 from "../../public/assets/landingpage/image1.jpg"




export function Review() {

    const review = [
        {
            name: "Franko Baresi",
            origin: "Sacramento, CA",
            photo: Image1,
            review: "They do it with integrity, and they do it with honesty... That`s why I've been Swagata's customer for 15 years to this day."
        },
        {
            name: 'Michael Frank',
            origin: "Singapore",
            photo: Image1, // Provide actual image component or URL
            review: "I've been amazed by the professionalism and dedication of the Swagata team. Their attention to detail and commitment to customer satisfaction are truly commendable."
        },
        {
            name: "Alice Johnson",
            origin: "London, UK",
            photo: Image1, // Provide actual image component or URL
            review: "Swagata has exceeded my expectations in every aspect. From their friendly customer service to their top-notch products, I couldn't be more satisfied."
        },
        {
            name: "Carlos Ramirez",
            origin: "Madrid, Spain",
            photo: Image1, // Provide actual image component or URL
            review: "Estoy muy impresionado por la calidad de los productos y la atención al cliente de Swagata. ¡Definitivamente los recomendaré a mis amigos y familiares!"
        }


    ];





    return (
        <div className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-40 2xl:px-96 divide-y-4 divide-dashed  bg-[#F7F7F7] bg-opacity-80">
            <div>
            </div>
            <div className="py-14">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="font-medium font-sans text-xl">Word From Our Clients</h2>
                    <p className="text-secondary font-sans font-bold">01<span className="text-slate-400">  &nbsp;&nbsp;/&nbsp;&nbsp;04</span></p>
                </div>

                {/* Review start */}
                <div>
                    <div className="flex flex-row justify-start gap-x-6 py-10   ">
                        <FaQuoteLeft className="hidden md:block h-10 w-10  fill-secondary " />
                        <p className="text-3xl font-sans">{review[0].review}</p>
                        <FaQuoteRight className="hidden md:block h-10 w-10  fill-secondary" />
                    </div>
                    <div className="flex flex-row items-center gap-x-6 md:pl-12">
                        <div className=""><Image src={review[0].photo} alt="" className="h-12 w-12 object-cover rounded-full" /></div>
                        <div className="flex flex-col">
                            <h4 className="font-medium">{review[0].name}</h4>
                            <p className="">{review[0].origin}</p>
                        </div>
                    </div>
                </div>
                {/* Review End */}

            </div>
            <div>
            </div>
        </div>

    )



}