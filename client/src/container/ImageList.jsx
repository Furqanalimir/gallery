import React, { useContext } from 'react';
import Layout from '../component/Layout';
import { Context } from '../context/Context'
import ImageCard from './ImageCard';

const ImageList = () => {

  let { images } = useContext(Context);

  return (
    <Layout>
      <div className="container overflow-hidden flex max-h-sm flex-wrap  mx-auto md:w-full justify-around">
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