import { useContext, useEffect, useState } from "react";
import * as Fetch from "../../constants";
import { MovieI } from "../../interfaces/MovieI";
import { Row } from "../../components/Row";
import { Navbar } from "../../components/Navbar";
import { request } from "../../api/request";
import { MovieInfoModal } from "../../components/MovieInfoModal";
import { VideoModal } from "../../components/VideoModal";
import { MovieContext } from "../../context/MovieContext";
import { MovieContextI } from "../../interfaces/ContextI";
import { LogoutModal } from "../../components/LogoutModal";
import { Banner } from "../../components/Banner";

interface PropsI {
  tvShows: MovieI[];
  popularMovies: MovieI[];
  actionMovies: MovieI[];
  topRated: MovieI[];
  netflixOriginals: MovieI[];
  comedyMovies: MovieI[];
  horrorMovies: MovieI[];
  romanceMovies: MovieI[];
  documentaries: MovieI[];
  trendingNow: MovieI[];
}

export default function Home({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
  tvShows,
}: PropsI) {
  const { showVideoModal, setShowVideoModal, setMovieId, setTvShow } =
    useContext<MovieContextI>(MovieContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<number>();
  const [showLogout, setShowLogout] = useState(false);
  const [poster, setPoster] = useState<MovieI>();

  useEffect(() => {
    const poster =
      tvShows &&
      (tvShows[Math.floor(Math.random() * tvShows?.length)] as MovieI);

    setPoster(poster);
  }, [tvShows?.length, tvShows]);

  return (
    <>
      <header
        className="relative hero w-[100vw] min-h-[100vh]
   "
      >
        <Navbar open={() => setShowLogout(true)} />
        <Banner
          poster={poster}
          setMovieId={setMovieId}
          setTvShow={setTvShow}
          setShowVideoModal={setShowVideoModal}
        />
        {showLogout && <LogoutModal close={() => setShowLogout(false)} />}
      </header>
      <main className="my-10">
        <Row
          title="Trendings"
          movie={trendingNow && trendingNow}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />
        <Row
          title="Originals"
          movie={netflixOriginals}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />

        <Row
          title="Action"
          movie={actionMovies && actionMovies}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />
        <Row
          title="Top Rated"
          movie={topRated && topRated}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />
        <Row
          title="Comedy"
          movie={comedyMovies && comedyMovies}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />
        <Row
          title="Horror"
          movie={horrorMovies && horrorMovies}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />
        <Row
          title="Romantic"
          movie={romanceMovies && romanceMovies}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />
        <Row
          title="Documentaries"
          movie={documentaries && documentaries}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />
      </main>
      {showModal && (
        <MovieInfoModal
          closeModal={setShowModal}
          movieId={selectedMovieId as number}
          setSelectedMovieId={setSelectedMovieId}
        />
      )}
      {showVideoModal && <VideoModal />}
    </>
  );
}

export const getServerSideProps = async () => {
  const {
    FETCH_ACTION_MOVIES,
    FETCH_COMEDY_MOVIES,
    FETCH_DOCUMENTARIES,
    FETCH_HORROR_MOVIES,
    FETCH_ORIGINALS,
    FETCH_ROMANTIC_MOVIES,
    FETCH_TOP_RATED,
    FETCH_TRENDING,
    TV_SHOWS,
  } = Fetch;
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
    tvShows,
  ] = await Promise.all([
    request.get(FETCH_ORIGINALS).then((res) => res.data),
    request.get(FETCH_TRENDING).then((res) => res.data),
    request.get(FETCH_TOP_RATED).then((res) => res.data),
    request.get(FETCH_ACTION_MOVIES).then((res) => res.data),
    request.get(FETCH_COMEDY_MOVIES).then((res) => res.data),
    request.get(FETCH_HORROR_MOVIES).then((res) => res.data),
    request.get(FETCH_ROMANTIC_MOVIES).then((res) => res.data),
    request.get(FETCH_DOCUMENTARIES).then((res) => res.data),
    request.get(TV_SHOWS).then((res) => res.data),
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
      tvShows: tvShows.results,
    },
  };
};
