import React, { useState, useEffect, useContext } from 'react';
import Layout from '../component/Layout';
import { Context } from '../context/Context';
import { getproductDetails, addList } from '../context/Action'
import { CgLock } from 'react-icons/cg'
import { saveAs } from 'file-saver';
import { Link, Redirect } from 'react-router-dom';
import spinner from './spinner/spinner.gif';

const ProductDetails = (props) => {

  const { dispatch } = useContext(Context);

  const id = parseInt(props.match.params.id);

  const [ prod, setProd ] = useState([]);
  const isAuthenticated = localStorage.getItem('auth');

  useEffect(() => {
    getproductDetails(dispatch, id);
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&id=${id}`)
      .then(dat => dat.json())
      .then(data => setProd(...data.hits))
  }, [ id, dispatch ])

  const tags = prod.tags ? prod.tags.split(" ") : Math.floor((Math.random() * 135450) + 1);
  const prev = prod.userImageURL;
  const url = prod.largeImageURL;

  const download_image = () => {
    saveAs(`${url}`, `${tags[ 0 ]}`);
  };

  const handleList = () => {
    if (isAuthenticated)
    {
      addList(dispatch, prod.id)
    }
    else
    {
      <Redirect to="/login" />
      return null;
    }
  }

  return (
    <Layout>
      <div className="flex md:flex-row flex-col justify-around mt-24"
      >
        <div className="md:w-3/5 w-full">
          {
            url ? <img src={url} alt="" className="" /> : <img src={spinner} alt="" />
          }
        </div>

        <div className="md:w-1/3   py-6 w-full shadow-lg bg-blue-200">
          {
            prev ? <img src={prev} alt="" className="overflow-hidden mx-auto gb-local rounded-full h-24 w-24" /> :
              <img src={spinner} alt="" className="overflow-hidden mx-auto gb-local rounded-full h-24 w-24" />
          }
          <div className="my-4 bg-gray-200  px-12 overflow-hidden">
            <div className="overflow-hidden border-4  p-2">
              <p className="mx-auto text-gray-500">
                <strong className=" text-gray-600">Name </strong>{prod.user}
              </p>
              <p className="mx-auto text-gray-500 ">
                <strong className=" text-gray-600"> Likes  </strong>
                {prod.likes}
              </p>
              <p className="mx-auto text-gray-500">
                <strong className=" text-gray-600">Collections</strong> {prod.collections}
              </p>
              <p className="mx-auto text-gray-500">
                <strong className=" text-gray-600">Downloads</strong> {prod.downloads}
              </p>
              <p className="mx-auto text-gray-500">
                <strong className=" text-gray-600">Views</strong> {prod.views}
              </p>
              <div className="my-4 bg-green-500 w-full rounded-2xl px-3 py-1 
                                    overflow-hidden text-4 cursor-pointer 
                                    hover:bg-green-300 
                                     text-gray-800 text-center">
                <button onClick={download_image}>free download
                </button>

              </div>
              {
                isAuthenticated ?
                  (

                    <div className="my-4 bg-green-500 rounded-2xl cursor-pointer 
                  justify-center size-lg flex px-auto py-1 overflow-hidden text-gray-800
                  hover:bg-green-300 " onClick={handleList}>
                      Add to MyList
                    </div>
                  ) :
                  <div className="flex-col jusify-around">
                    <Link to={"/login"}>
                      <div className="my-4 bg-green-500 rounded-2xl cursor-pointer 
                       justify-center size-lg flex gap-2 px-auto py-1 overflow-hidden text-gray-800
                     hover:bg-green-300">
                        Add to MyList
                        <CgLock className="font-bold w-5 h-5 flex" />
                      </div>
                    </Link>

                  </div>

              }


            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default ProductDetails;

