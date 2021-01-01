import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>3Hz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>

        <p className={styles.description}>
          "The only way to make sense out of change is to plunge into it, move with it, and join the dance." - Alan Watts
        </p>

        <div className={styles.grid}>
          <Link href="/blog">
            <a className={styles.card}>
              <h3>Blog &rarr;</h3>
            </a>
          </Link>

          <Link href="/publications">
            <a className={styles.card}>
              <h3>Publications &rarr;</h3>
            </a>
          </Link>

          <Link href="/art">
            <a className={styles.card}>
              <h3>Art &rarr;</h3>
            </a>
          </Link>

          <Link href="/contact">
            <a className={styles.card}>
              <h3>Contact &rarr;</h3>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          © Edward Zhao
        </a>
      </footer>
    </div>
  )
}
