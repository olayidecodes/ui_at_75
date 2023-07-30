import React from 'react';
import style from "./Amount.module.css"

const Amount = (props: any) => {
  return (
      <div className={style.form}>
        <div className={style.field1}>
          <label htmlFor="purpose">Purpose of payment</label>
          <input onChange={props.inputHandle} className={style.input} type="text" name='pop' />
        </div>

        <div className={style.fields}>
          <div className={style.field1}>
            <label htmlFor="purpose">Amount to pay</label>
            <div className={style.naira}>
              <span className={style.nairalogo}>&#8358;</span>
              <input onChange={props.inputHandle} className={style.input} type="text" name='AmountToPay' />
            </div>
          </div>
          <div className={style.field1}>
            <label htmlFor="purpose">Select Currency</label>
            <select onChange={props.inputHandle} className={style.input} name='Currency'>
              <option>NGN - Nigerian Naira</option>
              <option>CAD - Canidian Dollar</option>
              <option>USD - United State Dollar</option>
              <option>GBP - British Pound</option>
              <option>AUD - Australian Dollar</option>
              <option>EUR - Euro</option>
            </select>
          </div>
        </div>

        <div className={style.btns}>
            <button 
              type='submit' 
              className={style.next} 
              onClick={props.next}
              >
                Next
              </button>

              <button 
              type='submit' 
              className={style.previous} 
              onClick={props.pre}
              >
              Previous
            </button>
        </div>
      </div>
  )
}

export default Amount