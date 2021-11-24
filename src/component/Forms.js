// import React from 'react'

import React, {useRef, useState} from 'react'
import './Forms.css'
import { Button } from './Button'


function Forms() {
const input1 = useRef("");
const input2 = useRef("");
const input3 = useRef("");
const input4 = useRef("");

const [formErr, setFormErr] = useState({

  emailErrorValue: '',
  messageError: '',
  nameError: '',
  numberError: '',
  formSuccess: ''
})

function isTel(email){
  if(!(email.match(/\d+$/))){
    setFormErr({
      ...formErr,
      emailErrorValue: 'Please enter a number',
    });
    return false;
  }
  return true;
}

const isEmpty = (value) => {
  if(value.length == 0){
    return true;
  }
  return false;
}

function formHandler(event){
  // event.preventDefault();
  let name = input1.current.value;
  let email = input2.current.value;
  let number = input3.current.value;
  let message = input4.current.value;


  async function sendData(url) {

    let data = {
      name: name,
      email: email,
      phone: number,
      message: message
    }
    try{
      let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      return true
    }catch(error){
      console.log(error);
      return false;
    }

    
  }
  
  if(isTel(number) && !isEmpty(name) && !isEmpty(email) && !isEmpty(message)){
     let response = sendData('https://educonsult.herokuapp.com/api/Contact');
     if(response){
       setFormErr({
        ...formErr,
        nameSuccess: 'Form submitted successfully',
      })
     }else{
       console.log('form not submitted');
       setFormErr({
        ...formErr,
        nameSuccess: 'Form not submitted',
      })
     }
     
  }else {
    if(!isEmpty(name)){
      setFormErr({
        ...formErr,
        nameError: 'This field can not be empty',
      })
    }else if(!isEmpty(message)){
      setFormErr({
        ...formErr,
        messageError: 'This field can not be empty',
      })      
    }
  }

}



      
    return (
        <div className="contact-formgroup" onSubmit={formHandler}>
            <form action="#" className="form">
                        <h2 className="heading-secondary">
                          <i>You can reach us here</i>
                          <p>{formErr.numberError}</p>
                        </h2>
                    {/* <div className="form-content"> */}
                        <div className="form__group">
                            <label htmlFor="name" className="form__label">Name</label>
                            <input type="text" name="name" ref={input1} id="name" className="form__input" placeholder="Full name"/>
                            <p>{formErr.nameError}</p>
                        </div>
                         <div className="form__group">
                             <label htmlFor="email" className="form__label">Email</label>
                           <input type="email" name="email" ref={input2} id="email" className="form__input" placeholder="Email"/>
                           <p>{formErr.emailError}</p>
                         </div>
                         <div className="form__group">
                             <label htmlFor="number" className="form__label"> Mobile Number</label>
                           <input type="tel" name="number" ref={input3} id="number" className="form__input" placeholder="Mobile Number"/>
                           <p>{formErr.numberError}</p>
                         </div>
                         <div className="form__group">
                            <label htmlFor="message" className="form__label">Message</label>
                            <textarea className="form__input" name="message" ref={input4} id="" cols="30" rows="10" placeholder="Type your message"></textarea>
                            <p>{formErr.numberError}</p>
                         </div>
                         <div className="form__group">
                           <button className="submit-btn" type='submit'>Submit</button>
                         {/* </div> */}
                    </div>
             </form>
                        
           
           
            
            
        </div>
        
    );
};

export default Forms;