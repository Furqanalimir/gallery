import React from 'react'
import Layout from './Layout';

const ProductDetails = () => {
  const url = "https://pixabay.com/get/gd057f12dfde85c22c229ced776f451b5da3f8cdd3badc8e43abc05b4f2002d84824ee7ced92b8661980c20ed552d56bab0b4cfce2d9ea99a52bf2db0e94a79da_1280.jpg";
  const profileUrl = "https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_960_720.jpg";
  return (
    <Layout>
      <div className="flex sm:flex-row   flex-col justify-around my-10 ">
        <div className="sm:w-2/3 sm:h-1/3 w-full py-6">
          <img src={url} alt="someting worng" className="overflow-hidden" />
        </div>
        <div className="sm:w-1/4 sm:py-6 sm:my-6  py-6 w-full shadow-lg">
          <img src={profileUrl} alt="not found" className="overflow-hidden mx-auto rounded-full h-24 w-24 " />
          <div className="text-center mx-auto">
            <p className="text-center mx-auto"><strong>Pewdiepie</strong></p>
            <button className="rounded-md  p-2 bg-green-300 text-blue-700">Add to cart</button>
            <p className="text-center mx-auto p-4">
              The cat is a domestic species of small carnivorous mammal.
              It is the only domesticated species in the family Felidae and is
              often referred to as the domestic cat to distinguish it from the
              wild members of the family.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default ProductDetails;

