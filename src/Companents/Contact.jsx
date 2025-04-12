import React, { useState } from 'react';
import Logo from "../../public/Logo.png";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(null), 1000);
    });
  };

  return (
    <div className=' md:mt-20 container mx-auto max-w-[750px]'>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-2xl md:text-4xl text-center font-bold animate-pulse animate-infinite animate-ease-in-out'>{t("write")}</h3>
        <div className='flex items-center mt-2 md:mt-8'>
          <a
            href='https://mail.google.com/mail/?view=cm&fs=1&to=jursinovazerda@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='underline decoration-teal-700 hover:text-teal-700 text-xl md:text-3xl font-bold'
          >
            jursinovazerda@gmail.com
          </a>
        </div>


        <div className='flex items-center  mt-3'>
          <span className='text-xl md:text-2xl font-bold'>+998 99 1449406</span>
          <button onClick={() => copyToClipboard('+998 99 1449406')} className='ml-2 hover:text-teal-700 '>
            {copied === '+998 99 1449406' ? <i className='bi bi-check-lg text-teal-700 text-base'></i> : <i className='bi bi-copy text-base'></i>}
          </button>
        </div>
      </div>

      <div className='flex flex-wrap justify-between mt-47 md:mt-80 '>
        <div><img src={Logo} alt="Logo" className="w-9 mb-1" /></div>

        <div className='mt-3 flex gap-2'>
          <a href="https://github.com/karinajjr" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github  hover:text-teal-700"></i>
          </a>
          <a href="https://linkedin.com/in/zerda-jursinova-5935a2296" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin  hover:text-teal-700"></i>
          </a>
          <a href="https://t.me/zzeerda" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-telegram hover:text-teal-700"></i>
          </a>
          <a href="https://www.instagram.com/jur.zerda/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram hover:text-teal-700"></i>
          </a>
        </div>
      </div>

      <hr className='border-t border-t-white dark:border-t-gray-400' />

      <div className='flex justify-center p-3'>
        <i className="bi bi-c-circle text-gray-400 dark:text-gray-500  mr-1"></i>
        <h1 className='text-gray-400 dark:text-gray-500 '>2025 Jursinova Zerda</h1>
      </div>
    </div>
  );
}

export default Contact;
