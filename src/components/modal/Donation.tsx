"use client"; 
import React, {useState} from 'react';
import style from "./Donation.module.css"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Amount from './screen2/Amount';
import PersonalDetails from './screen1/PersonalDetails';
import PaymentMethod from './screen3/PaymentMethod';
import { checkout } from '@/lib/api/checkout';


const Donation = () => {
  // const formArray = ["Personal Details", "Amount", "Payment"]
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    FirstName: '', 
    LastName: '', 
    Email: '', 
    HallAlumni: '', 
    AmountToPay: '',
    Narration: ''
  })

  
  const submitHandler = async () => {
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
    }

  // handling/getting the input value here
  const inputHandle = (e: any) => {
    console.log(e.target.name)
    setState({
      ...state,
      [e.target.name]: e.target.value

    })
  }

  // form validation before the next form
  const next = () => {
    if (formNo === 1 && state.FullName && state.HallAllumni && state.Yof && state.HomeAddress) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 2 && state.pop && state.AmountToPay && state.Currency) {
      setFormNo(formNo + 1)
    } else {
      toast.error('Please fillup all input field')
    }
  }

  const pre = () => {
    setFormNo(formNo - 1)
  }
  const finalSubmit = () => {
    if (state.CardName && state.CardNumber && state.ExpireDate && state.Cvv && state.homadd) {
      toast.success('form submit success')
    } else {
      toast.error('Please fillup all input field')
    }
  }


  return (
    <>
    <ToastContainer />
    <main className={style.main}>
        <div className={style.circle}>
          {
            // status bar 3 circles.
            formArray.map((v, i) => <><div className={`${style.textwhite} ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? style.background : style.backgroundLight} `}>
              
            </div>
            
            
              {
                i !== formArray.length - 1 && <div className={`${style.bar} ${formNo === i + 2 || formNo === formArray.length ? style.background : style.backgroundLight}`}></div>
              }
            </>)
          }
        </div>
        <div className={style.title}>
          <div className="div">Personal Details</div>
          <div className="div">Amount</div>
          <div className="div">Payment</div>
        </div>
        {/* form loading */}
          {
          formNo === 1 && <div className={style.scroll}>
                <PersonalDetails inputHandle={inputHandle} next={next} formData = {{
                  firstName: state.FirstName,
                  lastName: state.LastName,
                  email: state.Email,
                  alumni: state.HallAlumni,
                }} />
            </div>
          }

          {
            formNo === 2 && <div className={style.scrollNot}>
                <Amount inputHandle={inputHandle} next={next} pre={pre} formData = {{
                  pop: state.pop,
                  amountToPay: state.AmountToPay
                }} />
            </div>
          }

          {
            formNo === 3 && <div className={style.scroll}>
                <PaymentMethod state={state} inputHandle={inputHandle} next={next} pre={pre} formData={{
                  cardName: state.CardName,
                  cardNumber: state.CardNumber,
                  expiryDate: state.ExpireDate,
                  cvv: state.Cvv,
                  homeAddress: state.homadd
                }} />
            </div>
          }
        
    </main>
    </>
    
  )
}

export default Donation