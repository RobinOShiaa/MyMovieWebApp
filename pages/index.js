import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { getPopularMovies } from "@/src/HttpLibrary";
import { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



export default function Home() {
  const [state,setState] = useState([]);
  getPopularMovies(1,setState);
  console.log(state);




  
  return (
    <>
        <div className="h-screen w-screen bg-gradient-to-r from-slate-800 to-purple-900">
          <nav className="flex w-full justify-around h-24 text-zinc-600 bg-slate-200">
            <div className="ml-10 p-6 text-3xl my-2 font-bold">
              <a href="#">Logo</a>
            </div>
            <div className={styles.main_list}>
              <ul className="flex w-1/2 whitespace-nowrap">
                <li className="mx-6 text-xl border-b-4 border-indigo-500 hover:text-violet-700 rounded-lg  border-double  h-20 p-7 my-2">
                  <a href="#">Movies</a>
                </li>
                <li className="mx-6 text-xl border-b-4 border-indigo-500 hover:text-violet-700 rounded-lg  border-double  h-20 p-7 my-2">
                  <a href="#">TV Shows</a>
                </li>
                <li className="mx-6 text-xl border-b-4 border-indigo-500 hover:text-violet-700 rounded-lg  border-double  h-20 p-7 my-2">
                  <a href="#">Latest</a>
                </li>
                <li className="mx-6 text-xl border-b-4 border-indigo-500 hover:text-violet-700 rounded-lg  border-double  h-20 p-7 my-2">
                  <a href="#">WatchList</a>
                </li>
              </ul>
            </div>
          </nav>
          <main>
              <Carousel showStatus={false} showThumbs={false} autoPlay emulateTouch={true}>
                {state.map((item,idx) =>  (
                  <div key={idx} className="relative">
                    <div className="absolute flex flex-col w-full text-start mt-8 ml-10">
                      <h1 className="text-white text-6xl ">{item.original_title}</h1>
                      <p className="text-white text-justify w-1/3">{item.overview}</p>
                      <p className=" text-white">{item.release_date}</p>
                      <p className=" text-white">{item.vote_average}</p>
                    </div>
                    <img src={'https://www.themoviedb.org/t/p/original' + item['backdrop_path']} className="h-128 mx-auto"/>
                  </div>))}     
              </Carousel>
         
               
          </main>
        </div>
    
   
    
    </>
    
  );
}
