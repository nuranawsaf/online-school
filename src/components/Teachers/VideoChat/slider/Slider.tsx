import React, { useRef, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { GrNext, GrPrevious } from 'react-icons/gr';

import { sliderdata } from './slider-data';

function Slider() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      console.log('hello ', clientWidth, scrollLeft);
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0.5 md:space-y-2 sb  w-[44.5rem] m-5">
      <div className="group relative md:-ml-2  ">
        <GrPrevious
          className={`absolute top-0 opacity-0  bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer  transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />

        <div
          className="flex items-center   space-x-2.5 md:p-2 overflow-auto  scroll-none"
          ref={rowRef}
        >
          {sliderdata.map((movie) => (
            <div className="relative   min-w-[180px] cursor-pointer transition duration-200 ease-out h-40 md:min-w-[260px] md:hover:scale-105">
              <img className="h-full" src={movie.img} alt="" />
            </div>
          ))}
        </div>

        <GrNext
          className="absolute   top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
}

export default Slider;
