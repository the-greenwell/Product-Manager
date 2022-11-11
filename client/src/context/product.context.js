import { createContext, useReducer } from 'react';

export const ProductContext = createContext();

export const productReducer = (state,action) => {
    switch (action.type) {
        case 'SET PRODUCTS':
            return { ...state, products: action.payload };
        default:
            return state
    }
};

export const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer,{
        products: null,
    })
    return (
        <ProductContext.Provider value={{...state, dispatch}}>
            { children }
        </ProductContext.Provider>
    )
};