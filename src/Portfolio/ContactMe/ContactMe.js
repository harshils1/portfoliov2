import React from 'react';
import './ContactMe.css';

export default function ContactMe() {
    return (
        <div>
        <form className='form'>
            <h1>Contact Me</h1>

            <label>Name</label>
            <input placeholder='Name'></input> 

            <label>Email</label>
            <input placeholder='Email'></input> 

            <label>Message</label>
            <textarea placeholder='Message'></textarea>
        </form>
        </div>
    );
}