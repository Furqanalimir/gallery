import React from 'react';
import Layout from './Layout';

const ImageCard = ({ images }) => {
  return (
    <Layout>
      <div className="container overflow-hidden flex flex-wrap justify-around mx-auto md:w-full lg:justify-between">
        {

          images.map(image => {

            const tags = image.tags.split(',')

            return (
              <div className="overflow-hidden rounded shadow-2xl py-14 max-h-70  max-w-sm ">

                <div key={image.id} className="rounded w-fill ">
                  <img src={image.largeImageURL} alt="Not found" />
                </div>

                <div className="px-4 py-2">
                  <div className="font-bold text-pink-500 text-xl mb-2 ">
                    Photo by {image.user}
                  </div>
                  <ul>
                    <li>
                      <strong>Views: </strong>
                      {image.views}
                    </li>
                    <li>
                      <strong>Downloads: </strong>
                      {image.downloads}
                    </li>
                    <li>
                      <strong>Likes: </strong>
                      {image.likes}
                    </li>
                  </ul>
                </div>
                <div className="px-6 py-4">
                  {
                    tags.map((tag, index) =>
                      <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold tex-gray-700 mr-2">
                        # {tag}
                      </span>
                    )
                  }

                </div>
              </div>
            )
          }
          )

        }

      </div>
    </Layout>

  )
}

export default ImageCard;