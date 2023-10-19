import { useState } from 'react';
import emailjs from 'emailjs-com';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// ... Your imports and existing code

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // If the input field is 'email', convert the value to lowercase
    const updatedValue = name === 'email' ? value.toLowerCase() : value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS integration information
    const serviceId = 'service_a8v6llr';
    const templateId = 'template_21ktq2q';
    const userId = 'r0BCs2Y3UogaYdsNU';

    // Send the email
    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setIsSuccessMessageVisible(true);
        setIsErrorMessageVisible(false);
      })
      .catch((error) => {
        console.error('Error sending the email:', error);
        setIsSuccessMessageVisible(false);
        setIsErrorMessageVisible(true);
      });
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* ... Your existing code */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                placeholder='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='input'
              />
              <input
                type='text'
                placeholder='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='input'
              />
            </div>
            <input
              type='text'
              placeholder='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              className='input'
            />
            <textarea
              placeholder='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='textarea'
            ></textarea>
            {/* ... Your existing success and error message display */}
            {isSuccessMessageVisible && (
              <div className="text-green-500">Message sent successfully!</div>
            )}

            {isErrorMessageVisible && (
              <div className="text-red-500">Error sending the message. Please try again.</div>
            )}
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Send a text
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
            {/* Phone number link */} {/* Mailto link */}
            <p className="text-sm">
              Reach me at{' '}
              <a href='tel:+1(857)385-9590' className="text-accent underline">
                +1(857)385-9590 ,  
              </a>{' '} 
              Or you can{' '}
              <a href='mailto:purushothaman.pr@northeastern.edu' className="text-accent underline">
                send an email
              </a>
              {' '}directly.
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
