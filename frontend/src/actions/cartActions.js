import axios from 'axios'
import { ADD_TO_CART } from '../constants/constants'

export const addToCart = (productId, qty) => async (dispatch) => {
    try{
        const { data } = await axios.get("/api/products/" + productId)
        dispatch({type: ADD_TO_CART, payload: {
            product: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }})
    }catch(e){

    }
}