import React, { useEffect } from 'react'
// import axios from 'axios'
import '../../index.css';
import { useSelector, useDispatch } from 'react-redux'
// import spinner from './spinner2.svg'

import ProductsList from '..//product/ProductsList'
import { listProduct } from '../../actions/productAction';

function HomeScreen(props){
    // const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    const productList = useSelector(state => state.productList)
    const { products, loading, error} = productList;
    const dispatch = useDispatch()  

    useEffect(() => {
        dispatch(listProduct())
    }, [])
    return(
        <div>
            {loading ? (
                <div className="spinner">
                    <h2>Loading...</h2>
                </div>
            ) : error ? (<div>...error</div>) : (
                <div>
                    <ProductsList products={products} />
                </div>
            )}
        </div>
    )
}

export default HomeScreen