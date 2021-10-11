import { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = {
  images: [],
  name: '',
  isLoading: false,
  searchLoading: false,
  isAuthenticated: false,
  authError: false,
  errMessage: '',
  searchResult: [],
  searchError: false,
  _productDetails: [],
  id: null,
  myList: [],
  errList: null,
}

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={{
      images: state.images,
      isLoading: state.isLoading,
      isAuthenticated: state.isAuthenticated,
      name: state.name,
      authError: state.authError,
      errMessage: state.errMessage,
      searchResult: state.searchResult,
      searchLoading: state.searchLoading,
      _productDetails: state._productDetails,
      searchError: state.searchError,
      myList: state.myList,
      errList: state.errList,
      dispatch
    }}
    >
      {children}
    </Context.Provider>
  )

}