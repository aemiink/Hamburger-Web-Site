import React from 'react';
import contactImage from '../assets/contact.png'
import '../styles/contact.css'

function Contact() {
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

    // Form başarıyla doldurulduğunda gönder
    console.log("Form submitted:", { name, email, message });
}
    
    return (
        <div className="contact" style={{backgroundImage: `url(${contactImage})`}}>

            <div className="rightside">
                <h1> Contact With Us!</h1>
                <form>
                    <label>
                        Your Name:
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="contact-form"
                        />
                    </label>
                    <label>
                        Your Email:
                        <input
                            type="email"
                            name="mail"
                            placeholder="Your Mail Address"
                            className="contact-form"/>
                    </label>
                    <label>
                        Your Message:
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="contact-form text-area"
                            rows="10"
                        />
                    </label>
                    <button onClick={handleSubmit}> Send! </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
