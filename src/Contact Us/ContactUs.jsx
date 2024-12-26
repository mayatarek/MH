import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function ContactUs() {
  return (
    <>

        <div>
                <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <img id="contactUsPic" src="/src/assets/home.jpg" className="img-fluid" alt="Contact Us Picture"></img>
                </div>
                <div className="col-md-6" id="bestSellingSection">
                    <h2 className="contactUsTitle">
                        Contact Us
                    </h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Enter Name:</label>
                            <input className="form-control contact" id="name" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Enter Email:</label>
                            <input className="form-control contact" id="email" type="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Enter Message:</label>
                            <textarea className="form-control contact" id="message" rows="3"></textarea>
                        </div>
                        <button type="submit" id="submitButton" >Submit</button>
                    </form>

                </div>
            </div>
        </div>

       </div>
    </>

  )
}

export default ContactUs
