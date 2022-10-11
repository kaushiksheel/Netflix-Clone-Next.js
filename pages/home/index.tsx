import { useContext, useEffect, useState } from "react";

import {
  FETCH_ACTION_MOVIES,
  FETCH_ORIGINALS,
  IMAGE_LINK,
  POPULAR_MOVIE_API_LINK,
  FETCH_TOP_RATED,
  FETCH_COMEDY_MOVIES,
  FETCH_HORROR_MOVIES,
  FETCH_ROMANTIC_MOVIES,
  FETCH_DOCUMENTARIES,
  TV_SHOWS,
  FETCH_TRENDING,
} from "../../constants";
import { MovieI } from "../../interfaces/MovieI";
import { Row } from "../../components/Row";
import { Container } from "../../components/Container";
import { PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Navbar } from "../../components/Navbar";
import { request } from "../../api/request";
import { MovieInfoModal } from "../../components/MovieInfoModal";
import { VideoModal } from "../../components/VideoModal";
import { MovieContext } from "../../context/MovieContext";
import { MovieContextI } from "../../interfaces/ContextI";
import { LogoutModal } from "../../components/LogoutModal";

interface PropsI {
  tvShows: MovieI[];
  popularMovies: MovieI[];
  actionMovies: MovieI[];
  topRated: MovieI[];
  originals: MovieI[];
  comedyMovies: MovieI[];
  horrorMovies: MovieI[];
  romanticMovies: MovieI[];
  documentaries: MovieI[];
  trendings: MovieI[];
}

export default function Home({
  tvShows,
  popularMovies,
  actionMovies,
  topRated,
  originals,
  comedyMovies,
  horrorMovies,
  romanticMovies,
  documentaries,
  trendings,
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
        style={{
          backgroundImage: `url(${IMAGE_LINK}${
            poster && poster.backdrop_path
          })`,

          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Navbar open={() => setShowLogout(true)} />
        <Container>
          <div className="hero-wrap  h-full max-w-[50%] inline-block mt-[23rem]">
            <h1 className="text-white font-bold text-[3rem] md:text-[4rem]">
              {poster?.name || poster?.original_name}
            </h1>
            <p
              className="text-white
            text-[1.5rem] md:text-[1.7rem]"
            >
              {poster?.overview.substring(0, 250) + "..."}
            </p>
          </div>
          <div className="mt-6 flex items-center gap-7">
            <button
              onClick={() => {
                setTvShow(true);
                setMovieId(poster?.id as number);
                setShowVideoModal(true);
              }}
              className="bg-white flex w-fit gap-2 items-center  text-[1.5rem] md:text-[2rem] p-3 px-[1.5rem] rounded-lg"
            >
              <PlayIcon
                className="
              w-[1.5rem] h-[1.5rem]
              md:w-[2rem] md:h-[2rem]"
              />{" "}
              Play
            </button>
            <button className="bg-overlay flex w-fit gap-2 items-center md:text-[2rem] p-3 px-[1.5rem] rounded-lg text-[1.5rem] text-white">
              <InformationCircleIcon
                className="
              w-[1.5rem] h-[1.5rem]
              md:w-[2rem] md:h-[2rem] "
              />
              More Info
            </button>
          </div>
        </Container>
        {showLogout && <LogoutModal close={() => setShowLogout(false)} />}
      </header>
      <main className="my-10">
        <Row
          title="Trendings"
          movie={trendings && trendings}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />
        <Row
          title="Originals"
          movie={originals}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />
        <Row
          title="Popular"
          movie={popularMovies && popularMovies}
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
          movie={romanticMovies && romanticMovies}
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
  const res = await request.get(TV_SHOWS);
  const res2 = await request.get(POPULAR_MOVIE_API_LINK);
  const res3 = await request.get(FETCH_ACTION_MOVIES);
  const res4 = await request.get(FETCH_TOP_RATED);
  const res5 = await request.get(FETCH_ORIGINALS);
  const res6 = await request.get(FETCH_COMEDY_MOVIES);
  const res7 = await request.get(FETCH_HORROR_MOVIES);
  const res8 = await request.get(FETCH_ROMANTIC_MOVIES);
  const res9 = await request.get(FETCH_DOCUMENTARIES);
  const res10 = await request.get(FETCH_TRENDING);
  const data = await res.data;
  const data2 = await res2.data;
  const data3 = await res3.data;
  const data4 = await res4.data;
  const data5 = await res5.data;
  const data6 = await res6.data;
  const data7 = await res7.data;
  const data8 = await res8.data;
  const data9 = await res9.data;
  const data10 = await res10.data;
  const tvShows = data.results;
  const popularMovies = data2.results;
  const actionMovies = data3.results;
  const topRated = data4.results;
  const originals = data5.results;
  const comedyMovies = data6.results;
  const horrorMovies = data7.results;
  const romanticMovies = data8.results;
  const documentaries = data9.results;
  const trendings = data10.results;
  return {
    props: {
      tvShows,
      popularMovies,
      actionMovies,
      topRated,
      originals,
      comedyMovies,
      horrorMovies,
      romanticMovies,
      documentaries,
      trendings,
    },
  };
};
