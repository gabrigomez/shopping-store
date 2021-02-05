import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './ProductDetails.css'


const ProductDetails = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }
        fetchData()
    }, [])

    const product = products.find((x) => x.id == props.match.params.id)
    console.log(product)

    if (!product) {
        return (
            <div>
                Product not found!
            </div>
        )
    }
    return (
        <div className="container">
            <img className="productsImg" src={product.image} alt="image" />
            <div>
                <div className="productName"> {product.name} </div>
                <div className="productPrice"> R${product.price} </div>
                <div className="productDescription"> {product.description} </div>
            </div>
        </div>
    );
};

export default ProductDetails;