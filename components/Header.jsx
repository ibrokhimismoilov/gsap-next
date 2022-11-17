import closeIcon from "assets/images/close-outline.svg";
import menuIcon from "assets/images/menu-outline.svg";
import React, { useRef, useCallback } from 'react';
import Image from "next/image";
import gsap from "gsap";


const Header = () => {
    const resMenuHeader = useRef(null)
    const resMenu = useRef(null)
    const resMenuItem1 = useRef(null)
    const resMenuItem2 = useRef(null)
    const resMenuItem3 = useRef(null)
    const resMenuItem4 = useRef(null)
    const menu_open = gsap.timeline({ paused: true, reversed: true });

    const menuOpen = useCallback(() => {
        menu_open.to(resMenu.current, {
            y: 0,
            zIndex: 100,
            duration: 0.2,
        });
        menu_open.from(
            [
                resMenuHeader.current,
                resMenuItem1.current,
                resMenuItem2.current,
                resMenuItem3.current,
                resMenuItem4.current,
            ],
            {
                duration: 0.5,
                stagger: {
                    amount: 0.4,
                },
                y: -50,
            }
        );

        menu_open.reversed() ? menu_open.play() : menu_open.reverse();
    }, [])

    return (
        <header>
            <div ref={resMenu} className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black -translate-y-[1200px]">
                <div ref={resMenuHeader} className="flex items-start justify-between w-[100%] h-fit py-[5px]">
                    <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
                        Ibrokhim <br /> Ismoilov
                    </div>
                    <div onClick={menuOpen} className="block md:hidden cursor-pointer mx-[5px]">
                        <Image src={closeIcon} className="w-9 object-contain invert" alt="close" />
                    </div>
                </div>
                <div className="mx-2 my-10 space-y-1">
                    <span className="overflow-hidden block">
                        <span ref={resMenuItem1} className="font-neutralFace block font-bold uppercase text-[30px]">
                            WORK
                        </span>
                    </span>
                    <span className="overflow-hidden block">
                        <span ref={resMenuItem2} className="font-neutralFace block font-bold uppercase text-[30px]">
                            ABOUT
                        </span>
                    </span>
                    <span className="overflow-hidden block">
                        <span ref={resMenuItem3} className="font-neutralFace block font-bold uppercase text-[30px]">
                            PUBLICATIONS
                        </span>
                    </span>
                    <span className="overflow-hidden block">
                        <span ref={resMenuItem4} className="font-neutralFace block font-bold uppercase text-[30px]">
                            OFFICE
                        </span>
                    </span>

                </div>
            </div>
            <div className="absolute bg-black top-0 py-[5px] font-neutralFace h-[20vh] flex justify-between flex-col w-[100%]">
                <div id="header" className='flex items-start justify-between w-[100%] h-fit'>
                    <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
                        Ibrokhim <br /> Ismoilov
                    </div>
                    <div className="mx-1 md:block uppercase hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
                        WORK
                    </div>
                    <div className="mx-1 md:block uppercase hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
                        ABOUT
                    </div>
                    <div className="mx-1 md:block uppercase hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
                        PUBLICATIONS
                    </div>
                    <div className="mx-1 md:block uppercase hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
                        OFFICE
                    </div>
                    <div className="block md:hidden cursor-pointer mx-[5px]">
                        <Image onClick={menuOpen} src={menuIcon} className="w-9 object-contain invert" alt="menu" />
                    </div>

                </div>

                <div className="flex items-start text-sm justify-between sm:justify-evenly px-5 w-[100%] h-fit uppercase">
                    <div>
                        An independent <br /> music agancy
                    </div>
                    <div>Uzbekistan</div>
                </div>
            </div>
        </header>
    )
}

export default Header;