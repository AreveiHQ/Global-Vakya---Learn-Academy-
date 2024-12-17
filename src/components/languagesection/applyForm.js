import React, { useState } from 'react';
import { useForm,Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

// Validation schema
const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  language: yup.string().required('Language is required'),
  contact: yup
  .string()
  .required("Phone number is required")
  .matches(/^\+[1-9]\d{1,14}$/, "Phone number is invalid. Include country code."),
});

export default function ApplyForm({ language = '' }) {
  const [message, setMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  // UseForm hook
  const { register, handleSubmit,control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { language }, // Set default value for language prop
  });

  // Submit handler (similar to FormComponent)
  const onSubmit = async (data) => {
    setMessage('Loading....!');
    setLoading(true);

    fetch(process.env.REACT_APP_SHEETDB_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [
          { Name: data.name, Email: data.email, Language: data.language, Contact: data.contact },
        ],
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setMessage('You have been added successfully');
        setLoading(false);
        reset(); // Reset the form after submission
      })
      .catch(() => {
        setMessage('There was an error. Please try again.');
        setLoading(false);
      });
  };

  return (
    <>
      <form
        className="bg-white text-black mx-auto md:ml-auto p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[rgb(235,235,235)]"
            {...register('name')}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[rgb(235,235,235)]"
            {...register('email')}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
          {language?<input
            type="text"
            id="language"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[rgb(235,235,235)] capitalize"
            {...register('language')}
          />:<select
          id="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[rgb(235,235,235)]"
          {...register('language')}
        >
          <option value="">Select a Language</option>
         {["Dutch","Spanish","English","Japanese","Chinese","French"].map((val)=><option value={val}>{val}</option>)}
          </select>}
          {errors.language && <p className="text-red-500 text-sm mt-1">{errors.language.message}</p>}
        </div>

        <div className="mb-4">
        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
          Contact Number
        </label>
        <Controller
          name="contact"
          control={control}
          render={({ field }) => (
            <PhoneInput
              {...field}
              international
              defaultCountry="US"
              placeholder="Enter phone number"
              id="contact"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[rgb(235,235,235)]"
            />
          )}
        />
        {errors.contact && (
          <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>
        )}
      </div>

        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="my-5 w-max bg-[rgb(234,179,8)] text-white px-3 py-2 rounded-md hover:bg-blue-600"
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>

        {message && <p className="text-center mt-4">{message}</p>}
      </form>
    </>
  );
}
