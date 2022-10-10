import axios from "axios";
import { useContext, useEffect, useState } from "react";

import {
  FETCH_ACTION_MOVIES,
  FETCH_ORIGINALS,
  IMAGE_LINK,
  POPULAR_MOVIE_API_LINK,
  TRENDING_MOVIE_API_LINK,
  FETCH_TOP_RATED,
  FETCH_COMEDY_MOVIES,
  FETCH_HORROR_MOVIES,
  FETCH_ROMANTIC_MOVIES,
  FETCH_DOCUMENTARIES,
  TV_SHOWS,
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
import { AuthContextI, MovieContextI } from "../../interfaces/ContextI";
import { LogoutModal } from "../../components/LogoutModal";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
  const {currentUser}=useContext<AuthContextI>(AuthContext);
  const { showVideoModal,setShowVideoModal,setMovieId,setTvShow } = useContext<MovieContextI>(MovieContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<number>();
  const[showLogout,setShowLogout]=useState(false)
  const [trending, setTrending] = useState<MovieI[]>([]);
  const [tvShows,setTvShows] = useState<MovieI[]>([]);
  const [action, setAction] = useState<MovieI[]>([]);
  const [topRated, setTopRated] = useState<MovieI[]>([]);
  const [originals, setOriginals] = useState<MovieI[]>([]);
  const [comedy, setComedy] = useState<MovieI[]>([]);
  const [horror, setHorror] = useState<MovieI[]>([]);
  const [romantic, setRomantic] = useState<MovieI[]>([]);
  const [documentaries, setDocumentaries] = useState<MovieI[]>([]);
  const[poster,setPoster]=useState<MovieI>();
  const[fetch,setFetch]=useState<boolean>(false);

  useEffect(() => {
    setFetch(true)
    const fetchTvShows = async () => {
      const { data } = await request.get(TV_SHOWS);
      setTvShows(data.results as MovieI[]);
    };
    const fetchMovie = async () => {
      const { data } = await request.get(POPULAR_MOVIE_API_LINK);
      setTrending(data.results as MovieI[]);
    };
    const fetchPopular = async () => {
      const { data } = await request.get(FETCH_ACTION_MOVIES);
      setAction(data.results as MovieI[]);
    };
    const fetchTopRated = async () => {
      const { data } = await request.get(FETCH_TOP_RATED);
      setTopRated(data.results as MovieI[]);
    };
    const fetchOrginals = async () => {
      const { data } = await request.get(FETCH_ORIGINALS);
      setOriginals(data.results as MovieI[]);
    };
    const fetchComedy = async () => {
      const { data } = await request.get(FETCH_COMEDY_MOVIES);
      setComedy(data.results as MovieI[]);
    };
    const fetchHorror = async () => {
      const { data } = await request.get(FETCH_HORROR_MOVIES);
      setHorror(data.results as MovieI[]);
    };
    const fetchRomatic = async () => {
      const { data } = await request.get(FETCH_ROMANTIC_MOVIES);
      setRomantic(data.results as MovieI[]);
    };
    const fetchDocumentaries = async () => {
      const { data } = await request.get(FETCH_DOCUMENTARIES);
      setDocumentaries(data.results as MovieI[]);
    };
    fetchTvShows();
    fetchMovie();
    fetchPopular();
    fetchTopRated();
    fetchOrginals();
    fetchComedy();
    fetchHorror();
    fetchRomatic();
    fetchDocumentaries();
  }, []);


  useEffect(()=>{

    const poster = tvShows[
      Math.floor(Math.random() * trending.length - 1)
    ] as MovieI;

    setPoster(poster)
   
  },[trending.length,tvShows])


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
        <Navbar open={()=>setShowLogout(true)}/>
        <Container>
          <div className="hero-wrap  h-full max-w-[50%] inline-block mt-[23rem]">
            <h1 className="text-white font-bold text-[3rem] md:text-[4rem]">
              {poster?.name || poster?.original_name}
            </h1>
            <p className="text-white
            text-[1.5rem] md:text-[1.7rem]">
              {poster?.overview.substring(0, 250) + "..."}
            </p>
          </div>
          <div className="mt-6 flex items-center gap-7">
            <button onClick={()=>{
              setTvShow(true)
                setMovieId(poster?.id as number)
              setShowVideoModal(true)
            }} className="bg-white flex w-fit gap-2 items-center  text-[1.5rem] md:text-[2rem] p-3 px-[1.5rem] rounded-lg">
              <PlayIcon className="
              w-[1.5rem] h-[1.5rem]
              md:w-[2rem] md:h-[2rem]" /> Play
            </button>
            <button className="bg-overlay flex w-fit gap-2 items-center md:text-[2rem] p-3 px-[1.5rem] rounded-lg text-[1.5rem] text-white">
              <InformationCircleIcon className="
              w-[1.5rem] h-[1.5rem]
              md:w-[2rem] md:h-[2rem] " />
              More Info
            </button>
          </div>
        </Container>
        {showLogout&&
        <LogoutModal close={()=>setShowLogout(false)}/>
        }
      </header>
      <main className="my-10">
        <Row
          title="Trendings"
          movie={trending}
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
          title="Action"
          movie={action}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />
        <Row
          title="Top Rated"
          movie={topRated}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />
        <Row
          title="Comedy"
          movie={comedy}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />
        <Row
          title="Horror"
          movie={horror}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />
        <Row
          title="Romantic"
          movie={romantic}
          openModal={setShowModal}
          setSelectedMovieId={setSelectedMovieId}
        />
        <Row
          title="Documentaries"
          movie={documentaries}
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



