import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from '../../styles/demo.module.scss'
import gsap, { Power3 } from 'gsap'
import { childComponentSelector } from '../../scripts/animations'
import Head from 'next/head'
import Image from 'next/image'

const LandingPageDemo = () => {
    // ANIMATION METHODS
    let containerRef = useRef()
    useEffect(() => {
        let tl = gsap.timeline()
        // fade in entire page
        tl.fromTo(containerRef, {
        opacity: 0,
        }, {
        opacity:1,
        duration: 0.8,
        ease: Power3.easeInOut
        })
        // float up content
        tl.fromTo(childComponentSelector(containerRef, '.content'), {
        y:50,
        opacity: 0.2
        }, {
        y:0,
        opacity: 1,
        duration:0.9,
        ease:Power3.easeOut
        }, "<=25%") 
        // float up logo
        tl.fromTo(childComponentSelector(containerRef, '.logo'), {
        y:50,
        opacity: 0
        }, {
        y:0,
        opacity: 1,
        duration:0.9,
        ease:Power3.easeOut
        }, "<=40%")
    }, [])

    return (
        <>
        <Head>
            <title>KrisWorld - In-Flight Entertainment</title>
            <link rel='shortcut icon' href='https://play-lh.googleusercontent.com/03_65Ntwo2axa8mAmf7hhuYhWBhCj0gM4cEqKwHjOrBmSuf75wH5ORdRjUAFNt25Kg' />
        </Head>
        <main className={styles.main} ref={(el) => {containerRef=el}}>
            <div className={`content ${styles.content}`}>
                <div className={styles.headerSection}>
                    <h1>Your In-Flight Entertainment.</h1>
                    {/* <br /> */}
                    <p>Explore our in-flight entertainment (IFE) features on your phone.</p>
                </div>
                <DemoCarousell />
                <div className={styles.downloadLinkContainer}>
                    <img className={styles.siaAppLogo} src='https://play-lh.googleusercontent.com/03_65Ntwo2axa8mAmf7hhuYhWBhCj0gM4cEqKwHjOrBmSuf75wH5ORdRjUAFNt25Kg' />
                    <Link  target={'_blank'} rel={'noopener noreferrer'} href={'https://apps.apple.com/sg/app/singapore-airlines/id515287841'}><Image className={styles.downloadButton} alt='App Store Badge' height={120} width={150} src={'/app-store-badge.svg'} /></Link>
                    <Link  target={'_blank'} rel={'noopener noreferrer'} href={'https://play.google.com/store/apps/details?id=com.amadeus.merci.client.ui&hl=en_SG&gl=US'}><Image className={styles.downloadButton} alt='App Store Badge' height={120} width={150} src={'/google-play-badge.svg'} /></Link>
                    <p className={styles.alternateLink}>Get the free SingaporeAir app for the full experience.</p>
                </div>
                <br />
                <br />
                <p className={styles.alternateLink}>Alternatively, read up our IFE features at <Link target={'_blank'} rel={'noopener noreferrer'} href={'https://kw.sq.com'}><span>kw.sq.com</span></Link>.</p>
            <div className={`logo ${styles.branding}`}>
                <img src='https://design.singaporeair.com.sg/assets/images/brand-assets/linear-stacked-3@2x.png' /> 
            </div>
            </div>
        </main>
        </> 
    )
}

export default LandingPageDemo

const DemoCarousell = () => { 
    return(
        <ul className={styles.demoCarousell}>
            <li>
                <img src='https://www.singaporeair.com/saar5/images/media-centre/multimedia-library/hires/fb-pey-beef.jpg' />
                <div>
                    <strong>In-Flight Catering</strong>
                    <p>Preview your in-flight food, beverage, amenity and snack offerings before your board.</p>
                </div>
            </li>
            <li>
                <img src='https://www.singaporeair.com/saar5/images/media-centre/multimedia-library/hires/pdt-b777-JCL4.jpg' />
                <div>
                    <strong>In-Flight Connectivity</strong>
                    <p>Stay conveniently connected with our onboard Wi-Fi.</p>
                </div>
            </li>
            <li>
                <img src='https://www.singaporeair.com/saar5/images/media-centre/multimedia-library/hires/pdt-b777-ey1.jpg' />
                <div>
                    <strong>Music Playlists</strong>
                    <p>Create your music playlist in-app and play it once onboard.</p>
                </div>
            </li>
            <li>
                <img src='https://www.singaporeair.com/saar5/images/media-centre/multimedia-library/hires/pdt-b777-ey2.jpg' />
                <div>
                    <strong>Movie Catalogue</strong>
                    <p>Browse our wide catalogue of movies in-app and save them to watch onboard.</p>
                </div>
            </li>
        </ul>
    )
}