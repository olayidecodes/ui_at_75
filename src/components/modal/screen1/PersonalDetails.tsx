import React from 'react';
import style from  "./PersonalDetails.module.css";

// {onButtonClick}
const PersonalDetails = () => {
  return (
    <main className={style.main}>
      <div className={style.scroll}>
        <form className={style.form}>
          <div className={style.field}>
            <label className='label' htmlFor="fname">Full Name</label>
            <input className={style.input} type='text'name='full_name'/>
          </div>

          <div className={style.field}>
            <label className='label' htmlFor="hallAllumni">Hall Allumni</label>
            <input className={style.input} type='text'name='hallAllumni'/>
          </div>

          <div className={style.field}>
            <label className='label' htmlFor="yearOfGrad">Year Of Graduation</label>
            <input className={style.input} type='text'name='yog'/>
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

export default PersonalDetails