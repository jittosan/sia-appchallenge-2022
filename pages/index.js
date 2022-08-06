import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'
import styles from '../styles/home.module.scss'

const Home = () => {
    useEffect(() => {}, [])
    return (
        <>
            <Head>
                <title>SIA AppChallenge - Team DJ</title>
            </Head>
            <main className={styles.main}>
                <h1>WELCOME ONBOARD</h1>
                <p>Team DJ</p>
                <DemoLinksContainer />
                <div className={styles.brandLogo}>
                    <br />
                </div>
            </main>
        </>
    )
}

export default Home

const DemoLinksContainer = () => {
    return(
        <div className={styles.demoLinksContainer}>
        <h1>Protoype Landing Pages</h1>
        <p>Click on the links below to view our prototype.</p>
        <br />
        <p>View our demo video illustrating the key features of our solution.</p>
        <br />
        <ul>
            <Link href={'/demo'}>
            <li>
                <h3>New User</h3>
                <span>Does not have SingaporeAir app on device.</span>
                <br />
                <br />
                <p>Show IFE features accessible to user through app, incentivising them to download and take-up.</p>
            </li>
            </Link>
            <Link href={'/demo/redirect'}>
            <li>
                <h3>Existing User</h3>
                <span>Already has SingaporeAir app on device.</span>
                <br />
                <br />
                <p>Directly bring user to KrisWorld menu, bypassing navigation within app and allowing user direct access to IFE features.</p>
            </li>
            </Link>
        </ul>
        </div>
    )
}