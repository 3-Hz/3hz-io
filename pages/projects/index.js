import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Projects() {
  return (
  <div className={styles.container}>

    <Head>
        <title>3Hz</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={styles.main}>

      <h1 className={styles.title}>Projects</h1>

      <div className={styles.grid}>
        <a className={styles.card} href="http://kaleidovision.3hz.io">
          Kaleidovision
        </a>
      </div>

      <div className={styles.grid}>
          <Link className={styles.card} href="/projects/linus-rage">
            <a className={styles.card}>Linus-Rage</a>
          </Link>
      </div>

    </div>

    <footer className={styles.footer}>
      <Link href="/">
        <a>Back to home &rarr;</a>
      </Link>
    </footer>

  </div>
  )
}