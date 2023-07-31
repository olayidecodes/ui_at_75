"use client";
import Image from 'next/image'
import React, {useState} from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Popup from '../modal/popup/Popup';

const Banner = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };


  return (
    <section className={styles.container}>
        <div className={styles.left}>
            <h1>University of Ibadan 75th Anniversary Crowdfunding Barometer</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Sed nunc laoreet nec fames pretium lacinia. Id ac pretium lacus in facilisis justo tristique tristique in. Molestie et venenatis adipiscing malesuada eget tempor ut. Gravida lacus</p>
            <button className={styles.btn} onClick={handleButtonClick}>Donate</button>
            {showPopup && <Popup/>}
        </div>
        <div className={styles.right}>
          <Image src='/money.png' alt='money' width={450} height={500}/>
        </div>
    </section>
  )
}

export default Banner