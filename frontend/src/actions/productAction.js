import axios from 'axios'
const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } = require("../constants/constants")

export const listProduct = () => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get("/api/products")
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })  
    } catch(error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
    }
}

export const detailsProduct = (productID) => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productID})
        const { data } = await axios.get('/api/products/' + productID)
        console.log(data, "<=")
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message})
    }
}
