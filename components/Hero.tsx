import Link from 'next/link'
import React, { FC } from 'react'
import styles from '../styles/Home.module.scss'

const Hero:FC = () => {
  return (
    <main className={styles.hero}>
      
      <section className={styles.heroTitle}>
          <span>Задача 02</span>
        <h1>
          Интерактивная карта ВДНХ
          с персонализированными
          маршрутами
        </h1>
      </section>
      
      
      <section className={styles.heroMiddle}>
        <div className={styles.arrow}></div>
        <Link href={'/polls'}>
          <button className={styles.button18} role="button">Let's go!</button>
        </Link>
        <div className={styles.arrow}></div>
      </section>
      
      
    </main>
  )
}

export default Hero