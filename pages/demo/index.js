import { gsap, Power3 } from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { childComponentSelector } from '../../scripts/animations'
import styles from '../../styles/demo.module.scss'

const Index = () => {
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

  //LOADING COMPONENTS
  const [krisworldLoaded, setKrisworldLoaded] = useState(false)
  useEffect(()=>{
    setTimeout(() => {
      setKrisworldLoaded(true)
    }, 3000)
  }, [])
  
  return (
    <main className={styles.main} ref={(el) => {containerRef=el}}>
      <div className={`content ${styles.content}`}>
        <h1>Explore Your In-Flight Entertainment Options</h1>
        <p>Redirecting you to the <span>SingaporeAir app</span> for the best experience</p>
      </div>
      {krisworldLoaded ? <KrisWorldEmulation /> : ''}
      <div className={`logo ${styles.branding}`}>
        <img src='https://design.singaporeair.com.sg/assets/images/brand-assets/linear-stacked-1@2x.png' />
      </div>
    </main>
  )
}

export default Index

const KrisWorldEmulation = () => {
  // ANIMATION METHODS
  let containerRef = useRef()
  useEffect(() => {
    let tl = gsap.timeline()
    // fade in entire page
    tl.fromTo(containerRef, {
      y: '100%',
      // opacity: 0,
    }, {
      y:'0%',
      opacity: 1,
      delay: 0.3,
      duration: 1.2,
      ease: Power3.easeOut
    })
  })

  return(
    <div className={styles.krisworldemulation} ref={(el) => {containerRef=el}}>
      <strong>Insert KrisWorld Screen Recording Here</strong>
    </div>
  )
}