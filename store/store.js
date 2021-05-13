import {configureStore} from '@reduxjs/toolkit'
import reducer from '../store/slices'
import thunkMiddleware from 'redux-thunk'

export const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunkMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})