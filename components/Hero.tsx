import Image from 'next/image';
import React from 'react';
import { useState, useEffect } from 'react';
import { Movie } from '../typings';
import { FaPlay } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { baseUrl } from '../constants/movie';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';

interface Props {
  netflixOriginals: Movie[];
}

function Hero({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  return (
    <div className="flex flex-col space-y-2 pt-52 pb-8 md:space-y-4 md:h-[65vh] md:justify-end md:pt-24 md:pb-1">
      <div className="absolute top-0 left-0 -z-10 h-[100vh] w-screen">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          alt={'Netflix Poster'}
          className="fill"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold">
        {movie?.title || movie?.original_name || movie?.name}
      </h1>
      <p className="max-w-md text-sm font-light text-shadow-md md:text-max-w-lg md:text-[0.95rem]">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="heroButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-6 md:w-6" />
          Play
        </button>
        <button
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
          className="heroButton bg-[gray]/70"
        >
          <FiInfo className="h-5 w-5 text-white md:h-6 md:w-6" />
          More Info
        </button>
      </div>
    </div>
  );
}

export default Hero;
