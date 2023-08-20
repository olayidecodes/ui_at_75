"use client";
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import React, {useState} from 'react'
import Popup from '../modal/popup/Popup';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };


  const closePopup = () => {
    console.log("clicked")
    setIsPopupOpen(false);
  };


  
  return (
    <nav className={styles.container}>
        <Image src="/logo.png" width={51} height={62} alt='University of Ibadan'/>
        <div className={styles.links}>
            <Link className={styles.link} href="/about">About Project</Link>
            <Link className={styles.link} href="/contact">Contact Us</Link>
            <Link onClick={openPopup} className={styles.link_other} href="">Donate</Link>
            
        </div>
        {isPopupOpen && <Popup onClose={closePopup}/>}
        <AiOutlineMenu className={styles.menu} onClick={() => setToggle(!toggle)}/>

        {toggle && 
        <div className={styles.small_links}>
        <AiOutlineClose className={styles.close} onClick={() => setToggle(!toggle)}/>
        <div className={styles.links_box}>
        <Link className={styles.link} href="/about">About Project</Link>
        <Link className={styles.link} href="/contact">Contact Us</Link>
        <Link onClick={openPopup} className={styles.link_other} href="">Donate</Link>
        
        </div>
        {isPopupOpen && <Popup onClose={closePopup}/>}
    </div>
        }
    </nav>
  )
}

export default Navbar