import React from "react";
import Head from "next/head";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Video Background Page</title>
        <meta
          name="description"
          content="Next.js page with a full-screen video background"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.videoBackground}>
        <video autoPlay muted loop className={styles.video}>
          <source
            src="https://portifolio-joao-vitor-salgueiro.vercel.app/video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <main className={styles.mainContent}>
        <h1 className={styles.title}>Texto malado aqui</h1>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Sobre mim</button>
          <button className={styles.button}>Portfolio</button>
        </div>
      </main>
    </div>
  );
}
