import React from 'react';
import { useTheme } from './ThemeContext';


function Project() {
  const { darkMode } = useTheme();

  return (
    <div className='md:mt-20 container mx-auto max-w-[750px]'>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16'>

        <div className="w-full md:w-96 rounded-lg overflow-hidden">
          <div className="w-full h-64 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url("/Weya.png")` }}></div>

          <div className="mt-2">
            <div className={`flex justify-between py-2 px-3 rounded-2xl  transition-all duration-300  ${darkMode ? "bg-black text-white" : "bg-gray-200 text-black shadow-inner"}`}>
              <h2 className="text-lg font-bold">WEYA</h2>

              <a href="http://weya.uz/" target="_blank" rel="noopener noreferrer" className='flex justify-end'>
                <i className={`bi bi-arrow-up-right rounded-full px-2 py-1 transition-all duration-300 hover:text-teal-700 ${darkMode ? "bg-[#3a3a3d] shadow-inner" : "bg-white shadow-inner"}`}></i>
              </a>
            </div>

          </div>

        </div>

        <div className="w-full md:w-96 rounded-lg overflow-hidden">
          <div className="w-full h-64 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url("/Weyaa.png")` }}></div>

          <div className="mt-2">
            <div className={`flex justify-between py-2 px-3 rounded-2xl transition-all duration-300  ${darkMode ? "bg-black text-white" : "bg-gray-200 text-black shadow-inner"}`}>
              <h2 className="text-lg font-bold">WEYA+</h2>

              <a href="https://top-class.uz/education" target="_blank" rel="noopener noreferrer" className='flex justify-end'>
                <i className={`bi bi-arrow-up-right rounded-full px-2 py-1 transition-all duration-300 hover:text-teal-700 ${darkMode ? "bg-[#3a3a3d] shadow-inner" : "bg-white shadow-inner"}`}></i>
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Project;
