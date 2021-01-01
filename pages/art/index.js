import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Art() {
  return (
  <div className={styles.container}>

    <Head>
        <title>3Hz</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={styles.main}>

      <h1 className={styles.title}>Art</h1>

      <div className={styles.grid}>
        <a className={styles.card} href="http://kaleidovision.3hz.io">
          Kaleidovision
        </a>
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