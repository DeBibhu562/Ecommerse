import Nav from '../components/navbar';
import Footer from '../components/footer';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from '../components/product-details';
import { useParams } from 'react-router-dom';
import {addToCartAC} from "../action"


const ProductDetailsPage =()=> {
  const dispatch = useDispatch();
  let { productId } = useParams();
  const cartItems = useSelector(state =>state.cart.items);
  const products = useSelector(state => state.product.products)
  const product = products.find(p=>p._id==productId)
  const addTOCart = (product)=>{
    dispatch(addToCartAC(product))
  }

  return (
    <>
    <Nav cartCount={cartItems.length}></Nav>
    <ProductDetails product={product} addTOCart={addTOCart}></ProductDetails>
    <Footer></Footer>
    </>
  );
}

export default ProductDetailsPage; 