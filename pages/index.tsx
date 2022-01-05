import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MetaZoom</title>
        <meta name="description" content="MetaZoom" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          MetaZoom
        </h1>

        <p className={styles.description}>
          Share a pixellated version of your screen
        </p>

        <video className={styles.video} autoPlay loop muted playsInline src="/video.mp4" />

        <div className={styles.grid}>
          <a
            href="https://github.com/slavingia/metazoom#readme"
            className={styles.card}
          >
            <h2>Get started &rarr;</h2>
            <p>TLDR: Download the plugin, move it to a specific folder, and restart Zoom.</p>
          </a>

          <a
            href="https://github.com/slavingia/metazoom"
            className={styles.card}
          >
            <h2>Contribute &rarr;</h2>
            <p>The source code is available for inspection and contribution on GitHub.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        A project by {' '}
        <a
          href="https://twitter.com/shl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sahil Lavingia
        </a>
      </footer>
    </div>
  )
}

export default Home
