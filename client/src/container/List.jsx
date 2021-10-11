import React, { useContext } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { removeList } from '../context/Action'
import { Context } from '../context/Context';
import { useHistory } from 'react-router-dom';
;

const List = ({ previewURL, id }) => {
    const history = useHistory();

    const { dispatch } = useContext(Context);

    const handleClick = () => {
        history.push(`/product/${id}`);
    };
    const remove = () => {
        removeList(dispatch, id);
        history.go(0)
    }

    return (
        <div className="flex gap-6 justify-around m-4">
            <div className="px-4" onClick={handleClick}>
                <img src={previewURL} alt="" />
            </div>
            <button className="my-auto p-4 active:bg-red-400 overflow-hidden" onClick={remove}>
                <AiOutlineDelete className="h-10 w-10" />
            </button>
        </div>
    )
}

export default List
