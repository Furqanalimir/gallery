import React, { useContext } from 'react'
import ImageSearch from '../../container/ImageSearch'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { LogoutUser } from '../../context/Action'
import HeaderSmall from './HeaderSmall'

const Header = () => {

  const { isAuthenticated, dispatch } = useContext(Context);
  const auth = localStorage.getItem('auth');


  const logout = () => {
    LogoutUser(dispatch)
  }

  return (
    <div className="container flex-col overflow-hidden 
    cursor-pointer w-full mx-auto h-19 fixed justify-around bg-white ">
      <div className="w-full md:flex hidden">
        <div className="my-auto mx-auto ">
          <strong>
            <a href='/' className="text-xl focus:text-gray-300">Home</a>
          </strong>
        </div>
        <div className="my-auto mx-auto md:mb-auto">
          <a href={"/user/mylist"} className="px-1 text-xl focus:text-gray-300">
            <strong>MyList</strong>
          </a>
        </div>
        <div className="flex my-auto justify-center">
          <ImageSearch />
        </div>

        <div className="my-auto mx-auto md:mb-auto">

          {
            isAuthenticated || auth ? <div className="flex justify-around">
              <div className="flex my-auto justify-center gap-12">

                <div>
                  <strong className="px-1 text-xl focus:text-gray-300" onClick={logout}>Logout</strong>
                </div>
              </div>
            </div> : (
              <div className="flex flex-col justify-around sm:flex sm:flex-row ">
                <Link to='/register' className="flex justify-around  px-4 text-xl focus:text-gray-300"><strong>Register</strong></Link>
                <Link to='/login' className="flex justify-around text-xl focus:text-gray-300" ><strong className="px-1">Login</strong></Link>
              </div>
            )
          }
        </div>
      </div>
      <div className="w-full flex md:hidden">
        <HeaderSmall />
      </div>
    </div>
  )
}


export default Header;


