import React from 'react';
import styles from '../css/Form.module.css'
import { ContactUs } from './ContactUs';

function Form(){
    return(
        <div className={styles.submit}>
            <h1 style={{textAlign:"center"}}>Contact Me!</h1>
            <h3 style={{textAlign:"center", marginBottom:"20px"}}>I will get back to you as soon as possible</h3>
            <ContactUs/>
        </div>
    );
}

export default Form