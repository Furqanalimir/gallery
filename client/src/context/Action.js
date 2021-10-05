import axios from 'axios';

export const getImages = async (dispatch) => {
  try
  {

    const { data } = await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&image_type=photo&pretty=true`)

    dispatch({
      type: 'GET_ALL_IMAGES',
      payload: data.hits
    })
  } catch (err)
  {
    console.log(err);
  }
}

export const searchImage = async (dispatch, { term }) => {
  try
  {
    const { data } = await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    dispatch({
      type: 'GET_ALL_IMAGES',
      payload: data.hits
    })
    console.log(data.hits)

  } catch (err)
  {
    console.log(err);
  }
}