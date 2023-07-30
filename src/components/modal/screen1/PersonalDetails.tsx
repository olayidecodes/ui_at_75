import React from 'react';
import style from  "./PersonalDetails.module.css";

// {onButtonClick}
const PersonalDetails = (props: any) => {
  return (
        <div className={style.form}>
                    <div className={style.field}>
                      <label className='label' htmlFor="fname">Full Name</label>
                      <input onChange={props.inputHandle} className={style.input} type='text'name='FullName'/>
                    </div>

                    <div className={style.field}>
                      <label className='label' htmlFor="hallAllumni">Hall Allumni</label>
                      <input onChange={props.inputHandle} className={style.input} type='text'name='HallAllumni'/>
                    </div>

                    <div className={style.field}>
                      <label className='label' htmlFor="yearOfGrad">Year Of Graduation</label>
                      <input onChange={props.inputHandle} className={style.input} type='text'name='Yof'/>
                    </div>

                    <div className={style.field}>
                      <label className='label' htmlFor="address">Home Address</label>
                      <input onChange={props.inputHandle} className={style.input} type='text'name='HomeAddress'/>
                    </div>

                    <button 
                      type='submit' 
                      className={style.btn} 
                      onClick={props.next}
                    >
                        Next
                    </button>
                  </div>
  )
}

export default PersonalDetails