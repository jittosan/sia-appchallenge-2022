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
                <h1>Explore Your In-Flight Entertainment (IFE) Options</h1>
                <p>Get the <Link  target={'_blank'} rel={'noopener noreferrer'} href={'https://play.google.com/store/apps/details?id=com.amadeus.merci.client.ui&hl=en_SG&gl=US'}>SingaporeAir app</Link> for the full experience.</p>
                <br />
                <p>TOOLS FOR KRISWORLD</p>
                <br />
                <p>Alternatively, read up on IFE features at <Link target={'_blank'} rel={'noopener noreferrer'} href={'https://kw.sq.com'}><span>kw.sq.com</span></Link>.</p>
            </div>
            <div className={`logo ${styles.branding}`}>
                <img src='https://design.singaporeair.com.sg/assets/images/brand-assets/linear-stacked-3@2x.png' />
            </div>
        </main>
        </>
    )
}

export default NoApp