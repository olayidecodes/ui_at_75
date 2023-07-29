import React from 'react';
import style from "./Amount.module.css"

const Amount = () => {
  return (
    <main className={style.main}>
      <form className={style.form}>
        <div className={style.field1}>
          <label htmlFor="purpose">Purpose of payment</label>
          <input className={style.input} type="text" name='purpose' />
        </div>

        <div className={style.fields}>
          <div className={style.field1}>
            <label htmlFor="purpose">Amount to pay</label>
            <div className={style.naira}>
              <span className={style.nairalogo}>&#8358;</span>
              <input className={style.input} type="text" name='purpose' />
            </div>
          </div>
          <div className={style.field1}>
            <label htmlFor="purpose">Select Currency</label>
            <select className={style.input}>
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
              // onClick={() => onButtonClick("pageone")}
              >
                Next
              </button>

              <button 
              type='submit' 
              className={style.previous} 
              // onClick={() => onButtonClick("pagethree")}
              >
              Previous
            </button>
          </div>
      </form>
    </main>
  )
}

export default Amount