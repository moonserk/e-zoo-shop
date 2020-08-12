import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({products}) => (
    <div className="card-container">
        {console.log(products, "======>>")}
        {products.map(product => (
            <ProductCard key={product.id} {...product} />
        ))}
    </div>
)

export default ProductsList