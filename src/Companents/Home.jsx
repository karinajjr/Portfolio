import React from 'react'
import Me from "../../public/Me.jpeg"
import css from "../../public/icon/css.png"
import figma from "../../public/icon/figma.png"
import html from "../../public/icon/html.png"
import js from "../../public/icon/js.png"
import react from "../../public/icon/react.png"
import tailwind from "../../public/icon/tailwind.png"
import vite from "../../public/icon/vite.png"
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";



function Home() {
      const { t, i18n } = useTranslation();
    return (
        <>

            <div className='md:mt-20 container mx-auto max-w-[750px]'>
                <div className='font-semibold cursor-text text-4xl py-2 font-serif animate-pulse animate-infinite animate-ease-in-out'>
                {t("Hello")} <span className="text-teal-700">{t("Name")}</span>
                </div>

                <div> <h1 className='py-8 font-serif text-xl'> {t("Header")} </h1> </div>

                <div className="flex justify-center items-center  ">
                    <img src={Me} className=" rounded-2xl w-96 " alt="" />
                </div>

                <div className='py-4 space-y-4 font-serif text-xl'>
                    <p>{t("body")}</p>

                    <div>
                        <h1 className='text-2xl animate-pulse animate-infinite animate-ease-in-out '> {t("skils")}    </h1>

                        <div className='flex gap-1 mt-2'>
                            <img src={html} alt="html" className='w-10 h-10' />
                            <img src={css} alt="css" className='w-10 h-10' />
                            <img src={js} alt="js" className='w-10 h-10' />
                            <img src={react} alt="react" className='w-10 h-10' />
                            <img src={tailwind} alt="tailwind" className='w-10 h-10' />
                            <img src={vite} alt="vite" className='w-9 h-9 ' />
                            <img src={figma} alt="figma" className='w-10 h-9 mt-1' />
                        </div>
                    </div>

                    <p className='text-xl '>{t("Live")}</p>

                    <p className='text-xl'>
                        <NavLink to="/contact" className="underline decoration-teal-700 hover:text-teal-700">
                        {t("Me")}
                        </NavLink> {t("always")}
                    </p>

                </div>

            </div>


        </>
    )
}

export default Home