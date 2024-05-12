import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Carousel({ children: slides, autoslides = false, autoSlidesInterval = 3000 }) {
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
      if(!autoslides) return
      const slidesInterval = setInterval(next, autoSlidesInterval)
      return () => clearInterval(slidesInterval)
  }, [])
  return (
    <div className="overflow-hidden relative">
      <div className="flex space-x-6 transition-transform ease-out [&_img]:w-auto [&_img]:h-44 duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button onClick={prev}>
          <FaChevronCircleLeft size={40} className="text-orange hover:text-orange/50" />
        </button>
        <button onClick={next}>
          <FaChevronCircleRight size={40} className="text-orange hover:text-orange/50" />
        </button>
      </div>
    </div>
  );
}
