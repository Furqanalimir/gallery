import React, { useContext } from 'react';
import Layout from '../component/Layout';
import { Context } from '../context/Context';
import List from './List';

const MyList = () => {

    const { myList } = useContext(Context);

    return (
        <Layout>
            <div className="text-2xl text-center flex-col justify-around">
                {
                    myList.length > 0 ? myList.map(item => <List key={item.id} {...item} />
                    ) : <div className="flex-col my-8">
                        <h1 className="font-bold text-gray-500 text-5xl">List Empty</h1>
                    </div>
                }

            </div>

        </Layout>
    )
}

export default MyList
