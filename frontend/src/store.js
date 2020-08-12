import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducers'
import thunk from 'redux-thunk'

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS__EXTENSION__COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

const listener = store.subscribe(() => {
    console.log(store.getState())
})

export default store;