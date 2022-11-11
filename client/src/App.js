import {useContext, useEffect} from 'react';
import { ProductContext } from './context/product.context';
import 'bootstrap/dist/css/bootstrap.css';
import { AllProducts } from './components/AllProducts';
import { NewProduct } from './components/NewProduct';
import axios from 'axios';

function App() {
  const {dispatch} = useContext(ProductContext);
  useEffect(()=> {
    axios.get('http://localhost:8000/products')
      .then(res => {
        console.log(res.data)
        if(!res.data.err) {
          dispatch({type:'SET PRODUCTS', payload: res.data.products})
        } else {
          console.log(res.data.err)
        }
      })
  },[])
  return (
    <div className="container">
      <h3 className='display-3'>Product Manager</h3>
      <NewProduct />
      <hr/>
      <AllProducts />
    </div>
  );
}

export default App;
