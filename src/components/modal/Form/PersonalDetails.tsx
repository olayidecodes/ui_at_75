"use client"
import React, {useState} from 'react';
import style from  "./PersonalDetails.module.css";
import { checkout } from '@/lib/api/checkout';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

interface Currency {
  code: string;
  name: string;
}

const PersonalDetails = (props: any) => {
  // initializing the state of all form input.
  const [state, setState] = useState({
    FirstName: '', 
    LastName: '', 
    Email: '', 
    HallAlumni: '', 
    AmountToPay: 0,
    Narration: '',
    Currency: ''
  })

  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  const router = useRouter()


  // onSubmit function
  const submitHandler = async () => {
    // form validation before the next form
      if (state.FirstName && state.LastName && state.Email && (state.AmountToPay >= 100) && state.Currency && state.HallAlumni && state.Narration !== "") {
        const payload = {
          "firstName": state.FirstName,
          "lastName": state.LastName,
          "email": state.Email,
          "amount": state.AmountToPay,
          "narration": state.Narration,
          "hallOfResidence": state.HallAlumni,
          "currency": state.Currency,
          "transactionID": '',
        }
        setIsLoading(true);
        const data = await checkout(payload)
        router.push(data.data.data.authorization_url)
        console.log(data)

      } else if(state.AmountToPay <= 0){
        toast.error(`Please input amount greater than ${state.AmountToPay}`)
        setIsLoading(false)
      }else {
        setIsLoading(false)
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


// list of currencies
const currencies: Currency[] = [
  { code: 'NGN', name: 'Nigerian Naira' }, 
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound Sterling' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'AUD', name: 'Australian Dollar' },
  // Add more currencies as needed
];


  return (
    <div className={style.main}>
      <ToastContainer />
      
        <div className={style.form}>
          <h1 className={style.title}>Personal Details</h1>
                <div className={style.form1}>
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
                    <label className='label' htmlFor="hallAllumni">Alumni Hall</label>
                    <select className={style.select} onChange={inputHandle} name="HallAlumni" id="HallAlumni">
                      <option value="#">Select your Hall</option>
                      <option value="Alexander brown hall">Alexander Brown Hall</option>
                      <option value="Kuti Hall">Kuti Hall</option>
                      <option value="Tedder Hall">Tedder Hall</option>
                      <option value="Mellanby Hall">Mellanby Hall</option>
                      <option value="Queen Elizabeth Hall">Queen Elizabeth Hall</option>
                      <option value="Independence Hall">Independence Hall</option>
                      <option value="Idia Hall">Idia Hall</option>
                      <option value="Bello Hall">Bello Hall</option>
                      <option value="Awolowo Hall">Awolowo Hall</option>
                      <option value="Nnamdi Azikwe Hall">Nnamdi Azikwe Hall</option>
                    </select>
                  </div> 

                  <div className={style.field}>
                    <label className='label' htmlFor="currency">Currency</label>
                    <select className={style.select} name='Currency' onChange={inputHandle}>
                      <option value="">Select A Currency</option>
                      {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.name} - ({currency.code})
                      </option>
                      ))}
                    </select>
                  </div>

                  <div className={style.field}>
                    <label className='label' htmlFor="amount">Amount</label>
                    <input value={state.AmountToPay} onChange={inputHandle} className={style.input} type='number' name='AmountToPay'/>
                  </div>

                  <div className={style.field}>
                    <label className='label' htmlFor="narration">Narration</label>
                    <textarea className={style.Narration} value={state.Narration} onChange={inputHandle} name="Narration" id="Narration" cols={30} placeholder='Type Here...' rows={10} />
                  </div>
                </div>

                <button type='submit' className={style.btn} onClick={submitHandler} disabled={isLoading}>{ isLoading? "Processing..." : "Pay"}</button>
          </div>
      </div>
  )
}

export default PersonalDetails