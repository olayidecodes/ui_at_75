import { FaCreditCard, FaWallet } from "react-icons/fa";
import {FaMoneyBillTransfer} from "react-icons/fa6";
import style from "./Payment.module.css";
import React from 'react';

const PaymentMethod = () => {
  return (
    <main className={style.main}>
      <div className={style.scroll}>
        <form className={style.form}>

          <h2>Payment Method</h2>

          <div className={style.method}>
            <h3><strong>Choose a payment method:</strong></h3>

            <div className={style.icons}>
              <div className={style.icon}>
                <FaCreditCard size={40}/>
                <p>Card</p>
              </div>
              <div className={style.icon}>
                <FaWallet size={40}/>
                <p>Wallet</p>
              </div>
              <div className={style.icon}>
                <FaMoneyBillTransfer size={40}/>
                <p>Transfer</p>
              </div>
            </div>
          </div>
          <div className={style.field}>
            <label className='label' htmlFor="cname">Card Name</label>
            <input className={style.input} type='text'name='cname'/>
          </div>

          <div className={style.field}>
            <label className='label' htmlFor="cnumber">Card Number</label>
            <input className={style.input} type='text'name='cnumber'/>
          </div>

          <div className={style.fields}>
            <div className={style.field}>
              <label htmlFor="purpose">Expiration Date</label>
              <input className={style.input} type="date" name='purpose' />
            </div>
            <div className={style.field}>
              <label htmlFor="purpose">CVV</label>
              <input className={style.input} type="text" name='cvv' />
            </div>
          </div>

          <div className={style.field}>
            <label className='label' htmlFor="address">Home Address</label>
            <input className={style.input} type='text'name='address'/>
          </div>

          <button 
            type='submit' 
            className={style.btn} 
            // onClick={() => onButtonClick("pagetwo")}
            >
              Next
            </button>
        </form>
      </div>
    </main>
  )
}

export default PaymentMethod