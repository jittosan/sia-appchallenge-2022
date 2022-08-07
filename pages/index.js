import gsap, { Power3 } from 'gsap'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { childComponentSelector } from '../scripts/animations'
import styles from '../styles/home.module.scss'

const Home = () => {
    // LOAD-IN ANIMATION
    let containerRef = useRef();
    // useEffect(() => {
    //     let tl = gsap.timeline()
    //     // fade in page
    //     tl.fromTo(containerRef, {
    //         opacity: 0
    //     }, {
    //         opacity: 1,
    //         duration: 0.3,
    //         ease: Power3.easeInOut
    //     })
    //     //  fly in plane
    //     tl.fromTo(containerRef, {
    //         backgroundPositionX: '42%',
    //         backgroundPositionY: '40%'
    //     }, {
    //         backgroundPositionX: '87%',
    //         backgroundPositionY: '25%',
    //         duration: 24,
    //         ease: Power3.easeInOut
    //     }, "<50%")
    //     // fade in content
    //     tl.fromTo(childComponentSelector(containerRef, '.content'), {
    //         opacity: 0,
    //         y: 30
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         duration: 0.8,
    //         ease: Power3.easeInOut
    //     }, "<-=0.6")
    // }, [])


    return (
        <>
            <Head>
                <title>SIA AppChallenge - Team RDJ</title>
            </Head>
            <main className={styles.main} ref={(el) => {containerRef=el}}>
                <div className={`content ${styles.content}`}>
                    <div className={styles.landingSection}>
                        <h1>KrisMemories</h1>
                        <p>Team RDJ</p>
                    </div>
                </div>
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
                <div>
                    <h3>New User</h3>
                    <p className={styles.desc}>Does not have SingaporeAir app on device.</p>
                    <br />
                    <p>Show IFE features accessible to user through app, incentivising them to download and take-up.</p>
                </div>
            </li>
            </Link>
            <Link href={'/demo/redirect'}>
            <li>
                <div>
                    <h3>Existing User</h3>
                    <p className={styles.desc}>Already has SingaporeAir app on device.</p>
                    <br />
                    <p>Directly bring user to KrisWorld menu, bypassing navigation within app and allowing user direct access to IFE features.</p>
                </div>
            </li>
            </Link>
        </ul>
        </div>
    )
}