import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css';
// import spinner from './spinner2.svg'

import ProductsList from './product/ProductsList'

function HomeScreen(props){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const { data } = await axios.get("data.json")
            setProducts(data.products)
            setIsLoading(false)
        }
        fetchData()
    }, [])
    return(
        <div>
            {isLoading ? (
                <div className="spinner">
                    <h2>Loading...</h2>
                </div>
            ) : (
                <div>
                    <ProductsList products={products} />
                </div>
            )}
        </div>
    )
}

export default HomeScreen