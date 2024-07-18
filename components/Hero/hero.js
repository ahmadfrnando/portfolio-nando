import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import useDownloader from 'react-use-downloader';
export default function HeroSection() {
  const { download } = useDownloader();

  const fileUrl = '/resume.pdf';
  const filename = 'resume.pdf';
  return (
    <section id="home" className="px-6 max-w-screen">
      <div className="grid mt-6 grid-cols-1 lg:grid-cols-2 md:px-32 space-y-6 justify-center">
        <div className="flex items-center justify-center">
          <img data-aos="fade-right" src={'./pp.png'} alt="Nando" className='max-w-[550px]' />
          {/* <img src={'./pp.png'} alt="Nando" width={1500} height={1200} /> */}
        </div>
        <div className="flex items-center">
          <div data-aos="fade-left" className="space-y-4">
            <p className="font-extrabold text-md text-orange">Hello 🖐️ Im Nando </p>
            <h1 className="blink text-4xl md:text-5xl font-black">Web Programer</h1>
            <p className="text-lg">Developing innovative technology solutions that combine programming expertise with a deep understanding of user needs</p>
            <div className='flex flex-row gap-10'>
              <Link href="https://drive.google.com/file/d/1aG81ph10zCiClqhrM1a20_28V_xt-nHf/view?usp=sharing" target='_blank'>
                <button onClick={() => download(fileUrl, filename)} className="px-8 py-4 mt-10 font-extrabold text-white transition duration-300 ease-in-out delay-150 bg-orange hover:bg-orange/80 hover:-translate-y-1 hover:scale-110 hover:bg-merah ">
                  Download CV
                </button>
              </Link>
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmaddfernando1999@gmail.com&su=Subject%20Here&body=Body%20text%20here" target='_blank'>
                <button className="px-8 py-4 mt-10 font-extrabold text-white transition duration-300 ease-in-out delay-150 bg-orange hover:bg-orange/80 hover:-translate-y-1 hover:scale-110 hover:bg-merah ">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    //
  );
}
