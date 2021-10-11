import React, { useContext } from 'react';
import Layout from '../component/Layout';
import { Context } from '../context/Context'
import ImageCard from './ImageCard';

const SearchList = () => {

    let { searchResult, searchError, searchLoading } = useContext(Context);

    return (
        <Layout>
            {
                searchLoading ? (<div className="container overflow-hidden flex justify-around p-1/3">
                    <h1 className="bg-yellow-300 mt-24 p-4 rounded-lg animate-pulse">
                        Loading...
                    </h1> </div>) : (
                    searchError ? (
                        <div className="container overflow-hidden flex justify-around p-1/3">
                            <h1 className="bg-yellow-300 mt-24 p-4 rounded-lg animate-pulse">
                                Still Searching... could't load any results
                            </h1>
                        </div>)
                        : (
                            <div className="container overflow-hidden flex max-h-sm flex-wrap  mx-auto md:w-full justify-around">
                                {
                                    searchResult.map(image => {
                                        const tags = image.tags.split(',')
                                        return (
                                            <ImageCard key={image.id} image={image} tags={tags} />
                                        )
                                    })
                                }
                            </div>
                        ))

            }
        </Layout>
    )
}

export default SearchList;