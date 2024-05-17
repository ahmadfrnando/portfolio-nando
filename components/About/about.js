import { HiMiniAcademicCap } from 'react-icons/hi2';
import Image from 'next/image';

const experiences = [
  {
    id: 1,
    company: 'PT. Sriwijaya Air Group',
    date: '2018 - 2022',
    img: './experience.jpg',
    desc:'I worked as a customer service assistant in this company at least 3 years. I had to responsible to serve the passanger at the airport will to onboard to the aircraft.'
  },
  {
    id: 2,
    company: 'Freelancer Programmer',
    date: 'Now',
    img: './experience4.jpg',
    desc:'I worked as a freelancer to build the system web base. i lovely to do this, becouse it is my skill and passion'
  }
]
export default function AboutSection() {
  return (
    <>
      <section id="about" className="md:pt-20 max-w-screen">
        <div data-aos="zoom-in" className="flex flex-col items-center justify-center space-y-10 md:px-0 px-4">
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
                  <span className="animate-ping absolute flex items-center justify-center w-6 h-6 rounded-full bg-orange opacity-75"></span>
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
            <div className='grid md:grid-cols-2 gap-6'>
              {experiences.map((experience) => (
              <div key={experience.id} className="relative cursor-pointer hover:bg-orange/80 transition-all flex flex-col mt-6 text-white bg-hitamkedua shadow-md bg-clip-border rounded-xl w-96">
                <div className="relative object-cover mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={experience.img}
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{experience.company}</h5>
                  <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                    {experience.desc}
                  </p>
                </div>
              </div>
              ))}
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
