import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Products(props){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/api/products")
            setProducts(data)
        }
        fetchData();
        return () => {

        };
    }, []);

    return (
        <div>
            {
                products.map(product => 
                <div key={product.id}>
                    {product.title}    
                </div>)
            }
        </div>        
    )
}