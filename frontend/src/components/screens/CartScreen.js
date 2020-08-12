import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../actions/cartActions'

function CartScreen(props) {
    const productId =  props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const product = useSelector(state => state.cart)
    useEffect(() => {
        if (productId){
            dispatch(addToCart(productId, qty))
        }
    }, [])
    return <div className="cart">
        <div className="cart-list">
            {product.cartItems.map(item => 
                <div>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <div>{item.qty}</div>
                </div>
            )}
        </div>
        <div className="cart-action">
        </div>    
    </div>
}

export default CartScreen