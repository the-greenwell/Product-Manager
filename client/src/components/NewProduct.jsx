import React, {useState, useContext} from 'react';
import { ProductContext } from '../context/product.context';
import axios from 'axios';

export const NewProduct = () => {
    const {products, dispatch} = useContext(ProductContext);
    const [state, setState] = useState({
        name: '',
        price: 0,
        description: ''
    })
    const changeHandler = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(state)
        axios.post('http://localhost:8000/products', {...state})
            .then(res => {
                if(!res.data.err){
                    dispatch({type:'SET PRODUCTS', payload: [...products, res.data.product]})
                } else {
                    console.log(res.data.err)
                }
            })
    }
    return (
        <div className='container my-4'>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Product Name</label>
                    <input type="text" name="name" className="form-control" onChange={changeHandler} value={state.name} id="product-name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">Product Price</label>
                    <input type="number" name="price" className="form-control" onChange={changeHandler} value={state.price} id="product-price" step="0.01"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="product-description" className="form-label">Product Description</label>
                    <input type="text" name="description" className="form-control" onChange={changeHandler} value={state.description} id="product-description" />
                </div>
                <div className='row justify-content-center'>
                    <button className='btn btn-light col-3' type='submit'>create</button>
                </div>
            </form>
        </div>
    )
}
