import {createSlice} from '@reduxjs/toolkit'
import {products} from './db'

const initialState = {
    city: null,
    stateProduct: {}
}

const slices = createSlice({
    name: 'arenda',
    initialState,
    reducers:{
        setCity(state, action){
            return {
                ...state,
                city: action.payload,
            }
        },
        filterProduct(state,action){
            return {
                ...state,
                stateProduct: products[action.payload]
            }
        }
    }
})
export const {setCity, filterProduct} = slices.actions
export default slices.reducer