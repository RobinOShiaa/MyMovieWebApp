import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { getPopularMovies, getTrendingMovies } from "@/src/HttpLibrary";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
export default function Home() {
  const [state, setState] = useState([]);
  const [isHover, setIsHover] = useState({
    movies: false,
    tvshows: false,
    latest: false,
    genre: false,
    country: false,
    year: false,
  });

  const borderStyle = "border-b-4 rounded-md border-indigo-500 border-single";
  const navStyle = "2xl:mx-2 md:text-xl text-lg h-20 2xl:p-7 xl:p-6 lg:p-5 sm:p3 p-1 my-2";

  useEffect(() => {
    getPopularMovies(1, setState);
    // getTrendingMovies(1,setTrending);
  }, []);

  return (
    <>
      <div className="h-screen bg-gradient-to-r from-slate-900 to-indigo-950">
        <nav className="absolute flex w-full md:justify-end z-20 h-24 text-white justify-center">
          <div className={styles.main_list}>
            <ul className="flex whitespace-nowrap md:mr-16 md-0">
              <li
                onMouseEnter={() => {
                  setIsHover((prevState) => {
                    let result = {
                      ...prevState,
                      movies: true,
                    };
                    console.log(result);
                    return result;
                  });
                }}
                onMouseLeave={() => {
                  setIsHover((prevState) => {
                    let result = {
                      ...prevState,
                      movies: false,
                    };
                    console.log(result);
                    return result;
                  });
                }}
                className={isHover.movies ? borderStyle + navStyle : navStyle}
              >
                <a href="#">Movies</a>
              </li>
              <li
                onMouseEnter={() => {
                  setIsHover((prevState) => {
                    let result = {
                      ...prevState,
                      tvshows: true,
                    };
                    console.log(result);
                    return result;
                  });
                }}
                onMouseLeave={() => {
                  setIsHover((prevState) => {
                    let result = {
                      ...prevState,
                      tvshows: false,
                    };
                    console.log(result);
                    return result;
                  });
                }}
                className={isHover.tvshows ? borderStyle + navStyle : navStyle}
              >
                <a href="#">TV Shows</a>
              </li>
              <li
                onMouseEnter={() => {
                  setIsHover((prevState) => {
                    let result = {
                      ...prevState,
                      latest: true,
                    };
                    console.log(result);
                    return result;
                  });
                }}
                onMouseLeave={() => {
                  setIsHover((prevState) => {
                    let result = {
                      ...prevState,
                      latest: false,
                    };
                    console.log(result);
                    return result;
                  });
                }}
                className={isHover.latest ? borderStyle + navStyle : navStyle}
              >
                <a href="#">Latest</a>
              </li>
              <li
                onMouseEnter={() => {
                  setIsHover((prevState) => {
                    let result = {
                      ...prevState,
                      genre: true,
                    };
                    console.log(result);
                    return result;
                  });
                }}
                onMouseLeave={() => {
                  setIsHover((prevState) => {
                    let result = {
                      ...prevState,
                      genre: false,
                    };
                    console.log(result);
                    return result;
                  });
                }}
                className={isHover.genre ? borderStyle + navStyle : navStyle}
              >
                <a href="#">Genre</a>
              </li>
              <li
                onMouseEnter={() => {
                  setIsHover((prevState) => {
                    let result = {
                      ...prevState,
                      country: true,
                    };
                    console.log(result);
                    return result;
                  });
                }}
                onMouseLeave={() => {
                  setIsHover((prevState) => {
                    let result = {
                      ...prevState,
                      country: false,
                    };
                    console.log(result);
                    return result;
                  });
                }}
                className={isHover.country ? borderStyle + navStyle : navStyle}
              >
                <a href="#">Country</a>
              </li>
              <li
                onMouseEnter={() => {
                  setIsHover((prevState) => {
                    let result = {
                      ...prevState,
                      year: true,
                    };
                    console.log(result);
                    return result;
                  });
                }}
                onMouseLeave={() => {
                  setIsHover((prevState) => {
                    let result = {
                      ...prevState,
                      year: false,
                    };
                    console.log(result);
                    return result;
                  });
                }}
                className={isHover.year ? borderStyle + navStyle : navStyle}
              >
                <a href="#">Year</a>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <Carousel
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            width={"100%"}
            autoPlay
            emulateTouch={true}
          >
            {state.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute h-full md:items-start items-center justify-center flex gap-8 flex-col text-start md:ml-20 ml-0 text-white z-10">
                  <h1 className="font-stargaze text-2xl text-center sm:text-3xl lg:text-4xl xl:text-5xl [text-shadow:_4px_0_rgb(0_0_0_/_50%)] ">
                    {item.original_title}
                  </h1>
                  <p className="font-titillium text-md xl:text-lg w-2/4 [text-shadow:_4px_0_rgb(0_0_0_/_40%)] ">
                    {item.overview}
                  </p>
                  <p className="font-orbitron text-sm xl:text-md [text-shadow:_1px_0_rgb(0_0_0_/_40%)]">
                    Release Date: {item.release_date}
                  </p>
                  <p className="font-orbitron text-sm xl:text-md [text-shadow:_1px_0_rgb(0_0_0_/_40%)]">
                    Rating: {item.vote_average}
                  </p>
                    {/* <Link
                      href={`https://hd.fmoviesto.site/search/?q=${item.title}`}
                    >
                      <span className=" text-zinc-600 bg-white p-3">
                        {" "}
                        Watch Now{" "}
                      </span>
                    </Link> */}
                  <div className="flex">
                    <button className="btn  mr-2 relative inline-flex items-center justify-start overflow-hidden transition-all bg-violet-950 rounded hover:bg-violet-950 group">
                      <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                      <span className="w-full p-2 text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">Watch Now</span>
                    </button>
                    <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-violet-950 rounded hover:bg-violet-950 group">
                      <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                      <span className="w-full p-2 text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">Tell Me More</span>
                    </button>
                  </div>
              
                  {/* <Link
                    href={`https://hd.fmoviesto.site/search/?q=${item.title}`}
                  >
                    <span className=" text-zinc-600 bg-white p-3">
                      {" "}
                      Tell Me More{" "}
                    </span>
                  </Link> */}
                </div>
                <img
                  src={
                    "https://www.themoviedb.org/t/p/original" +
                    item["backdrop_path"]
                  }
                  className="h-screen w-screen object-cover opacity-60"
                />
              </div>
            ))}
          </Carousel>
          {/* <h3 className="text-xl text-white text-center border-b-4 rounded-lg border-indigo-500 border-double"></h3>
                <div className="mx-8 grid grid-cols-8 gap-4 p-4 m-4">
                    {trending.map((item,idx) =>  (
                      <div key={idx}>
                        <div className="h-full w-56 border-4 border-black rounded-lg">
                          <img className='object-cover h-full w-full' src={'https://www.themoviedb.org/t/p/original' + item['backdrop_path']}></img>
                        </div>
                        <h4 className="text-center text-ellipsis overflow-hidden whitespace-nowrap text-white">{item.title}</h4>
                      </div>
                    ))}  
                </div> */}
          <div className="bg-gradient-to-r from-slate-900 to-violet-950  h-screen"></div>
        </main>
      </div>
    </>
  );
}
