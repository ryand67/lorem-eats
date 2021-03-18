import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <Hero />
    </div>
  )
}
