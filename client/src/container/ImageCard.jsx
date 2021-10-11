import React from 'react';
import { useHistory } from 'react-router-dom';

const ImageCard = ({ image, tags }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/product/${image.id}`);
  };

  return (

    <div className="overflow-hidden rounded shadow-2xl py-14 h-sm  w-sm cursor-pointer" onClick={handleClick}>
      <div className="bg-cover  rounded w-full h-60 overflow-hidden"
        style={{ backgroundImage: `url(${image.largeImageURL})` }} />
      <div className="px-4 py-2">
        <div className="font-bold text-pink-500 text-xl mb-2 ">Photo by {image.user}</div>
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
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 my-1 py-1 text-sm font-semibold tex-gray-700 mr-2"
          >
            # {tag}
          </span>
        ))}
      </div>
    </div>

  );
};

export default ImageCard;
