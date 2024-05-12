import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import Image from 'next/image';

import { EffectCoverflow, Navigation } from 'swiper/modules';
import Carousel from './Carousel';

export default function GallerySection() {
  // const galleries = [
  //   { id: 1, img: '/gallery/gallery1.jpg' },
  //   { id: 2, img: '/gallery/gallery2.jpg' },
  //   { id: 3, img: '/gallery/gallery3.jpg' },
  //   { id: 4, img: '/gallery/gallery4.jpg' },
  //   { id: 5, img: '/gallery/gallery5.jpg' },
  //   { id: 6, img: '/gallery/gallery6.jpg' },
  //   { id: 7, img: '/gallery/gallery7.jpg' },
  //   { id: 8, img: '/gallery/gallery8.jpg' },
  //   { id: 9, img: '/gallery/gallery9.jpg' },
  //   { id: 10, img: '/gallery/gallery10.jpg' },
  //   { id: 11, img: '/gallery/gallery11.jpg' },
  //   { id: 12, img: '/gallery/gallery12.jpg' },
  //   { id: 13, img: '/gallery/gallery13.jpg' },
  //   { id: 14, img: '/gallery/gallery14.jpg' },
  //   { id: 15, img: '/gallery/gallery15.jpg' },
  //   { id: 16, img: '/gallery/gallery16.jpg' },
  // ];
  const slides = [
    './gallery/gallery1.jpg',
    './gallery/gallery2.jpg',
    './gallery/gallery3.jpg',
    './gallery/gallery4.jpg',
    './gallery/gallery5.jpg',
    './gallery/gallery6.jpg',
    './gallery/gallery7.jpg',
    './gallery/gallery8.jpg',
    './gallery/gallery9.jpg',
    './gallery/gallery10.jpg',
    './gallery/gallery11.jpg',
    './gallery/gallery12.jpg',
    './gallery/gallery13.jpg',
    './gallery/gallery14.jpg',
    './gallery/gallery15.jpg',
    './gallery/gallery16.jpg',
  ]
  return (
    <section id="gallery" className='max-w-screen'>
      <div className="flex flex-col items-center justify-center py-16 mt-4 space-y-12 px-28" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <h1 className="text-5xl font-black">Gallery</h1>
        <div className="items-center justify-center">
          <Carousel autoslides="true" autoSlidesInterval={3000}>
            {slides.map((s) => (
              <Image key={s} src={s} alt='gallery' width={300} height={300}/>
            ))}
          </Carousel>
          {/* <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
              {galleries.map((gallery) => (
                <li key={gallery.id}>
                  <Image src={gallery.img} alt="Facebook" width={300} height={300} />
                </li>
              ))}
            </ul>
            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
              {galleries.map((gallery) => (
                <li key={gallery.id}>
                  <Image src={gallery.img} alt="Facebook" width={300} height={300} />
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        {/* <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={true}
              modules={[EffectCoverflow, Navigation]}
            >
              {galleries.map((gallery) => (
                <SwiperSlide key={gallery.id}>
                  <div className="p-2 bg-center bg-no-repeat bg-contain " style={{ backgroundImage: `url(${gallery.img})` }}>
                    <div className="w-16 h-96"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
        {/* </div> */}
      </div>
    </section>
  );
}
