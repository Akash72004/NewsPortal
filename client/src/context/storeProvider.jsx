import React from 'react'
import storeReducer from './storeReducer'
import storeContext from './storeContext'
import { useReducer } from 'react';
import decode_token from '../utils/index';


const StoreProvider = ({children}) => {

    const [store, dispatch ] = useReducer(storeReducer,{
        userInfo : decode_token(localStorage.getItem('newsToken')),
        token : localStorage.getItem('newsToken') || ""
    })

    return <storeContext.Provider value={{ store , dispatch }}>
        {children}
    </storeContext.Provider>
}

export default StoreProvider