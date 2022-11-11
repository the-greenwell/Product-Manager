import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ProductContext } from '../context/product.context';

const ProductName = ({product}) => {
    console.log(product)
    return (
        <li className="list-group-item list-group-item-action text-center">
            <Link to={`/${product._id}`}>{product.name}</Link>
        </li>
    )
}

export const AllProducts = () => {
    const {products} = useContext(ProductContext);
    return (
        <ul className="list-group">
            {products?.map(product => <ProductName product={product} />)}
        </ul>
    )
}
