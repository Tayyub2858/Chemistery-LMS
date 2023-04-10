import React from 'react';
import './ContactStyle.css';
import Nav from '../../Modules/Nav/Nav';
import ContactHandler from './ContactHandler';
import { Grid } from '@material-ui/core';
function Contact() {
    const {fullName,
        setfullName,
        emailAddress,
        setemailAddress,
        message, 
        setmessage,
        contactInput}=ContactHandler();
  return (
   <>
   <Nav/>
    <div className="contact-container">
                <div className="contact-txt-container">
                    <div className="contact-txt">

                        <h3 className="contact-title">
                            Contact Us
                        </h3>
                        <h1 className="contact-heading">
                            HOW CAN WE HELP YOU?
                        </h1>
                    </div>
                </div>
            </div>
            <div className="contact-form-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="contact-form-txt">
                            <p className="contact-form-desc">
                                Not sure which path is right for you? Question about Corporate training or consulting?
                                Just want to talk? <span className='contact-form-b'>Drop us a line, we’re here to help.</span>
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="contact-form-input">
                            <p className='input-title'>Full Name</p>
                            <input onChange={(e) => setfullName(e.target.value)} value={fullName} type='text' className='contact-input' />
                            <p className='input-title'>Email</p>
                            <input onChange={(e) => setemailAddress(e.target.value)} value={emailAddress} type='text' className='contact-input' />
                            <p className='input-title'>Message</p>
                            <textarea onChange={(e)=>setmessage(e.target.value)}  value={message} name="message" className='form-msg' cols="55" rows="15" />
                            <button onClick={contactInput} className="query-submit">SUBMIT</button>
                        </div>
                    </Grid>
                </Grid>
            </div>
   </>
  )
}

export default Contact