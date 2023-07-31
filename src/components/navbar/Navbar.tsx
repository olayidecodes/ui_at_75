"use client";
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import React, {useState} from 'react'
import Donation from '../modal/Donation'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [toggle, setToggle] = useState(false);


  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <nav className={styles.container}>
        <Image src="/logo.png" width={51} height={62} alt='University of Ibadan'/>
        <div className={styles.links}>
            <Link className={styles.link} href="/about">About Project</Link>
            <Link className={styles.link} href="/contact">Contact Us</Link>
            <Link onClick={handleButtonClick} className={styles.link_other} href="">Donate</Link>
            {showPopup && <div className={styles.popup}><Donation /></div>}
        </div>
        <AiOutlineMenu className={styles.menu} onClick={() => setToggle(!toggle)}/>

        {toggle && 
        <div className={styles.small_links}>
        <AiOutlineClose className={styles.close} onClick={() => setToggle(!toggle)}/>
        <div className={styles.links_box}>
        <Link className={styles.link} href="/about">About Project</Link>
        <Link className={styles.link} href="/contact">Contact Us</Link>
        <Link onClick={handleButtonClick} className={styles.link_other} href="">Donate</Link>
        {showPopup && <div className={styles.popup}><Donation /></div>}
        </div>
    </div>
        }
    </nav>
  )
}

export default Navbar