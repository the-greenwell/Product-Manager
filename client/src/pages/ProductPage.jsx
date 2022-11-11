import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/product.context';
import { Link } from 'react-router-dom';

export const ProductPage = () => {
    const { products } = useContext(ProductContext);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(()=>{
        setProduct(...products.filter(product => product._id == id))
    },[])
    return (
        <div className='container'>
            <Link to='/' className='btn btn-outline-dark'>All Products</Link>
            <h3 className='display-3'>{product?.name}</h3>
            <h6>Price: ${product?.price}</h6>
            <h6>Description: {product?.description}</h6>
        </div>
    )
}
