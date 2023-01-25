import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import requests from '../utils/requests';
import { Movie } from '../typings';
import { useRecoilValue } from 'recoil';
import useAuth from '../hooks/useAuth';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import { modalState, movieState } from '../atoms/modalAtom';
import Modal from '../components/ModalDsp';

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {
  const { loading } = useAuth();
  const showModal = useRecoilValue(modalState);
  const subscription = false;
  if (loading || subscription == null) return null;

  if (!subscription) return <div>Plans</div>;

  return (
    <div className="relative bg-gradient-to-bb from-gray-900/10 to-[#010511] lg:h-[140vh] h-screen">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="relative pl-4 pb-24 lg:space-y-18 lg:pl-16">
        <Hero netflixOriginals={netflixOriginals} />
        <section className="md:space-y-16 mt-10 lg:mt-32 space-y-0">
          <Slider title="Trending Now" movies={trendingNow} />
          <Slider title="Top Rated" movies={topRated} />
          <Slider title="Action Thrillers" movies={actionMovies} />
          {/* My List */}
          {/* {list.length > 0 && <Slider title="My List" movies={list} />} */}
          <Slider title="Comedies" movies={comedyMovies} />
          <Slider title="Scary Movies" movies={horrorMovies} />
          <Slider title="Romance Movies" movies={romanceMovies} />
          <Slider title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
};
export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
