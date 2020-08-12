import React, { useEffect, useState } from 'react'
import './product-screen.scss'
import '../product/product-card.scss'
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct } from '../../actions/productAction'

function ProductScreen(props){
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails)
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    console.log(product)
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id))
        return () => {

        }
    }, [])

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }
    return (
        <div>
        {loading ? (
            <div>Loading...</div>
        ) : error ? <div>error...</div> : (
            <div className="product-screen-container">
                <div className="product-screen-container__image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="card">
                    <div className="card__title">
                        <h3>{product.name}</h3>
                    </div>
                    <div className="card__description">
                        {product.description}
                    </div>
                    <div className="card__footer">
                        <h2>{product.price}₽</h2>
                        <select value={qty} onChange={e => setQty(e.target.value)}>
                            { [...Array(product.countInStock).keys()].map(i => 
                                <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                        </select>
                        <div className="card__action">
                            <button className="btn" onClick={handleAddToCart}>В корзину</button>
                        </div>
                    </div>
                    
                </div>            
            </div>
            )}
        </div>
    )
}

export default ProductScreen
