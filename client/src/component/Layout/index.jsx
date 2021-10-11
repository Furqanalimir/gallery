import React, { useContext } from 'react'
import Header from '../Header/index'
import { Context } from '../../context/Context'

const Layout = (props) => {

  const { isLoading, errList } = useContext(Context);
  return (
    <div className="flex-row w-screen">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex flex-row w-full justify-center m-auto">
        {
          isLoading ? <h1 className="bg-yellow-300 p-4 rounded-lg animate-pulse fixed">
            Loading... </h1> : null
        }
        {
          errList ? <h1 className="bg-yellow-300  p-2 rounded-lg animate-pulse fixed">
            {errList}</h1> : null
        }
      </div>
      {props.children}
    </div>
  )
}

export default Layout;