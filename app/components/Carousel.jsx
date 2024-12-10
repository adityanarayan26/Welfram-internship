
import { Heart } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from "react-icons/fi";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const Table = [
        {
            id: 1,
            image: "https://s3-alpha-sig.figma.com/img/544e/3029/c4c7cd0100e27f205801be034a1511b4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UObQ1jdNLafDs35tHDWdbnI2uzfOLubZe~VeQQgEzp-RQ9Sqoq-abOSfTxoGqZ3ilk1R8wmsBLVSD5XErWDgw7ydHqMRBfQjRaaVylP68~6VToFE8bTWnA1~rKuus~oKIvAKV4rfOE8C2VgPnbVGIs4~HEywB-OVRuMP1xKQM84QmxP71f49-CxMzchX8m4xhIugKSLQIajXCgCTH1Gn3fvzzdMqzlExIVky0Z4cHz5qfzEZN5pbt2KWVNeW7c3NDPNh0J92t9KRIk1ZSdLduweifPASbqnUSW~vdt-HmnjDmiuVg75wtE5T9VSWJc0H82waaMtDwq1EOkHWoFyn~g__"

        },
        {
            id: 2,
            image: "https://s3-alpha-sig.figma.com/img/544e/3029/c4c7cd0100e27f205801be034a1511b4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UObQ1jdNLafDs35tHDWdbnI2uzfOLubZe~VeQQgEzp-RQ9Sqoq-abOSfTxoGqZ3ilk1R8wmsBLVSD5XErWDgw7ydHqMRBfQjRaaVylP68~6VToFE8bTWnA1~rKuus~oKIvAKV4rfOE8C2VgPnbVGIs4~HEywB-OVRuMP1xKQM84QmxP71f49-CxMzchX8m4xhIugKSLQIajXCgCTH1Gn3fvzzdMqzlExIVky0Z4cHz5qfzEZN5pbt2KWVNeW7c3NDPNh0J92t9KRIk1ZSdLduweifPASbqnUSW~vdt-HmnjDmiuVg75wtE5T9VSWJc0H82waaMtDwq1EOkHWoFyn~g__"

        },
        {
            id: 3,
            image: "https://s3-alpha-sig.figma.com/img/544e/3029/c4c7cd0100e27f205801be034a1511b4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UObQ1jdNLafDs35tHDWdbnI2uzfOLubZe~VeQQgEzp-RQ9Sqoq-abOSfTxoGqZ3ilk1R8wmsBLVSD5XErWDgw7ydHqMRBfQjRaaVylP68~6VToFE8bTWnA1~rKuus~oKIvAKV4rfOE8C2VgPnbVGIs4~HEywB-OVRuMP1xKQM84QmxP71f49-CxMzchX8m4xhIugKSLQIajXCgCTH1Gn3fvzzdMqzlExIVky0Z4cHz5qfzEZN5pbt2KWVNeW7c3NDPNh0J92t9KRIk1ZSdLduweifPASbqnUSW~vdt-HmnjDmiuVg75wtE5T9VSWJc0H82waaMtDwq1EOkHWoFyn~g__"

        },
        {
            id: 4,
            image: "https://s3-alpha-sig.figma.com/img/544e/3029/c4c7cd0100e27f205801be034a1511b4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UObQ1jdNLafDs35tHDWdbnI2uzfOLubZe~VeQQgEzp-RQ9Sqoq-abOSfTxoGqZ3ilk1R8wmsBLVSD5XErWDgw7ydHqMRBfQjRaaVylP68~6VToFE8bTWnA1~rKuus~oKIvAKV4rfOE8C2VgPnbVGIs4~HEywB-OVRuMP1xKQM84QmxP71f49-CxMzchX8m4xhIugKSLQIajXCgCTH1Gn3fvzzdMqzlExIVky0Z4cHz5qfzEZN5pbt2KWVNeW7c3NDPNh0J92t9KRIk1ZSdLduweifPASbqnUSW~vdt-HmnjDmiuVg75wtE5T9VSWJc0H82waaMtDwq1EOkHWoFyn~g__"

        },

    ];

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === Table.length - 3 ? 0 : prevIndex + 1
        );
    }, [Table.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Table.length - 3 : prevIndex - 1
        );
    };





    return (
        <div className="w-full px-4 py-8 bg-[#FDFBFB]">
            <h1 className='font-medium text-4xl px-10 pb-5'>Articles similaires</h1>
            <div className="relative">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / 3)}%)`
                        }}
                    >
                        {Table.map((_, index) => (
                            <div
                                key={index}
                                className="w-1/4  flex-shrink-0 px-4"
                                role="article"

                            >
                                <div className=" w-full  flex flex-col gap-y-2 justify-center items-center rounded-lg  overflow-hidden h-full cursor-pointer  font-sans  py-3">
                                    <div className="bg-[#F9F7F5] shadow-sm rounded-md" >
                                        <div className="w-full flex justify-between px-5 pt-5">
                                            <Heart className="size-7"/>
                                            <h1 className="font-sans  bg-white rounded-full px-2 py-1">Art de la table</h1>
                                        </div>
                                        <img
                                            src="https://s3-alpha-sig.figma.com/img/544e/3029/c4c7cd0100e27f205801be034a1511b4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UObQ1jdNLafDs35tHDWdbnI2uzfOLubZe~VeQQgEzp-RQ9Sqoq-abOSfTxoGqZ3ilk1R8wmsBLVSD5XErWDgw7ydHqMRBfQjRaaVylP68~6VToFE8bTWnA1~rKuus~oKIvAKV4rfOE8C2VgPnbVGIs4~HEywB-OVRuMP1xKQM84QmxP71f49-CxMzchX8m4xhIugKSLQIajXCgCTH1Gn3fvzzdMqzlExIVky0Z4cHz5qfzEZN5pbt2KWVNeW7c3NDPNh0J92t9KRIk1ZSdLduweifPASbqnUSW~vdt-HmnjDmiuVg75wtE5T9VSWJc0H82waaMtDwq1EOkHWoFyn~g__"
                                            alt=''
                                            className=" object-cover object-center  mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="w-full flex  justify-between px-5 font-medium text-xl ">
                                        <h1 className="">Title</h1>
                                        <h1 className="" >0€</h1>
                                    </div>
                                    <div className="w-full flex  justify-between px-5">
                                        <h1 className="text-md font-medium text-zinc-400">0,35€/Pièce · RÉF : VABGN5</h1>
                                        <h1 className="rounded-xl  font-medium px-2 py-1 text-zinc-700 bg-[#F1F4F6]">20 pièces</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Previous slide"
                >
                    <FiChevronLeft className="w-6 h-6 text-gray-800" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Next slide"
                >
                    <FiChevronRight className="w-6 h-6 text-gray-800" />
                </button>

             
            </div>
        </div>
    );
};

export default Carousel;
