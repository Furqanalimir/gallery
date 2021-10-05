import React, { useEffect, useContext } from 'react';
import Layout from './Layout';
import { Context } from '../context/Context'
import { getImages } from '../context/Action';
import ImageCard from './ImageCard';

const ImageList = () => {
  let { images, dispatch } = useContext(Context);

  useEffect(() => {
    getImages(dispatch)
  }, [ dispatch ]);

  return (
    <Layout>
      <div className="container overflow-hidden flex flex-wrap justify-around mx-auto md:w-full lg:justify-between">
        {
          images.map(image => {
            const tags = image.tags.split(',')
            return (
              <ImageCard key={image.id} image={image} tags={tags} />
            )
          })
        }
      </div>
    </Layout>
  )
}

export default ImageList;