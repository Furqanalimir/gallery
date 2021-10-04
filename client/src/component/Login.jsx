import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../component/Layout'

const Login = () => {
  return (
    <Layout>
      <div className="flex mx-auto px-auto py-12 my-12">
        <form className="mx-auto w-full max-w-lg py-6">
          <div className="flex flex-col ">
            <h1 className="text-2xl py-2">Enter Your Credentials</h1>
            <label >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your Email"
              className="border-2 border-gray-500 rounded h-8  px-2 focus:outline-none"
            />
            <label> Password </label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="border-2 border-gray-500 rounded h-8  px-2 focus:outline-none"
            />
            <button
              className="border-2 border-gray-500 rounded h-8  px-2 focus:outline-none my-2 bg-gray-700 text-gray-100"
            >Submit</button>
          </div>
          <p>don't have an account? <Link to="/register" className="text-blue-600">register</Link></p>
        </form>
      </div>
    </Layout>
  )
}

export default Login;