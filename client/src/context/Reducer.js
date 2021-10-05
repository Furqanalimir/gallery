const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case 'GET_ALL_IMAGE_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_ALL_IMAGES':
      return {
        ...state,
        images: payload,
        isLoading: false,
      };
    case 'SEARCH_TERM':
      return {
        ...state,
        images: payload
      };
    default: return state;
  }
}

export default Reducer;