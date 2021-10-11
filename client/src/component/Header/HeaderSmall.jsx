import React, { useContext, useState } from 'react'
import ImageSearch from '../../container/ImageSearch'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { LogoutUser } from '../../context/Action';
import { FiMenu } from 'react-icons/fi'

const HeaderSmall = () => {

    const { isAuthenticated, dispatch } = useContext(Context);
    const auth = localStorage.getItem('auth');

    const [ toggle, setToggle ] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }
    const logout = () => {
        LogoutUser(dispatch)
    }

    return (
        <div className="flex flex-col w-screen overflow-hidden justify-around px-2">
            <div className="flex mx-auto justify-between w-full px-2">
                <p onClick={handleToggle} ><FiMenu className="font-bold w-8 h-12 flex" /></p>
                <ImageSearch />
            </div>
            {
                toggle ? (<div className="text-center mx-auto w-full pb-2 ">
                    <div className="mb-2 mx-5 border-gray-700  border-b-4">
                        <strong>
                            <a href='/' className="text-xl">Home</a>
                        </strong>
                    </div>
                    <div className="mb-2 mx-5 border-gray-700 border-b-4">
                        <a href={"/user/mylist"} className="px-1 text-xl "><strong>MyList</strong></a>
                    </div>
                    <div className="mx-auto text-xl my-auto overflow-hidden">
                        {
                            isAuthenticated || auth ? <div onClick={logout} className="mb-2 mx-5 border-gray-700 flex justify-around border-b-4">
                                <strong>Logout</strong>
                            </div> : (
                                <div className="flex flex-col justify-around m-auto">
                                    <div className="mb-2 mx-5 border-gray-700 flex justify-around border-b-4">
                                        <Link to='/register'><strong>Register</strong></Link>
                                    </div>
                                    <div className="mb-2 mx-5 border-gray-700 border-b-4">
                                        <Link to='/login'><strong>Login</strong></Link>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>) : null
            }
        </div>
    )
}

export default HeaderSmall
