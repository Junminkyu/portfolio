import React from 'react';
import style from '../css/Contact.module.css';
import Resume from './Resume';
import Form from './Form';

function Contact(){
    return(
        <div className={style.main} id="contact">
            <p className={style.title}>Contact</p>
            <div className={style.contact}>
                <Resume/>
                <Form/>
            </div>
        </div>
    );
}

export default Contact;