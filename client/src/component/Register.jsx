import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../component/Layout'

const Login = () => {
  return (
    <Layout>
      <div className="flex mx-auto px-auto py-12 my-12">
        <form className="mx-auto w-full max-w-lg py-6">
          <label className="flex py-2" > <p className="text-red-500">* </p>required</label>
          <div className="flex flex-col ">
            <h1 className="text-2xl py-4 text-gray-800">Enter Your Credentials</h1>
            <label className="flex" > <p className="text-red-500">* </p>Name </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="border-2 border-gray-500 rounded h-8  px-2 focus:outline-none"
            />
            <label className="flex" > <p className="text-red-500">* </p>Email </label>
            <input
              type="text"
              placeholder="Enter your Email"
              className="border-2 border-gray-500 rounded h-8  px-2 focus:outline-none"
            />
            <label className="flex" > <p className="text-red-500">* </p>Password </label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="border-2 border-gray-500 rounded h-8  px-2 focus:outline-none"
            />
            <label className="flex" > <p className="text-red-500">* </p>Confirm Password </label>
            <input
              type="password"
              placeholder="Confirm your Password"
              className="border-2 border-gray-500 rounded h-8  px-2 focus:outline-none"
            />
            <button
              className="border-2 border-gray-500 rounded h-8  px-2 focus:outline-none my-2 bg-gray-700 text-gray-100"
            >Submit</button>
            <p>alredy have an account? <Link to="/login" className="text-blue-600">login</Link></p>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login;