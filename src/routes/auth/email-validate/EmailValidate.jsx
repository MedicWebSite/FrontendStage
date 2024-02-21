import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ValidationModal from '../../../components/validation-modal/ValidationModal';


const EmailValidate = () => {
  const  [validationEmail, setValidationEmail] = useState('')
  const [openModal, setOpenModal] = useState(false)
  console.log(validationEmail);

  const handleValidateEmail = (e) => {
    e.preventDefault();
    fetch(`http://147.45.103.204:4040/api/auth/register/send-code?mail=${validationEmail}`, { method: "POST" })
      .then(res => res.json())
      .then(data => {
        setOpenModal(true)
        if(data.statusCode === 200){
          localStorage.setItem("validate-email",  validationEmail)
        }
        else{
          console.log("Something went wrong !!!");
        }
      })
      .catch(err => console.log('Error' + err))
  }

  return (
    <>
    <div style={openModal ? {display: "none"} : {display: 'block'}} className="auth-wrapper">
      <h2>Email Validation</h2>
      <form onSubmit={handleValidateEmail} className='auth-form'>
        <input value={validationEmail} onChange={(e) => setValidationEmail(e.target.value)} className='register-input validation__email-input' type="email" placeholder='Email' />
        <div className="field btn">
          <div class="btn-layer"></div>
          <input type="submit" value="NEXT" />
        </div>
      </form>
    </div>
      <ValidationModal openModal={openModal} setOpenModal={setOpenModal}/>
    </>
  )
}

export default EmailValidate