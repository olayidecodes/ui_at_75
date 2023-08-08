import { FaCreditCard, FaWallet } from "react-icons/fa";
import {FaMoneyBillTransfer} from "react-icons/fa6";
import style from "./Payment.module.css";
import React from 'react';

const PaymentMethod = (props: any) => {

  return (
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
                <p className={style.para}>Transfer</p>
              </div>
            </div>
          </div>
          <div className={style.field}>
            <label className='label' htmlFor="cname">Card Name</label>
            <input value={props.formData.cardName} onChange={props.inputHandle} className={style.input} type='text'name='CardName'/>
            <input />
          </div>

          <div className={style.field}>
            <label className='label' htmlFor="cnumber">Card Number</label>
            <input  value={props.formData.cardNumber} onChange={props.inputHandle} className={style.input} type='text'name='CardNumber'/>
          </div>

          <div className={style.fields}>
            <div className={style.field}>
              <label htmlFor="purpose">Expiration Date</label>
              <input value={props.formData.expiryDate} onChange={props.inputHandle} className={style.input} type="date" name='ExpireDate' />
            </div>
            <div className={style.field}>
              <label htmlFor="purpose">CVV</label>
              <input  value={props.formData.cvv} onChange={props.inputHandle} className={style.input} type="text" name='Cvv' />
            </div>
          </div>

          <div className={style.field}>
            <label className='label' htmlFor="address">Home Address</label>
            <input  value={props.formData.homeAddress} onChange={props.inputHandle} className={style.input} type='text'name='homadd'/>
          </div>

          <button 
              type='submit' 
              className={style.previous} 
              onClick={props.pre}
              >
              Previous
            </button>                                 

          <button 
            type='submit' 
            className={style.btn} 
            onClick={props.submitHandler}

            >
              Next
            </button>
            
        </form>
  )
}

export default PaymentMethod