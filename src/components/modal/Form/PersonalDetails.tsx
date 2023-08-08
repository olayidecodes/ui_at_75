"use client"
import React, {useState} from 'react';
import style from  "./PersonalDetails.module.css";
import { checkout } from '@/lib/api/checkout';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const PersonalDetails = (props: any) => {
  // initializing the state of all form input.
  const [state, setState] = useState({
    FirstName: '', 
    LastName: '', 
    Email: '', 
    HallAlumni: '', 
    AmountToPay: '',
    Narration: ''
  })

  // onSubmit function
  const submitHandler = async () => {
    // form validation before the next form
      if (state.FirstName && state.LastName && state.Email && state.AmountToPay && state.HallAlumni && state.Narration !== "") {
        const payload = {
          "firstName": state.FirstName,
          "lastName": state.LastName,
          "email": state.Email,
          "amount": state.AmountToPay,
          "narration": state.Narration,
          "hallOfResidence": state.HallAlumni,
          "transactionID": '',
        }
        const data = await checkout(payload)

      } else {
        toast.error('Please fillup all input field')
      }
    }

  // handling/getting the input value here
const inputHandle = (e: any) => {
  console.log(e.target.name)
  setState({
    ...state,
    [e.target.name]: e.target.value

  })
}


  return (
    <div className={style.main}>
      <ToastContainer />
      <h1 className={style.title}>Personal Details</h1>
        <div className={style.form}>
                <div className={style.field}>
                  <label className='label' htmlFor="fname">First Name</label>
                  <input value={state.FirstName} onChange={inputHandle} className={style.input} type='text' name='FirstName'/>
                </div>

                <div className={style.field}>
                  <label className='label' htmlFor="fname">Last Name</label>
                  <input value={state.LastName} onChange={inputHandle} className={style.input} type='text' name='LastName'/>
                </div>

                <div className={style.field}>
                  <label className='label' htmlFor="fname">Email</label>
                  <input value={state.Email} onChange={inputHandle} className={style.input} type='email' name='Email'/>
                </div>

                <div className={style.field}>
                  <label className='label' htmlFor="amount">Amount (&#8358;)</label>
                  <input value={state.AmountToPay} onChange={inputHandle} className={style.input} type='number' name='AmountToPay'/>
                </div>

                <div className={style.field}>
                  <label className='label' htmlFor="hallAllumni">Allumni Hall</label>
                  <input value={state.HallAlumni} onChange={inputHandle} className={style.input} type='text' name='HallAlumni'/>
                </div> 

                <div className={style.field}>
                  <label className='label' htmlFor="narration">Narration</label>
                  <textarea className={style.Narration} value={state.Narration} onChange={inputHandle} name="Narration" id="Narration" cols={30} rows={10} />
                </div>

                <button type='submit' className={style.btn} onClick={submitHandler}>Pay</button>
          </div>
      </div>
  )
}

export default PersonalDetails