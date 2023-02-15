import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoWapper}>
          <img src='/logo.svg' alt='logo' />
          <div className={styles.brand}>
            <i>The</i>
            <span>Box</span>
          </div>
        </div>

        <ul className={styles.navLink}>
          <li><Link href='/'>Home</Link></li>
          <li><a href='/about-us'>About Us</a></li>
          <li><a href='/project'>Projects</a></li>
          <li><a href='/service'>Service</a></li>
          <li><a href='/conteact' className={styles.ctaLink}>Contact Us</a></li>
        </ul>
      </header>
      <div className={styles.hero}>
        <img src='/building.jpg' className={styles.heroImg}></img>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h3 className={styles.heroHeading}>Building Things <br />is our mission.</h3>
            <div className={styles.feature}>
              <div className={styles.featureTitle}>
                Feature Projects
              </div>
              <div className={styles.featureContent}>
                The National University of<br /> Architecture
              </div>
              <div className={styles.buttonContainer}>
                <div className={styles.backButton}>
                  <img src='/backButton.svg' />
                  <span>Back</span>
                </div>
                <div className={styles.nextButton}>
                  <img src='/nextButton.svg' />
                  <span>Next</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
