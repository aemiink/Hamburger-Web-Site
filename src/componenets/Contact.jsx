import React, { useState } from 'react';
import contactImage from '../assets/contact.png';
import '../styles/contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (!name || !email || !message) {
            alert("All fields are required!");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address!");
            return;
        }

        console.log("Form submitted:", { name, email, message });
    }

    return (
        <div className="contact" style={{ backgroundImage: `url(${contactImage})` }}>
            <div className="rightside">
                <h1>Contact With Us!</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Your Name:
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="contact-form"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Your Email:
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            className="contact-form"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Your Message:
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="contact-form text-area"
                            rows="10"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                    <button type="submit">Send!</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
