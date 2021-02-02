import React, { useEffect, useState } from 'react';
import axios from 'axios'

// import data from '../data';
import Product from '../components/Product'

const ProductScreen = () => {    
    const [products, setProducts] = useState([])    
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }
        fetchData()
    }, [])
    return (
        <div className="products">            
                {products.map((product) => (
                    <Product product={product}></Product>
                ))}            
        </div>

    );
};

export default ProductScreen;