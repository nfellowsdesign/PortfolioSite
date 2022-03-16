
import styles from './Contact.module.css'
import { motion } from "framer-motion"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';


function Contact() {

    init("-5OrJnhNoXkfVopw1");

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cypbpdl', 'template_dlcm60c', form.current, '-5OrJnhNoXkfVopw1')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div className={styles.contactContainer}>
            <div className={styles.contactBox}>
                <div className={styles.contactCopy}>
                    <h1>Let's Work!</h1>
                </div>
                <div className={styles.contactForm}>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" className={styles.formControl} placeholder="Name" name="name" />
                        <input type="email" className={styles.formControl} placeholder="Email" name="email" />
                        <input type="text" className={styles.formControl} placeholder="Subject" name="subject" />
                        <textarea className={styles.formControl} cols="30" rows="8" placeholder="Your Message..." name="message" />
                        <input type="submit" className={styles.formButton} value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;