import React from 'react'
import Link from 'next/link'
import styles from '../../styles/home.module.scss'

const noapp = () => {
    return (
        <main className={styles.main}>
            <h1>Explore Your Flight Offerings</h1>
            <p>Install the <Link  target={'_blank'} rel={'noopener noreferrer'} href={'https://play.google.com/store/apps/details?id=com.amadeus.merci.client.ui&hl=en_SG&gl=US'}>SingaporeAir app</Link> for the full experience.</p>
            <br />
            <p>View IFE options <Link target={'_blank'} rel={'noopener noreferrer'} href={'https://kw.sq.com'}>here</Link>.</p>
        </main>
    )
}

export default noapp