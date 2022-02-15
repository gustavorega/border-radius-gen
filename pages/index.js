import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Canva from './Canva'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Border Radius Generator</title>
        <meta name="description" content="Border Radius Generator for CSS" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9576444366514980"
     crossOrigin="anonymous"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {/* <p>Welcome to</p> */}
          <p>B<span>order </span>R<span>adius </span>G<span>enerator </span></p>
        </h1>
        <Canva/>
        
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
