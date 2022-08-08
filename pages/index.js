import gsap, { Power3 } from 'gsap'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { childComponentSelector } from '../scripts/animations'
import styles from '../styles/home.module.scss'
import YouTube from 'react-youtube'

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
                <title>SIA AppChallenge 2022 - Team RDJ</title>
                <link rel='shortcut icon' href='https://play-lh.googleusercontent.com/03_65Ntwo2axa8mAmf7hhuYhWBhCj0gM4cEqKwHjOrBmSuf75wH5ORdRjUAFNt25Kg' />
            </Head>
            <main className={styles.main} ref={(el) => {containerRef=el}}>
                <DemoLinksContainer />
            </main>
        </>
    )
}

export default Home

const DemoLinksContainer = () => {
    return(
        <div className={styles.demoLinksContainer}>
            <div className={styles.headerSection}>
                <img src='/images/sia-stacked-linear.svg' />
                <p>AppChallenge 2022</p>
            </div>
            <div className={styles.landingSection}>
                <h1>Seatback, Relax and Explore</h1>
                <p>A Warm, Welcome by RDJ</p>
            </div>
        <br />
        <h1>Problem Statement</h1>
        <p>{"Passengers have the pre-conceived notion that in-flight entertainment (IFE) systems are used for movies and music, unaware of the new features that SIA has introduced onboard their flights."}</p>
        <br />
        <p>{"A solution is required to familiarise and promote new & upcoming IFE features on SIA flights."}</p>
        <br />


        <h1>Our Idea</h1>
        <strong>Promoting Take-Up - NFC-tagged Boarding Passes</strong>
        <p>{"The Singapore Airlines mobile app (named SingaporeAir) already has an interface to browse the IFE systems pre-flight from the convenience of the passengers' mobile phones. However, passengers may not be aware of it or not know how to navigate to the appropriate menu."}</p>
        <br />
        <p>{"Thus, a streamlined funnel is required to bring passengers directly to the IFE interface, whether or not they have the SingaporeAir app installed. Leveraging off an existing touchpoint that passengers already interact with during their flight - their boarding pass - why not introduce functionality that channels passengers to the SingaporeAir app from the boarding pass?"}</p>
        <br />
        <p>{"NFC stickers that allows passengers to the SingaporeAir app with 1 action - scan QR code or scan NFC tag."}</p>
        <br />
        <strong>Driving User Retention - KrisMemories</strong>
        {/* <p>SIA is part of your journeys, your memories. We're not just an airline getting you from A to B; we're always by your side. With a fresh blend of NFC in our KrisMemories, let's make our journey ever more delightful. Seatback, relax and explore our vision.</p> */}
        <br />
        <p>{"IFE features are only relevant to passengers up till the point where the flight ends. There isn't much reason to interact with IFE features beyond the flight. There needs to be a feature that stays relevant beyond the flight to get passengers to explore the IFE interface post-flight."}</p>
        <br />
        <p>{"We propose the introduction of KrisMemories - a feature to save passengers' media within the SingaporeAir app. Passengers can upload images/videos (ie. memories) of their trip in the SingaporeAir app. The boarding pass will link to this KrisMemories interface post-flight, transforming the boarding pass into a memorabillia in itself."}</p>
        <br />
        <p>{"KrisMemories thus provides the reason for passengers to return to the IFE menu post-flight, and in-turn promotes brand loyalty."}</p>
        <br />

        <h1>Demo Video</h1>
        <p>{"We illustrate the proposed usage of our solution in the following demo video, highlighting the key features & interfaces that passengers will be interacting with. With a simple scan/tap, passengers will be directed to the appropriate menus to interfacew with SIA's IFE."}</p>
        <br />
        <YouTube iframeClassName={styles.videoPlayer} videoId='_aSWwO_WxSY' />
        <br />



        <h1>Protoype Landing Pages</h1>
        <p>{"The customer experience is split into 2 segments - existing & new users of the SingaporeAir app."}</p>
        <br />
        <p>{"Click on the links below to view our prototype."}</p>
        <ul>
            <Link href={'/demo'}>
            <li>
                <div>
                    <h3>New User</h3>
                    <p className={styles.desc}>Does not have SingaporeAir app on device.</p>
                    <br />
                    <p>Show IFE features accessible to user through app, incentivising them to download and take-up the app to access KrisWorld.</p>
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
        <div className={styles.teamSection}>
            <p>Brought to you by</p>
            <img className={styles.teamLogo} src='/icons/rdj-logo.svg' />
            <p>in the Singapore Airlines AppChallenge 2022</p>
            <br />
            <br />
            <div className={styles.teamGrid}>
                <div className={styles.teamProfile}>
                    <Link href={'https://www.linkedin.com/in/rammdarshan/'}><img src={'/images/ramm-profile-pic.jpg'} /></Link>
                    <strong>Ramm</strong>
                </div>
                <div className={styles.teamProfile}>
                    <Link href={'https://www.linkedin.com/in/onglijiedenise/'}><img src={'/images/denise-profile-pic.jpg'} /></Link>
                    <strong>Denise</strong>
                </div>
                <div className={styles.teamProfile}>
                    <Link href={'https://www.linkedin.com/in/ratnajit-sarkar/'}><img src={'/images/jit-profile-pic.jpg'} /></Link>
                    <strong>Jit</strong>
                </div>
            </div>
            <br />
        </div>
        <div className={styles.footnote}>
            <strong>Team RDJ</strong>
            <p>Developed with <a href='https://nextjs.org/'>NextJS</a>; Hosted on <a href='https://www.vercel.com'>Vercel</a>.</p>
            <p>All media taken from <a href='https://www.singaporeair.com/en_UK/nz/media-centre/multimedia-library/'>SIA Media Library</a>; Design taken from <a href='https://design.singaporeair.com.sg/'>SIA Design Language</a></p>
        </div>
        </div> 
    )
}