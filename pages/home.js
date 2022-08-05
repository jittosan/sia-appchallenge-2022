import Head from 'next/head'
import React from 'react'
import styles from '../styles/home.module.scss'

const Home = () => {
  return (
    <>
        <Head>
            <title>SIA AppChallenge</title>
        </Head>
        <main className={styles.main}>
            <h1>WELCOME ONBOARD</h1>
        </main>
    </>
  )
}

export default Home