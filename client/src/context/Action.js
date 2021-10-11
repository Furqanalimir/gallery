import axios from 'axios';

export const getImages = async (dispatch) => {

  try
  {
    dispatch({ type: 'GET_ALL_IMAGE_REQUEST' })
    const rand = Math.floor((Math.random() * 10) + 1);

    const { data } = await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${rand}&image_type=photo&pretty=true`);

    dispatch({
      type: 'GET_ALL_IMAGES',
      payload: data
    })

  } catch (err)
  {
    console.log('action getImages', err);

  }
};

export const searchImage = async (dispatch, { term }) => {
  try
  {

    dispatch({ type: 'GET_SEARCH_TERM' })
    const { data } = await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`);

    if (data.totalHits > 0)
    {
      dispatch({
        type: 'SEARCH_TERM',
        payload: data.hits
      })
    } else
    {
      console.log('action searchError TRUE')
      dispatch({
        type: 'SEARCH_TERM_ERROR'
      })
    }

  } catch (err)
  {
    dispatch({
      type: 'SEARCH_TERM_ERROR'
    })

  }
};

export const LoginUser = async (details, dispatch) => {

  try
  {

    const { data } = await axios.post('http://localhost:5000/api/user/login', details)

    dispatch({
      type: 'LOGIN_USER',
      payload: data
    })
  } catch (err)
  {
    dispatch({
      type: 'LOGIN_USER_ERROR',
      payload: err.response.data
    })
  }
};

export const LogoutUser = (dispatch) => {

  try
  {
    dispatch({
      type: 'LOGOUT_USER'
    })
  } catch (err)
  {
    dispatch({
      type: 'LOGOUT_USER_ERROR',
      payload: err.response.data
    })
  }
};

export const RegisterUser = async (details, dispatch) => {
  try
  {
    dispatch({ type: 'REGISTER_USER_REQUEST' });
    const res = await axios.post("http://localhost:5000/api/user/register", details);
    dispatch({
      type: 'REGISTER_USER',
      payload: res.data,
    })
  } catch (err)
  {
    console.log(err.response.data)
    dispatch({
      type: 'REGISTER__USER_ERROR',
      payload: err.response.data
    })
  }
};


export const getproductDetails = async (dispatch, id) => {

  try
  {
    const { data } = await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&id=${id}`)
    dispatch({
      type: 'PRODUCT_DETAILS',
      payload: data.hits
    })
  } catch (err)
  {
    console.log('action getproductDetails', err);
  }

}

export const checkAuth = async (dispatch) => {
  try
  {
    const token = localStorage.getItem('token');

    await axios.get('http://localhost:5000/api/user/check', {
      headers: {
        'x-auth-token': `${token}`
      }
    });

  } catch (err)
  {
    dispatch({
      type: 'LOGOUT_USER'
    })
  }
};

export const getMylist = async (dispatch) => {
  try
  {
    dispatch({
      type: 'REQUEST_GET_MYLIST'
    })
    const token = window.localStorage.getItem('token');
    const config = {
      headers: {
        'x-auth-token': token
      }
    }
    const res = await axios.get('http://localhost:5000/api/user/mylist/get', config);

    const data = [];
    for (let i = 0; i < res.data.length; i++)
    {
      const myList = await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&id=${res.data[ i ]}`);
      myList.data.hits.map(item => data.push(item));
    }

    dispatch({
      type: 'GET_MYLIST',
      payload: data
    })

  } catch (err)
  {
    console.log('action 150', err);
    dispatch({
      type: 'ERROR_GET_MYLIST'
    })

  }
};

export const addList = async (dispatch, id) => {
  try
  {
    const token = window.localStorage.getItem('token');
    const config = {
      headers: {
        'x-auth-token': token
      }
    }
    const { data } = await axios.post('http://localhost:5000/api/user/mylist/add', { id }, config)
    dispatch({
      type: 'ADD_ITEM_MYLIST',
      payload: data
    })
  } catch (err)
  {
    dispatch({
      type: 'ERROR_ADD_ITEM_MYLIST',
      payload: err.response.data
    })
  }
};
export const removeList = async (dispatch, id) => {
  try
  {
    const token = window.localStorage.getItem('token');

    const config = {
      headers: {
        'x-auth-token': token
      }
    }
    const { data } = await axios.delete(`http://localhost:5000/api/user/mylist/remove/${id}`, config)
    dispatch({
      type: 'REMOVE_ITEM_MYLIST',
      payload: data
    })
  } catch (err)
  {
    dispatch({
      type: 'ERROR_REMOVE_ITEM_MYLIST',
      payload: err.response.data,
    })
  }
}