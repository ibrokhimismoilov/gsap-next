import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { MOBILE_DEVISE_SIZE } from 'services/Constants/Constants';

import imageSlider1 from "assets/images/imageSlider1.png";
import imageSlider2 from "assets/images/imageSlider2.png";
import imageSlider3 from "assets/images/imageSlider3.png";
import imageSlider4 from "assets/images/imageSlider4.png";
import imageSlider5 from "assets/images/imageSlider5.png";
import imageSlider6 from "assets/images/imageSlider6.png";

const BannerSlider = () => {
    const [slides, setSlides] = useState(0)

    useEffect(() => {
        // let w = window.innerWidth;
        window.innerWidth < MOBILE_DEVISE_SIZE ? setSlides(1.2) : setSlides(1.5)
    }, [])

    return (
        <div className='relative bg-black'>
            <Swiper
                spaceBetween={50}
                slidesPerView={slides}
                grabCursor={true}
                className="w-full font-neutralFace relative h-[50vh] md:h-[65vh] mt-[40vh] md:mt-[33vh]"
            >
                <SwiperSlide className="flex justify-start flex-col w-fit">
                    <div className='h-[100%] flex items-end'>
                        <Image src={imageSlider1} alt="slide1" className="w-full md:w-[80%] h-[100%] object-contain" />
                    </div>

                    <div className='flex justify-center w-fit'>
                        <div className="flex flex-col justify-between h-full py-1 px-2 uppercase">
                            <span>Multiple prjects</span>
                            <span>(01)</span>
                        </div>
                        <div className="text-3xl font-bold md:text-5xl lg:text-8xl 2xl:text-9xl uppercase leading-none">
                            Heineken
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
                    <div className='h-[100%] flex items-end'>
                        <Image src={imageSlider2} alt="slide2" className="w-full md:w-[80%] h-[100%] object-contain" />
                    </div>

                    <div className='flex justify-center w-fit'>
                        <div className="flex flex-col justify-between h-full py-1 px-2 uppercase">
                            <p>
                                <span className='text-red-700'>G-star row</span>
                                <br /> 1:00
                            </p>
                            <span>(02)</span>
                        </div>
                        <div className="text-3xl font-bold md:text-5xl lg:text-8xl uppercase leading-none">
                            G-star row
                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide className="flex justify-start flex-col w-fit">
                    <div className='h-[100%] flex items-end'>
                        <Image src={imageSlider3} alt="slide3" className="w-full md:w-[80%] h-[100%] object-contain" />
                    </div>

                    <div className='flex justify-center w-fit'>
                        <div className="flex flex-col justify-between h-full py-1 px-2 uppercase">
                            <p>
                                <span className='text-red-700'>Skoda</span>
                                <br /> 2:01
                            </p>
                            <span>(03)</span>
                        </div>
                        <div className="text-3xl font-bold md:text-5xl lg:text-8xl 2xl:text-9xl uppercase leading-none">
                            Skoda
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
                    <div className='h-[100%] flex items-end'>
                        <Image src={imageSlider4} alt="slide4" className="w-full md:w-[60%] h-[100%] object-cover" />
                    </div>

                    <div className='flex justify-center w-fit'>
                        <div className="flex flex-col justify-between h-full py-1 px-2 uppercase">
                            <p>
                                <span className='text-red-700'>Publicis milan</span>
                                <br /> 1:10
                            </p>
                            <span>(04)</span>
                        </div>
                        <div className="text-3xl font-bold md:text-5xl lg:text-8xl 2xl:text-9xl uppercase leading-none">
                            Diesel
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-start flex-col w-fit">
                    <div className='h-[100%] flex items-end'>
                        <Image src={imageSlider5} alt="slide5" className="w-full md:w-[60%] h-[100%] object-cover" />
                    </div>

                    <div className='flex justify-center w-fit'>
                        <div className="flex flex-col justify-between h-full py-1 px-2 uppercase">
                            <p>
                                <span className='text-red-700'>Barbara bologna</span>
                                <br /> 14:17
                            </p>
                            <span>(05)</span>
                        </div>
                        <div className="text-3xl font-bold md:text-5xl lg:text-8xl 2xl:text-9xl uppercase leading-none">
                            Embodiment
                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
                    <div className='h-[100%] flex items-end'>
                        <Image src={imageSlider6} alt="slide6" className="w-full md:w-[60%] h-[100%] object-contain" />
                    </div>

                    <div className='flex justify-center w-fit'>
                        <div className="flex flex-col justify-between h-full py-1 px-2 uppercase">
                            <p>
                                <span className='text-red-700'>Publicis</span>
                                <br /> 1:17
                            </p>
                            <span>(06)</span>
                        </div>
                        <div className="text-3xl font-bold md:text-5xl lg:text-8xl 2xl:text-9xl uppercase leading-none">
                            Mercedes
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default BannerSlider