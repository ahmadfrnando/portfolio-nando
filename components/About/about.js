import { HiMiniAcademicCap } from "react-icons/hi2";
import Image from 'next/image';

export default function AboutSection() {
  return (
    <>
      <section id="about" className='md:pt-20 max-w-screen'>
        <div data-aos="zoom-in"  className="flex flex-col items-center justify-center space-y-10 md:px-0 px-4">
          <h1 className="md:text-5xl text-4xl font-black ">EDUCATION</h1>
          <ol className="items-center sm:flex">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full bg-merah ring-0 ring-orange sm-ring-8 shrink-0">
                  <HiMiniAcademicCap className="w-4 h-4 text-black" />
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SMK - TR Panca Budi Medan</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2020-2024</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Network Computer & Technology</p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full bg-merah ">
                <span class="animate-ping absolute flex items-center justify-center w-6 h-6 rounded-full bg-orange opacity-75"></span>
                  <HiMiniAcademicCap className="w-4 h-4 text-black" />
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Universitas Pembangunan Panca Budi Medan</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2020-2024</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Computer Sistem Strata 1 S.Kom</p>
              </div>
            </li>
          </ol>
        </div>
      <div data-aos="zoom-out">
        <div className="flex flex-col items-center justify-center px-4 md:px-40 mt-16 space-y-6">
          <h1 className="md:text-5xl text-4xl font-black ">EXPERIENCE WORK</h1>
          <div className="flex flex-col items-center bg-hitamkedua  rounded-xl shadow hover:bg-orange transition-all cursor-pointer md:flex-row md:max-w-xl">
            <img className="object-cover w-full h-96 md:h-auto md:w-48 rounded-t-xl md:rounded-l-xl" src={'./experience3.jpg'} width={500} height={500} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">PT. Sriwijaya Air Group</h5>
              <p className="mb-3 font-normal text-gray-300 ">
                I worked as a customer service assistant in this company at least 3 years. I had to responsible to serve the passanger at the airport will to onboard to the aircraft.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
