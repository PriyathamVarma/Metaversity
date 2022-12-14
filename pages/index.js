import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/valknut.png';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Metaversity</title>
        <meta name="metaverse" content="For learning about metaverse" />
        <link rel="icon" href="/valknut.png" />
      </Head>

      <Header />

      <main className={styles.main}>

        <div className={styles.title}>
         <p><img src={logo.src} className={styles.logo} alt="logo" /> Welcome to <a href="https://nextjs.org">Metaversity</a> </p>

         <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Partnerships</li>
         </ul>
        </div>

        <div className={styles.hero}>

          <div>

            <h5>Welcome,</h5>

          </div>

          <div>

          </div>

          <div>

          </div>

          

        </div>

       {/*
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Videos &rarr;</h2>
            <p>Get all the videos on how to work with metaverse technologies.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Articles &rarr;</h2>
            <p>Read and know more about metaverse related articles and latest trends!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Projects &rarr;</h2>
            <p>Create, share, deploy and learn metaverse related projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Career Plan &rarr;</h2>
            <p>
              Plan your career and be future ready.
            </p>
          </a>
        </div>


        <div className={styles.middle}>

          <p>Learn . Share . Build</p>

        </div>


        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Videos &rarr;</h2>
            <p>Get all the videos on how to work with metaverse technologies.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Articles &rarr;</h2>
            <p>Read and know more about metaverse related articles and latest trends!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Projects &rarr;</h2>
            <p>Create, share, deploy and learn metaverse related projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Career Plan &rarr;</h2>
            <p>
              Plan your career and be future ready.
            </p>
          </a>
        </div>  


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Created By Metapreneur</span>
        </a>
      </footer>
    </div>
  )
}
