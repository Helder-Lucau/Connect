import React from "react";
import { useState } from "react";

function ContactUs(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")
    const [description, setDescription] = useState("")
    const [contactMessages, setContactMessages] = useState("")


    const handleFirstName = (e) => setFirstName(e.target.value)
    const handleLastName = (e) => setLastName(e.target.value)
    const handleEmailAddress = (e) => setEmailAddress(e.target.value)
    const handlePhoneNumber = (e) => setPhoneNumber(e.target.value)
    const handleMessage = (e) => setMessage(e.target.value)

    function handleSubmit(e){
        e.preventDefault()
        
        const contactMessageObj = {
            contactMessage: { 
                description: "string", completed: false
            }
        }

        fetch("http://localhost:3000/investees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactMessageObj)
        })
            .then(res => res.json())
            .then(data => addContactMessage(data))
    }

    function addContactMessage(newContactMessage){
        const updatedContactMessages = [...contactMessages, newContactMessage]
        setContactMessages(updatedContactMessages)
      }
    
      console.log(contactMessages)
      
    return(
        <>
            <form className="contactusform" onSubmit={handleSubmit} >
            <h1>Contact Us</h1>
            <p>Have a question or any remarks? We're here to help! Simply write us a message and we'll get back to you promptly.</p>

            <label htmlFor="firstName">First Name*</label>
            <input value={firstName} onChange={handleFirstName} type="name" placeholder="First Name" id="firstName"></input>


            <label htmlFor="lastName">Last Name*</label>
            <input value={lastName} onChange={handleLastName} type="name" placeholder="Last Name" id="lastName"></input>


            <label htmlFor="emailAddress">Email Address*</label>
            <input value={emailAddress} onChange={handleEmailAddress} type="email" placeholder="Email Address" id="emailAddress"></input>


            <label htmlFor="phoneNumber">Phone Number*</label>
            <input value={phoneNumber} onChange={handlePhoneNumber} type="text" placeholder="Phone Number" id="phoneNumber"></input>

            <label htmlFor="message">Message*</label>
            <input value={message} onChange={handleMessage} type="text" placeholder="Write your message..." id="message"></input>

            <button>Send Message</button>

            </form>
        </>
    )
}

export default ContactUs