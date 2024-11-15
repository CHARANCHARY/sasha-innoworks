import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Heading } from "../common/Heading";
import { contact } from "../data/dummydata";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        description: '',
    });
    const [errors, setErrors] = useState({});
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const form = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let currentErrors = {};
        if (!formData.name) currentErrors.name = 'Name is required';
        if (!formData.email) currentErrors.email = 'Email is required';
        if (!formData.subject) currentErrors.subject = 'Subject is required';
        if (!formData.description) currentErrors.description = 'Description is required';

        if (Object.keys(currentErrors).length > 0) {
            setErrors(currentErrors);
            return;
        }

        emailjs.sendForm('service_x3k634g', 'template_mjk44f7', form.current, '7kSP3qAYrNyBbc8Q2')
            .then(() => {
                setAlertMessage('Message sent successfully!');
                
                setShowAlert(true);
                setFormData({ name: '', email: '', subject: '', description: '' });
                setTimeout(() => setShowAlert(false), 5000); // Hide after 5 seconds

            })
            .catch((error) => {
                console.log('FAILED...', error.text);
                setAlertMessage('Failed to send message.');
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 5000); // Hide after 5 seconds
            });
    };

    return (
        <>
            <div className='contact'>
                <div className='container'>
                    <Heading title='Keep In Touch' />
                    {showAlert && <div className='alert-box'>{alertMessage}</div>}
                    <div className='contact-section'>
                        <div className='right'>
                        <form ref={form} onSubmit={handleSubmit}>
                                <div className='flex'>
                                    <div>
                                        <input
                                            type='text'
                                            name='name'
                                            placeholder='Name'
                                            data-aos='flip-left'
                                            onChange={handleChange}
                                            value={formData.name}
                                        />
                                        {errors.name && <p style={{ color: 'red', fontSize: '13px',margin: '0',padding: '0' }}>{errors.name}</p>}
                                    </div>
                                    <div>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                            data-aos='flip-right'
                                            onChange={handleChange}
                                            value={formData.email}
                                        />
                                        {errors.email && <p style={{ color: 'red', fontSize: '13px',margin: '0',padding: '0' }}>{errors.email}</p>}
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type='text'
                                        name='subject'
                                        placeholder='Subject'
                                        data-aos='flip-up'
                                        onChange={handleChange}
                                        value={formData.subject}
                                    />
                                    {errors.subject && <p style={{ color: 'red', fontSize: '13px',margin: '0',padding: '0' }}>{errors.subject}</p>}
                                </div>
                                <div>
                                    <textarea
                                        name='description'
                                        placeholder='Description'
                                        cols='30'
                                        rows='10'
                                        data-aos='flip-down'
                                        onChange={handleChange}
                                        value={formData.description}
                                    ></textarea>
                                    {errors.description && <p style={{ color: 'red', fontSize: '13px',margin: '0',padding: '0' }}>{errors.description}</p>}
                                </div>
                                <button type='submit'>Submit</button>
                            </form>
                        </div>
                        <div className='left'>
                            {contact.map((item, index) => (
                                <div className='box' data-aos='zoom-in' key={index}>
                                    <i>{item.icon}</i>
                                    <p className="contact-p">{item.text1}</p>
                                    <p className="contact-p">{item.text2}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};











































// import React, { useState,useRef } from 'react';
// import emailjs from '@emailjs/browser';

// // import axios from 'axios';
// import { Heading } from "../common/Heading";
// import { contact } from "../data/dummydata";

// export const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         description: '',
//     });

//     const [errors, setErrors] = useState({}); // State to track errors for each field

        
// const handleChange = (e) => {
//     setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//     });
    
//     // Clear error for the field being edited
//     setErrors({
//         ...errors,
//         [e.target.name]: '',
//     });
// };

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation check: Ensure all fields are filled
//     let currentErrors = {};
//     if (!formData.name) currentErrors.name = 'Name is required';
//     if (!formData.email) currentErrors.email = 'Email is required';
//     if (!formData.subject) currentErrors.subject = 'Subject is required';
//     if (!formData.description) currentErrors.description = 'Description is required';

//     if (Object.keys(currentErrors).length > 0) {
//         setErrors(currentErrors); // Set error messages
//         return; // Prevent form submission
//     }


//     emailjs
//         .sendForm('service_x3k634g', 'template_mjk44f7', form.current, {
//           publicKey: '7kSP3qAYrNyBbc8Q2',
//         })
//         .then(
//           () => {
//             console.log('SUCCESS!');
//           },
//           (error) => {
//             console.log('FAILED...', error.text);
//           },
//         );
//     // try {
//     //     const response = await axios.post('http://localhost:5000/api/contact', formData);
//     //     alert(response.data.message);
//     // } catch (error) {
//     //     alert('Error submitting form');
//     //     console.error(error);
//     // }
// };

//     const form = useRef();

//     // const sendEmail = (e) => {
//     //   e.preventDefault();
  
      
//     // };

//     return (
//         <>
//             <div className='contact'>
//                 <div className='container'>
//                     <Heading title='Keep In Touch' />
//                     <div className='contact-section'>
//                         <div className='right'>
//                             <form ref={form} onSubmit={handleSubmit}>
//                                 <div className='flex'>
//                                     <div>
//                                         <input
//                                             type='text'
//                                             name='name'
//                                             placeholder='Name'
//                                             data-aos='flip-left'
//                                             onChange={handleChange}
//                                             value={formData.name}
//                                         />
//                                         {errors.name && <p style={{ color: 'red', fontSize: '13px',margin: '0',padding: '0' }}>{errors.name}</p>}
//                                     </div>
//                                     <div>
//                                         <input
//                                             type='email'
//                                             name='email'
//                                             placeholder='Email'
//                                             data-aos='flip-right'
//                                             onChange={handleChange}
//                                             value={formData.email}
//                                         />
//                                         {errors.email && <p style={{ color: 'red', fontSize: '13px',margin: '0',padding: '0' }}>{errors.email}</p>}
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <input
//                                         type='text'
//                                         name='subject'
//                                         placeholder='Subject'
//                                         data-aos='flip-up'
//                                         onChange={handleChange}
//                                         value={formData.subject}
//                                     />
//                                     {errors.subject && <p style={{ color: 'red', fontSize: '13px',margin: '0',padding: '0' }}>{errors.subject}</p>}
//                                 </div>
//                                 <div>
//                                     <textarea
//                                         name='description'
//                                         placeholder='Description'
//                                         cols='30'
//                                         rows='10'
//                                         data-aos='flip-down'
//                                         onChange={handleChange}
//                                         value={formData.description}
//                                     ></textarea>
//                                     {errors.description && <p style={{ color: 'red', fontSize: '13px',margin: '0',padding: '0' }}>{errors.description}</p>}
//                                 </div>
//                                 <button type='submit'>Submit</button>
//                             </form>
//                         </div>
//                         <div className='left'>
//                             {contact.map((item, index) => (
//                                 <div className='box' data-aos='zoom-in' key={index}>
//                                     <i>{item.icon}</i>
//                                     <p className="contact-p">{item.text1}</p>
//                                     <p className="contact-p">{item.text2}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

























// // const handleChange = (e) => {
// //     setFormData({
// //         ...formData,
// //         [e.target.name]: e.target.value,
// //     });
    
// //     // Clear error for the field being edited
// //     setErrors({
// //         ...errors,
// //         [e.target.name]: '',
// //     });
// // };

// // const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Validation check: Ensure all fields are filled
// //     let currentErrors = {};
// //     if (!formData.name) currentErrors.name = 'Name is required';
// //     if (!formData.email) currentErrors.email = 'Email is required';
// //     if (!formData.subject) currentErrors.subject = 'Subject is required';
// //     if (!formData.description) currentErrors.description = 'Description is required';

// //     if (Object.keys(currentErrors).length > 0) {
// //         setErrors(currentErrors); // Set error messages
// //         return; // Prevent form submission
// //     }

// //     try {
// //         const response = await axios.post('http://localhost:5000/api/contact', formData);
// //         alert(response.data.message);
// //     } catch (error) {
// //         alert('Error submitting form');
// //         console.error(error);
// //     }
// // };