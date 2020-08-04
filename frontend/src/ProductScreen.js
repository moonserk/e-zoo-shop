import React, { useEffect, useState } from 'react'
import './product-screen.scss'
import './product/product-card.scss'
import axios from 'axios'

function ProductScreen(props){
    // console.log(props.match.params.id)
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        const fetchData = async () => {
            setIsLoading(true)
            const { data } = await axios.get("../data.json")
            setProduct(data.products.find(product => product.id === props.match.params.id))
            setIsLoading(false)
        }
        fetchData()
    }, [props.match.params.id])
    return (
        <div>
        {isLoading ? (
            <div>Loading...</div>
        ) : (
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
                        <div className="card__action">
                            <button className="btn">В корзину</button>
                        </div>
                    </div>
                    
                </div>            
            </div>
            )}
        </div>
    )
}

export default ProductScreen
