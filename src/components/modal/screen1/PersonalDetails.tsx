import React from 'react';
import style from  "./PersonalDetails.module.css";

// {onButtonClick}
const PersonalDetails = (props: any) => {
  return (
        <div className={style.form}>
                <div className={style.field}>
                  <label className='label' htmlFor="fname">First Name</label>
                  <input value={props.formData.firstName} onChange={props.inputHandle} className={style.input} type='text' name='FirstName'/>
                </div>

                <div className={style.field}>
                  <label className='label' htmlFor="fname">Last Name</label>
                  <input value={props.formData.laststName} onChange={props.inputHandle} className={style.input} type='text' name='LastName'/>
                </div>

                <div className={style.field}>
                  <label className='label' htmlFor="fname">Email</label>
                  <input value={props.formData.email} onChange={props.inputHandle} className={style.input} type='email' name='Email'/>
                </div>

                <div className={style.field}>
                  <label className='label' htmlFor="hallAllumni">Hall Allumni</label>
                  <input value={props.formData.alumni} onChange={props.inputHandle} className={style.input} type='text' name='HallAllumni'/>
                </div>

                <div className={style.field}>
                  <label className='label' htmlFor="yearOfGrad">Year Of Graduation</label>
                  <input value={props.formData.yof} onChange={props.inputHandle} className={style.input} type='text' name='Yof'/>
                </div>

                <div className={style.field}>
                  <label className='label' htmlFor="address">Home Address</label>
                  <input value={props.formData.homeAddress} onChange={props.inputHandle} className={style.input} type='text' name='HomeAddress'/>
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