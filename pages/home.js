import Head from 'next/head'
import React, { useEffect } from 'react'
import styles from '../styles/home.module.scss'

const Home = () => {
    useEffect(() => {}, [])
    return (
        <>
            <Head>
                <title>SIA AppChallenge</title>
            </Head>
            <main className={styles.main}>
                <h1>WELCOME ONBOARD</h1>
                <div className={styles.brandLogo}>
                    <br />
                </div>
            </main>
        </>
    )
}

export default Home