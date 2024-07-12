import React from 'react'
import '../../components/contact/Contact.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import ColorButton from '@mui/material/Button';



const Contact = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        const serviceId = 'service_zitlsod';
        const templateId = 'template_28aryw4';
        const publicKey = 'YtN-1WxLdOjb28mNI';

        const templateParams = {
            from_name: firstName + ' ' + lastName,
            from_email: email,
            to_name: 'Samuel',
            message: message,
            subject: subject,
          };

        try {
            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
            console.log(response);
            setFirstName('');
            setLastName('');
            setEmail('');
            setSubject('');
            setMessage('');
            alert('Your mail is sent!');
        } catch (error) {
            console.log(error)
        }

    }


  return (
    <div id='contact' className='contact-container'>
            <div className="contact-title">
                <h1>Contact Us</h1>
            </div>
        <div className="contact-content">
            <p className='para'>Do you have any questions? Please do not hesitate to contact us. Our team will get back to you within a matter of hours to help you.</p>
            <div className="contact-text-form">
                <div className="contact-text">
                    <div className='address'>
                        <p className='address'><span><LocationOnOutlinedIcon className='icon' fontSize='small'/></span> KINGS PUBLICATIONS, <br />&nbsp;&nbsp;&nbsp;&nbsp;Four Season Residences IV, No. 193/1B, A2,<br />&nbsp;&nbsp;&nbsp;&nbsp;1st Floor, Anna Main Road, Kolapakkam,<br />&nbsp;&nbsp;&nbsp;&nbsp;Chennai - 600 128</p>
                        <p className='phone'><span><LocalPhoneOutlinedIcon className='icon' fontSize='small' /></span> 9840164041 / 9444517722</p>
                        <p className='email'><span><EmailOutlinedIcon className='icon' fontSize='small' /></span> <a href='mailto:kingspublicationsmedia@gmail.com'>kingspublicationsmedia@gmail.com</a></p>
                    </div>
                </div>
                <div className="contact-form">
                    <form  className='form' onSubmit={handleSubmit}>
                        <TextField className='item1' label="First name" required size='small' variant="outlined" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}/>
                        <TextField className='item2' label="Last name" size='small' variant="outlined" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}/>
                        <TextField className='item3' label="Email address" required size='small' variant="outlined" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        <TextField className='item4' label="Subject" required size='small' variant="outlined" 
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}/>
                        <TextField className='item5' label="Message" required size='small' multiline rows={3} variant="outlined" 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}/>
                        <ColorButton className='color-btn item6' variant="contained" type='submit'>SUBMIT</ColorButton>
                    </form>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Contact