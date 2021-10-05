import React, { useState, useContext } from 'react';
import { searchImage } from '../context/Action';
import { Context } from '../context/Context';

const ImageSearch = () => {

  const { dispatch } = useContext(Context);

  const [ term, setTerm ] = useState(null);

  const handleChange = (e) => {
    e.preventDefault()
    setTerm({ ...term, [ e.target.name ]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term)
    {
      searchImage(dispatch, term)
    }

  }

  return (
    <div>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex items-center border-b-2 border-teal-500 py-2 font-bold">
          <input type="text"
            name="term"
            value={term}
            placeholder="Type image name"
            onChange={(e) => handleChange(e)}
            className="appearance-none bg-transparent border-none w-full
                      text-gray-700 mr-3 py-1 px-4 leading-tight focus:outline-none"
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 hover:bg-teal-700
                        border-teal-500 hover:border-teal-700 text-sm bg-green-300
                        py-1 px-2 rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch;