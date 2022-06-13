import { createContext, useContext, useReducer } from 'react';

const initialState = {
  city: null,
  dates: [],
  options: {
    adult: null,
    children: null,
    room: null,
  },
};
export const SearchContext = createContext(initialState);

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return action.payload;
    case 'RESET_SEARCH':
      return initialState;
    default:
      return state;
  }
};

export const SearchProvider = (props) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a SearchProvider');
  }
  return context;
};
