import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Metaversity</title>
        <meta name="metaverse" content="For learning about metaverse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Metaversity</a>
        </h1>

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
