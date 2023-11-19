import React from 'react'
import SubmitButton from './SubmitButton'
import{ useState } from 'react'

import { useFormik } from 'formik'

const ContactForm = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const sendForm = async (data) => { 
        data = JSON.stringify(data); 
        
        data = await fetch("https://win23-assignment.azurewebsites.net/api/contactform", { 
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: data 
        });

        if (data.status != 200){ 
            setSuccessMessage(null);
            setErrorMessage(`Error: Status code ${data.status}`);
        }

        else{ 
            setErrorMessage(null);
            setSuccessMessage(`Thank you for your message, we will contact you back as soon as possible!`);
            formik.resetForm();
        }
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },

        onSubmit: () => {  
            if (!(/^[a-zA-Z ]{2,}$/.test(formik.values.name))) { 
                setSuccessMessage(null);
                setErrorMessage("Please enter a valid name.");
            }

            else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formik.values.email))){ 
                setSuccessMessage(null);
                setErrorMessage("Please enter a valid email address.");
            }

            else if (!formik.values.message){ 
                setSuccessMessage(null);
                setErrorMessage("Please enter a message.");
            }

            else{ 
                sendForm(formik.values);
            }

        }
    });
  return (
    // <!-- Contact sektion -->
        <section className="contact">
            <div className="contact-container">
                <h2>
                    Leave us a message for any information.
                </h2>
                <form onSubmit={formik.handleSubmit} noValidate>
                    <input type="text" name="name" title="Name" placeholder="Name*" value={formik.values.name} onChange={formik.handleChange} />
                    <input type="email" name="email" title="Email" placeholder="Email*" value={formik.values.email} onChange={formik.handleChange} />
                    <textarea name="message" title="Your message" placeholder="Your Message*" value={formik.values.message} onChange={formik.handleChange} />
                    {errorMessage ? ( 
                            <div className="error-message">
                                <i className="fa-solid fa-triangle-exclamation"></i> {errorMessage}
                            </div>
                    ) : (null)}
                    {successMessage ? ( 
                            <div className="error-message success-message">
                                <i className="fa-sharp fa-solid fa-check"></i> {successMessage}
                            </div>
                    ) : (null)}

                    <SubmitButton className="contact-button" text="Send Message" />
                </form>
            </div>
        </section>
  )
}

export default ContactForm