import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>

      <Head>
        <title>3Hz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>

        <h1 className={styles.title}>Contact</h1>

        <div className={styles.grid}>
          <a className={styles.card} href="mailto:edward.h.zhao@gmail.com">
            Email: edward.h.zhao@gmail.com
          </a>
          <a className={styles.card} href="https://www.linkedin.com/in/ehzhao/">
            LinkedIn: linkedin.com/in/ehzhao
          </a>
          <a className={styles.card} href="https://github.com/3-Hz">
            GitHub: github.com/3-Hz
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