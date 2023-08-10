import React from "react"
import { useState } from "react"


function InvesteeSignUp () {
    
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [about, setAbout] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [businessCategory, setBusinessCategory] = useState('')
    const [businessDescription, setBusinessDescription] = useState('')

    const handleName = (e) => setName(e.target.value)
    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleAbout = (e) => setAbout(e.target.value)
    const handleBusinessName = (e) => setBusinessName(e.target.value)
    const handleBusinessCategory = (e) => setBusinessCategory(e.target.value)
    const handleBusinessDescription = (e) => setBusinessDescription(e.target.value)

    function handleSubmit(e){
        e.preventDefault()
        console.log(name)
    }
    

    return (
        <form className="investeesignupform" onSubmit={handleSubmit} >
            <h1>Welcome to Connect</h1>

            <label htmlFor="name"> Full Name</label>
            <input value={name} onChange={handleName} type="name" placeholder="full name" id="name"/>

            <label htmlFor="username">Username</label>
            <input value={username} onChange={handleUsername} type="username" placeholder="username" id="username"/>

            <label htmlFor="password">Password</label>
            <input value={password} onChange={handlePassword} type="password" placeholder="********"id="password"/>

            <label htmlFor="about">About</label>
            <input value={about} onChange={handleAbout} type="text" placeholder="Tell us a bit about yourself!" id="about"/>

            <label htmlFor="businessName">Business Name</label>
            <input value={businessName} onChange={handleBusinessName} type="text" id="businessName"/>

            <label htmlFor="businessCategory">Business Category</label>
            {/* <input type="text" id="businessCategory"/> */}
            <select id="businessCategory">
                <option value={businessCategory} onChange={handleBusinessCategory} >Healthcare</option> 
                <option value={businessCategory} onChange={handleBusinessCategory}>Real Estate</option>
                <option value={businessCategory} onChange={handleBusinessCategory}>Financial Services</option>
                <option value={businessCategory} onChange={handleBusinessCategory}>information Technology (IT)</option> 
                <option value={businessCategory} onChange={handleBusinessCategory}>Food Services</option>
            </select>

            <label htmlFor="businessDescription">Business Description</label>
            <input value={businessDescription} onChange={handleBusinessDescription} type="text" placeholder="Tell us a bit about your business/ business idea!" id="businesDescription"/>

             <button type="submit" >Sign Up</button>

            {/* <label htmlFor="type">Account Type</label>
            select tag can also work on the business category
            <select id="type">
                <option value= "investor">Investor</option> 
                <option value="investee">Investee</option>
            </select> */}

           

            {/* <input type="submit" value="Sign Up" /> */}

        </form>

    )
}

export default InvesteeSignUp