import { Movie } from '../typings';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import SliderItem from './SliderItem';
import { useRef } from 'react';
import { useState } from 'react';

interface Props {
  title: string;
  movies: Movie[];
}

function Slider({ title, movies }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isSlided, setIsSlided] = useState(false);

  const handleClick = (direction: string) => {
    setIsSlided(true);
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-0.5">
      <h3 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-xl">
        {title}
      </h3>
      <div className="group relative md:-ml-2">
        <BsChevronRight
          className="slider right-2 "
          onClick={() => handleClick('right')}
        />
        <div
          ref={sliderRef}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2 md:p-2"
        >
          {movies.map((movie) => (
            <SliderItem key={movie.id} movie={movie} />
          ))}
        </div>
        <BsChevronLeft
          className={`slider left-2 ${!isSlided && 'hidden'}`}
          onClick={() => handleClick('left')}
        />
      </div>
    </div>
  );
}

export default Slider;
