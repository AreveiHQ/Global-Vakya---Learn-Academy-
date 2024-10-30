import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { slideInLeftVariants, slideInRightVariants, useScrollAnimation } from './ProviderFunctions';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import debounce from 'lodash.debounce';
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
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const onRecaptchaChange = (value) => {
    setRecaptchaValue(value); // Store the recaptcha token
  };

  // Setting up react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema), // Linking Yup schema
  });

  const onSubmit = debounce((data) => {
    if (!recaptchaValue) {
      toast.error('Please verify the reCAPTCHA');
      return;
    }
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
  },2000);

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
              placeholder="email@janesfakedomain.net"
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
          <div className="flex flex-col sm:flex-row gap-3">
          <div>
          <ReCAPTCHA
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
        onChange={onRecaptchaChange}
      />
          </div>
          <div className="text-lg w-full">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full max-w-xl relative flex justify-center mx-auto"
            >
              {processing ? (
                <span className="text-white">Processing</span>
              ) : (
                <span className="pl-2 h-min my-auto">Submit</span>
              )}
              {processing && (
                <svg
                  aria-hidden="true"
                  className="inline absolute right-5 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              )}
            </button>
          </div>
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
