import { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = {
  images: [],
  isLoading: false,
  isAuthenticated: false,
  error: null,
  errMessage: ''
}

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={{
      images: state.images,
      isLoading: state.isLoading,
      isAuthenticated: state.isAuthenticated,
      error: state.error,
      errMessage: state.errMessage,
      dispatch
    }}
    >
      {children}
    </Context.Provider>
  )

}