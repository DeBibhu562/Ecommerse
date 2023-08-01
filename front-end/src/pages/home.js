import ProductList from '../components/product-list';
import Nav from '../components/navbar';
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthAC,addToCartAC, initializeCartAC, initializeProductsAC, initializeUserAC} from '../action';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(()=>{
    dispatch(checkAuthAC(navigate));
  },[])
  
  const products = useSelector(state => state.product.products)
  const cartItems = useSelector(state =>state.cart.items)

  useEffect(()=>{
    dispatch(initializeProductsAC());
  },[])

  const addTOCart = (product)=>{
    dispatch(addToCartAC(product))
  }



  return (
    <>
    <Nav cartCount={cartItems.length}></Nav>
    <Carousel></Carousel>
    <ProductList products={products} addTOCart={addTOCart}></ProductList>
    <Footer></Footer>
    </>
  );
}

export default Home;