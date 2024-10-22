import React from 'react'

export default function ApplyForm({language=null}) {
  return (
    <>
      <form
        className="bg-white text-black mx-auto md:ml-auto p-8 rounded-lg shadow-lg  "
>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[rgb(235,235,235)]" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[rgb(235,235,235)]" />
          </div>
          <div className="mb-4">
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
            <input type='text' id="language" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[rgb(235,235,235)] capitalize" {...(language? {value:{language}}:{})}/>

          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input type="text" id="contact" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[rgb(235,235,235)]" />
          </div>
          <div className='w-full flex justify-center items-center'>
          <button type="submit" className=" my-5 w-max bg-[rgb(234,179,8)] text-white px-3 py-2 rounded-md hover:bg-blue-600">Submit</button>
          </div>
        </form>
    </>
  )
}
