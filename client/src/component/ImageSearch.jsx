import React from 'react'

const ImageSearch = () => {
  return (
    <div>
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2 font-bold">
          <input type="text" name="text"
            placeholder="Type image name"
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