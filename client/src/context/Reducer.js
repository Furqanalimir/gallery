const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case 'REQUEST_GET_MYLIST':
    case 'GET_ALL_IMAGE_REQUEST':
      return {
        ...state,
        isLoading: true,
      };

    case 'GET_ALL_IMAGES':

      return {
        ...state,
        images: payload.hits,
        isLoading: false,
      };

    case 'GET_SEARCH_TERM':
      return {
        ...state,
        searchLoading: true,
        searchError: true,
        searchResult: []
      };

    case 'SEARCH_TERM':
      return {
        ...state,
        searchLoading: false,
        searchError: false,
        searchResult: payload
      };

    case 'SEARCH_TERM_ERROR':
      console.log('SEARCH_TERM_ERROR reducer')
      return {
        ...state,
        searchLoading: false,
        searchError: true
      };

    case 'LOGIN_USER_REQUEST':
    case 'REGISTER_USER_REQUEST':
      return {
        ...state,
        isLoading: true,
        authError: false,
        errMessage: null,
      };

    case 'REGISTER_USER':
    case 'LOGIN_USER':
      localStorage.setItem('token', payload.token);
      localStorage.setItem('auth', true);
      localStorage.setItem('name', payload.name);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        authError: false,
        errMessage: null,
        name: payload.name,
      };

    case 'PRODUCT_DETAILS':
      return {
        ...state,
        _productDetails: payload.data
      };

    case 'LOGOUT_USER':
      localStorage.setItem('auth', false);
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        authError: false,
        errMessage: null,
      };

    case 'LOGOUT_USER_ERROR':
    case 'LOGIN_USER_ERROR':
    case 'REGISTER__USER_ERROR':
      localStorage.setItem('auth', false);
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        authError: true,
        errMessage: payload,
      };
    case 'ADD_ITEM_MYLIST':
      return {
        ...state,
      }
    case 'ERROR_REMOVE_ITEM_MYLIST':
    case 'ERROR_ADD_ITEM_MYLIST':
      return {
        ...state,
        errList: payload
      }
    case 'REMOVE_ITEM_MYLIST':
      return {
        ...state,
        errList: payload
      };
    case 'ERROR_GET_MYLIST':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_MYLIST':
      return {
        ...state,
        myList: payload,
        isLoading: false
      }

    default: return state;
  }
}

export default Reducer;
