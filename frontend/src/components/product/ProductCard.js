import React from 'react'
import { Link } from 'react-router-dom'

import './product-card.scss'

const ProductCard = ({ id, name, price, image, background}) => {
    return (
        <div className="card">
            <div className="card__title">
                <h3>{name}</h3>
            </div>
            <div className="card__body">
                <div className="card__image" style={{backgroundColor: background}}>
                    <img src={image} alt={name}/>
                </div>
            </div>
            <div className="card__footer">
                <h2>{price}₽</h2>
                <div className="card__action">
                    <button className="btn">В корзину</button>
                    <button className="btn"><Link to={`/products/${id}`}>Детали</Link></button>
                </div>
            </div>
        </div>

    )    
}

export default ProductCard