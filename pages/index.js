import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { getPopularMovies } from "@/src/HttpLibrary";
import { useEffect, useState } from "react";
import { Carousel } from 'flowbite';


export default function Home() {
  const [state,setState] = useState([]);
  const [items,setItems] = useState([]);
  const [options, setOptions] = useState({});
  getPopularMovies(1,setState);

  const carousel = new Carousel(items, options);



  useEffect(() => {
    setOptions({
      defaultPosition: 1,
      interval: 3000,
      
      indicators: {
          activeClasses: 'bg-white dark:bg-gray-800',
          inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items,
          onNext: () => {
            console.log('next slider item is shown');
          },
          onPrev: ( ) => {
            console.log('previous slider item is shown');
          },
          onChange: ( ) => {
            console.log('new slider item has been shown');
          }
      }
    })
  }, [state])
  
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
          
<div id="default-carousel" className="relative w-full" data-carousel="slide">
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      {
          state.map((item,idx) => {
            setItems((prevItems) => [...prevItems,  {
                position: idx,
                el: <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <img src={'https://www.themoviedb.org/t/p/original' + item['backdrop_path']} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." width="300" height="500"/>
                    </div>
            }])
            
            return (
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={'https://www.themoviedb.org/t/p/original' + item['backdrop_path']} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." width="300" height="500"/>
              </div>
            )
          })
          
      }

    </div>
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" linejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" linejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>


          
        </main>
      </div>
    </>
  );
}
