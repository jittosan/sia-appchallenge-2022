import Head from 'next/head'
import Link from 'next/link'
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
                <br />
                <Link href={'/demo/redirect'}>Demo (app installed)</Link>
                <br />
                <Link href={'/demo'}>Demo (app NOT installed)</Link>
                <div className={styles.brandLogo}>
                    <br />
                </div>
            </main>
        </>
    )
}

export default Home