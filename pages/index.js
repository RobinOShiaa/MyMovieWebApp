import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { getPopularMovies, getTrendingMovies } from "@/src/HttpLibrary";
import { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link'
export default function Home() {
  const [state,setState] = useState([]);
  const [trending,setTrending] = useState([]);


  useEffect(() => {
    getPopularMovies(1,setState);
    getTrendingMovies(1,setTrending);
  },[])

  
  return (
    <>
        <div className="h-screen w-screen bg-gradient-to-r from-slate-800 to-purple-900">
          <nav className="absolute flex w-full justify-end z-20 h-24 text-white">
            <div className={styles.main_list}>
              <ul className="flex w-1/2 whitespace-nowrap mr-16">
                <li className="mx-3 text-xl hover:text-violet-700 rounded-lg  h-20 p-7 my-2">
                  <a href="#">Movies</a>
                </li>
                <li className="mx-3 text-xl  hover:text-violet-700 rounded-lg h-20 p-7 my-2">
                  <a href="#">TV Shows</a>
                </li>
                <li className="mx-3 text-xl  hover:text-violet-700 rounded-lg h-20 p-7 my-2">
                  <a href="#">Latest</a>
                </li>
                <li className="mx-3 text-xl  hover:text-violet-700 rounded-lg h-20 p-7 my-2">
                  <a href="#">Genre</a>
                </li>
                <li className="mx-3 text-xl  hover:text-violet-700 rounded-lg h-20 p-7 my-2">
                  <a href="#">Country</a>
                </li>
                <li className="mx-3 text-xl hover:text-violet-700 rounded-lg h-20 p-7 my-2">
                  <a href="#">Year</a>
                </li>
              </ul>
            </div>
          </nav>
          <main>
                <Carousel infiniteLoop={true} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} autoPlay emulateTouch={true}>
                  {state.map((item,idx) =>  (
                    <div key={idx} className="relative [text-shadow:_0_4px_0_rgb(0_0_0_/_40%)]">
                      <div className="absolute flex gap-8 flex-col w-full text-start my-40 ml-10 text-white z-10">
                        <h1 className="font-stargaze text-6xl ">{item.original_title}</h1>
                        <p className="font-titillium text-justify w-1/3">{item.overview}</p>
                        <p className="font-orbitron text-lg">Release Date: {item.release_date}</p>
                        <p className="font-orbitron text-lg">Rating: {item.vote_average}</p>
                        {/* <Link href={`https://hd.fmoviesto.site/search/?q=${item.title}`}>
                          <span className=" text-zinc-600 bg-white p-3"> Watch Now </span>
                        </Link> */}
                      </div>
                      <img src={'https://www.themoviedb.org/t/p/original' + item['backdrop_path']} className="h-128 opacity-60"/>
                    </div>))}     
                </Carousel>
                <h3 className="text-xl text-white text-center border-b-4 rounded-lg border-indigo-500 border-double"></h3>
                <div className="mx-8 grid grid-cols-8 gap-4 p-4 m-4">
                    {trending.map((item,idx) =>  (
                      <div key={idx}>
                        <div className="h-full w-56 border-4 border-black rounded-lg">
                          <img className='object-cover h-full w-full' src={'https://www.themoviedb.org/t/p/original' + item['backdrop_path']}></img>
                        </div>
                        <h4 className="text-center text-ellipsis overflow-hidden whitespace-nowrap text-white">{item.title}</h4>
                      </div>
                    ))}  
                </div>
          </main>
        </div>
    </>
    
  );
}
