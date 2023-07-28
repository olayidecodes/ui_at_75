import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { FaTwitterSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <nav className={styles.container}>
        <Image src="/logo.png" width={51} height={62} alt='University of Ibadan'/>
        <div className={styles.links}>
            <Link className={styles.link} href="twitterr.com"><FaTwitterSquare  /></Link>
            <Link className={styles.link} href="https://www.linkedin.com/"><FaLinkedin /></Link>
            <Link className={styles.link} href=""><FaFacebookSquare /></Link>
        </div>
    </nav>
  )
}

export default Footer