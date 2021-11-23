// import React from 'react'

import React from 'react'
import './Forms.css'
import { Button } from './Button'

function Forms() {
    return (
        <div className="contact-formgroup">
            <form action="#" className="form">
                        <h2 className="heading-secondary">
                          <i>You can reach us here</i>
                        </h2>
                    {/* <div className="form-content"> */}
                        <div className="form__group">
                            <label for="name" className="form__label">Name</label>
                            <input type="text" name="name" id="name" className="form__input" placeholder="Full name" required/>
                        </div>
                         <div className="form__group">
                             <label for="email" className="form__label">Email</label>
                           <input type="email" name="email" id="email" className="form__input" placeholder="Email" required/>
                         </div>
                         <div className="form__group">
                            <label for="message" class="form__label">Message</label>
                            <textarea className="form__input" name="message" id="" cols="30" rows="10" placeholder="Type your message"></textarea>
                         </div>
                         <div className="form__group">
                           <button className="submit-btn">Submit</button>
                         {/* </div> */}
                    </div>
             </form>
                        
           
           
            
            
        </div>
        
    );
};

export default Forms;