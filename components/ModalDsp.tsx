import { modalState, movieState } from '../atoms/modalAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import MuiModal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { Movie } from '../typings';
import { Element, Genre } from '../typings';
import ReactPlayer from 'react-player/lazy';
import { FaPlay } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsHandThumbsUp } from 'react-icons/bs';
import { SlVolumeOff } from 'react-icons/sl';
import { IoVolumeHighOutline } from 'react-icons/io5';

function ModalDsp() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [preview, setPreview] = useState('');
  const [genres, setGenres] = useState<Genre[]>();
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    // if (!movie) return;

    async function fetchMovie() {
      if (!movie) return;
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&with_cast=10859|6968&append_to_response=videos`
      ).then((response) => response.json());
      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer'
        );
        console.log(data);
        setPreview(data.videos?.results[index]?.key);
        if (data?.genres) {
          setGenres(data.genres);
        }
      }
    }

    fetchMovie();
  }, [movie]);
  console.log(movie);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleMute = (e) => {
    e.preventDefault();
    e.ta;
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-4xl overflow-hidden overflow-y-scroll scrollbar-hide "
    >
      <>
        <button
          onClick={handleClose}
          className="modalBtn absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] text-white hover:bg-[#181818]"
        >
          <TfiClose className="h-4 w-4 text-white" />
        </button>
        <div className="relative pt-[56.25%]">
          <div className="absolute w-[560px] h-[56px] top-0 left-0 bg-black bg-gradient-to-bb" />
          <div className="pointer-events-none bg-gradient-to-bb">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${preview}`}
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: '0', left: '0' }}
              playing
              muted={muted}
              loop={true}
              controls={false}
              config={{ youtube: { playerVars: { disablekb: 1 } } }}
            />
          </div>

          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-7 w-7 text-black" />
                Play
              </button>
              <button className="modalBtn">
                <AiOutlinePlus className="h-7 w-7" />
              </button>
              <button className="modalBtn">
                <BsHandThumbsUp className="h-7 w-7" />
              </button>
            </div>
            <button className="modalBtn" onClick={() => setMuted(!muted)}>
              {muted ? (
                <SlVolumeOff className="h-7 w-7" />
              ) : (
                <IoVolumeHighOutline className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8 text-[16px]">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {movie!.vote_average * 10}% Match
              </p>
              <p className="font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="md:w-[70%]">{movie?.overview}</p>
              <div className=" flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres: </span>
                  {genres?.map((genre) => genre.name).join(', ')}
                </div>
                <div>
                  <span className="text-[gray]">Language: </span>
                  {movie?.original_language}
                </div>
                <div>
                  <span className="text-[gray]">Vote Count: </span>
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
}

export default ModalDsp;
