import React, { useState } from 'react'
import styles from './Register.module.css'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  let navigate = useNavigate()

  const validationSchema = Yup.object({
    name: Yup.string().max(15,"name must be less than 15").min(2,"name must be more than 3").required("name is required"),
    email: Yup.string().email("invalid email").required("email is required"),
    password: Yup.string().matches(/^[A-Z][0-9]{3,8}$/,"password must start with uppercase letter and end with number range 3 to 8").required("password is required"),
    rePassword: Yup.string().matches(/^[A-Z][0-9]{3,8}$/,"password must start with one uppercase letter and end with numbers range 3 to 8").required("rePassword is required"),
    age: Yup.number().positive().integer().required("age is required"),
  })




  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      age: 0,
    },validationSchema,
    onSubmit: (values) => {
    console.log(values) 
    navigate("/login") 
    }
  })
  return <form action=""  onSubmit={formik.handleSubmit}>
  <div className='container mx-auto w-1/2  bg-cyan-900 p-10 rounded-md'>
    <h1 className='text-center text-white text-xl '>Register</h1>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-white" htmlFor="name">
        Name
      </label>
      <input onBlur={formik.handleBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" value={formik.values.name} onChange={formik.handleChange} />
      {formik.errors.name && formik.touched.name ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error</strong>
        <span className="block sm:inline pl-2">{formik.errors.name}</span>
      </div> : ""}
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-white" htmlFor="email">
        email
      </label>
      <input onBlur={formik.handleBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} />
      {formik.errors.email && formik.touched.email ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error</strong>
        <span className="block sm:inline pl-2">{formik.errors.email}</span>
      </div> : ""}
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-white" htmlFor="password">
        password
      </label>
      <input onBlur={formik.handleBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} />
      {formik.errors.password && formik.touched.password ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error</strong>
        <span className="block sm:inline pl-2">{formik.errors.password}</span>
      </div> : ""}
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-white" htmlFor="rePassword">
        rePassword
      </label>
      <input onBlur={formik.handleBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="rePassword" type="Password" placeholder="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} />
      {formik.errors.rePassword && formik.touched.rePassword? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error</strong>
        <span className="block sm:inline pl-2">{formik.errors.rePassword}</span>
      </div> : ""}
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-white" htmlFor="age">
        age
      </label>
      <input onBlur={formik.handleBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" placeholder="age" value={formik.values.age} onChange={formik.handleChange} />
      {formik.errors.age && formik.touched.age ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error</strong>
        <span className="block sm:inline pl-2">{formik.errors.age}</span>
      </div> : ""}
    </div>
    <div className='flex justify-center'>
    <button type='submit' className=" bg-white hover:bg-teal-700   py-4 px-4 rounded-full">
      <span className='far fa-edit'></span><span className='pl-2 hover:text-white '>Register</span>
    </button>
    </div>
  </div>
</form>

}
