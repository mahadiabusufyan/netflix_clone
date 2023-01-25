import { Movie } from '../typings';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';

interface Props {
  movie: Movie;
}

function SliderItem({ movie }: Props) {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);
  return (
    <div className="relative h-20 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-32 md:min-w-[230px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie?.poster_path || movie?.backdrop_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt=""
        onClick={() => {
          setCurrentMovie(movie);
          setShowModal(true);
        }}
      />
    </div>
  );
}

export default SliderItem;
