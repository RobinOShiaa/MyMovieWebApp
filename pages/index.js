import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { getPopularMovies } from '@/src/HttpLibrary';


export default function Home() {
  let text;
  getPopularMovies(1);
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="All Movies Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.logo}><a href="#">Your Logo</a></div>
          <div className={styles.main_list}>
            <ul className={styles.navLinks}>
              <li><a href="#">Movies</a></li>
              <li><a href="#">TV Shows</a></li>
              <li><a href="#">Latest</a></li>
              <li><a href="#">WatchList</a></li>
            </ul>
          </div>
            <span class="navTrigger">
                  <i></i>
                  <i></i>
                  <i></i>
            </span>
        </div>
      </nav>
     
      <main>
        <section className={styles.home}></section>
        <div className={styles.viewbar}>
          <div className={styles.searchBar}></div>
        </div>
      </main>
    </>
  )
}
