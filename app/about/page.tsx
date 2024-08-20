"use client";
import React from "react";
import styles from "./Home.module.css";

const AboutPage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.intro}>
        <h1>Sobre Mim</h1>
        <p>
          Olá! Eu sou [Seu Nome], um [Sua Profissão] apaixonado por [Seu
          Interesse Principal]. Com uma sólida experiência em [Seu Campo de
          Atuação], tenho trabalhado em diversos projetos que vão desde
          [Descreva Brevemente Seu Trabalho].
        </p>
      </section>

      <section className={styles.career}>
        <h2>Carreira</h2>
        <p>
          Minha jornada começou em [Ano] quando comecei a trabalhar em [Seu
          Primeiro Trabalho ou Projeto Relevante]. Desde então, passei por
          [Principais Experiências ou Empregos], acumulando uma vasta
          experiência em [Área de Especialização]. Atualmente, estou [O Que Você
          Está Fazendo Agora].
        </p>
      </section>

      <section className={styles.contact}>
        <h2>Informações de Contato</h2>
        <ul>
          <li>
            Email: <a href="mailto:[SeuEmail]">[SeuEmail]</a>
          </li>
          <li>Telefone: [SeuTelefone]</li>
          <li>
            LinkedIn:{" "}
            <a href="[SeuLinkedIn]" target="_blank" rel="noopener noreferrer">
              [SeuLinkedIn]
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href="[SeuGitHub]" target="_blank" rel="noopener noreferrer">
              [SeuGitHub]
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default AboutPage;
