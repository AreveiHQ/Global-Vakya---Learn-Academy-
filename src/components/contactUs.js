import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { slideInLeftVariants, slideInRightVariants, useScrollAnimation } from './ProviderFunctions';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// Validation schema
const contactSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  message: Yup.string().min(10, 'Message should be at least 10 characters').required('Message is required'),
});

const ContactForm = () => {
  const controls = useScrollAnimation();
  const [processing, setProcessing] = useState(false);



  // Setting up react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema), // Linking Yup schema
  });

  const onSubmit = (data) => {

    setProcessing(true);
    const templateParams = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        templateParams
      )
      .then(
        (response) => {
          setProcessing(false);
          toast.success('Submitted Successfully');
          reset(); // Reset form after successful submission
        },
        (error) => {
          setProcessing(false);
          toast.error(`FAILED...${error}`);
        }
      );
  };

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLICKEY);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-[97%] sm:w-[94%] md:w-[88%] lg:w-[84%] xl:w-[80%] font-Roboto" id="contact">
      <h2 className="font-semibold mb-6 text-center px-6 text-[clamp(1.6rem,2.3vw,2.5rem)] font-RobotoSlab">
        Let’s Get Connected
      </h2>
      <p className="mb-6 text-center text-xl px-6">If You Have Any Query, Please Contact Us</p>
      <div className="p-8 rounded-lg w-full flex flex-col-reverse lg:flex-row gap-8">
        <motion.form
          className="scroll-animated w-full lg:w-[60%] pb-8"
          initial="hidden"
          animate={controls}
          variants={slideInLeftVariants}
          onSubmit={handleSubmit(onSubmit)} // handleSubmit from react-hook-form
        >
          <div className="flex gap-6">
            <div className="mb-4 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                First name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first-name"
                type="text"
                placeholder="Jane"
                {...register('firstName')}
              />
              <p className="text-red-500 text-xs italic mt-1">{errors.firstName?.message}</p>
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name">
                Last name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="last-name"
                type="text"
                placeholder="Smitherton"
                {...register('lastName')}
              />
              <p className="text-red-500 text-xs italic mt-1">{errors.lastName?.message}</p>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="xyz@gmail.com"
              {...register('email')}
            />
            <p className="text-red-500 text-xs italic mt-1">{errors.email?.message}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Your message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your question or message"
              rows="4"
              {...register('message')}
            ></textarea>
            <p className="text-red-500 text-xs italic">{errors.message?.message}</p>
          </div>
   
          <div className="text-lg w-full">
            <button
              type="submit"
              disabled={processing}
              className="bg-yellow-500 hover:bg-yellow-600 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full max-w-xl relative flex justify-center mx-auto md:mx-0"
            >
              {processing ? (
                <span className="h-min my-auto">Processing...</span>
              ) : (
                <span className=" h-min my-auto">Submit</span>
              )}
              
            </button>
          </div>
          
        </motion.form>
        <motion.div
          className="scroll-animated flex justify-center items-center rounded-full w-full lg:w-[40%]  lg:px-6"
          initial="hidden"
          animate={controls}
          variants={slideInRightVariants}
        >
          <img src="/img/logo.png" className="w-1/2 lg:w-full" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
