import React from 'react';
import style from "./Amount.module.css"

const Amount = () => {
  return (
    <main className={style.main}>
      <form className={style.form}>
        <div className={style.field1}>
          <label htmlFor="purpose">Purpose of payment</label>
          <input type="text" name='purpose' />
        </div>

        <div className={style.fields}>
          <div className={style.field1}>
            <label htmlFor="purpose">Amount to pay</label>
            <div><span>&#8358;</span><input type="text" name='purpose' /></div>
          </div>
          <div className={style.field1}>
            <label htmlFor="purpose">Select Currency</label>
            <select>
              <option>Select Currency</option>
              <option>USD</option>
              <option>NGN</option>
              <option>GBP</option>
              <option>SAUD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </form>
    </main>
  )
}

export default Amount