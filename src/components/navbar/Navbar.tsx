"use client";
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import React, {useState} from 'react'
import Popup from '../modal/popup/Popup';


const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

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
            {showPopup && <Popup/>}
        </div>
    </nav>
  )
}

export default Navbar