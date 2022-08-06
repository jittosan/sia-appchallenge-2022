import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from '../../styles/noapp.module.scss'
import gsap, { Power3 } from 'gsap'
import { childComponentSelector } from '../../scripts/animations'
import Head from 'next/head'

const NoApp = () => {
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
        delay: 0.3,
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
            <title>SIA IFE</title>
            
        </Head>
        <main className={styles.main} ref={(el) => {containerRef=el}}>
            <div className={`content ${styles.content}`}>
                <div className={styles.headerSection}>
                    <h1>Your In-Flight Entertainment</h1>
                    <p>Explore our in-flight entertainment (IFE) features from your phone before you board.</p>
                    {/* <p>Get the <Link  target={'_blank'} rel={'noopener noreferrer'} href={'https://play.google.com/store/apps/details?id=com.amadeus.merci.client.ui&hl=en_SG&gl=US'}>SingaporeAir app</Link> for the full experience.</p> */}
                </div>
                <DemoCarousell />
                {/* <img src='https://play-lh.googleusercontent.com/03_65Ntwo2axa8mAmf7hhuYhWBhCj0gM4cEqKwHjOrBmSuf75wH5ORdRjUAFNt25Kg' /> */}
                <p className={styles.alternateLink}>Get the free <Link  target={'_blank'} rel={'noopener noreferrer'} href={'https://play.google.com/store/apps/details?id=com.amadeus.merci.client.ui&hl=en_SG&gl=US'}><span>SingaporeAir app</span></Link> for the full experience.</p>
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

export default NoApp

const DemoCarousell = () => { 
    return(
        <ul className={styles.demoCarousell}>
            <li>
                <img src='https://www.singaporeair.com/saar5/images/media-centre/multimedia-library/hires/fb-pey-beef.jpg' />
                <div>
                    <strong>In-flight Menu</strong>
                    <p>Check your menu.</p>
                </div>
            </li>
            <li>
                <img src='https://www.singaporeair.com/saar5/images/media-centre/multimedia-library/hires/ife-jcl-1.jpg' />
                <div>
                    <strong>In-flight Connectivity</strong>
                    <p>Connect your phone to our seatback.</p>
                </div>
            </li>
            <li>
                <img src='https://www.singaporeair.com/saar5/images/media-centre/multimedia-library/hires/pdt-b777-ey5.jpg' />
                <div>
                    <strong>Music Playlists</strong>
                    <p>Create your own music playlists.</p>
                </div>
            </li>
            <li>
                <img src='https://www.singaporeair.com/saar5/images/media-centre/multimedia-library/hires/pdt-b777-ey2.jpg' />
                <div>
                    <strong>Movie Catalogue</strong>
                    <p>Browse our catalogue of movies.</p>
                </div>
            </li>
        </ul>
    )
}