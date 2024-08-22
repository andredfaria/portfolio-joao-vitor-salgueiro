"use client"; // Adicione esta linha no topo do arquivo

import React from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import styles from "./Home.module.css";

export default function Home() {
  const router = useRouter();

  const handlePortfolioClick = () => {
    router.push("/portfolio"); // Altere o caminho conforme necessário
  };

  const handleAboutClick = () => {
    router.push("/about"); // Altere o caminho conforme necessário
  };

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
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={styles.video}
        >
          <source
            src="https://portifolio-joao-vitor-salgueiro.vercel.app/videos/background.mp4"
            type="video/mp4"
          />
          Seu Navegador não suporta o elemento da pagina.
        </video>
      </div>

      <main className={styles.mainContent}>
        <h1 className={styles.title}>Texto malado aqui</h1>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleAboutClick}>
            Sobre mim
          </button>
          <button className={styles.button} onClick={handlePortfolioClick}>
            Portfolio
          </button>
        </div>
      </main>
    </div>
  );
}
