import Nav from '../components/navbar';
import Footer from '../components/footer';
import CheckOut from '../components/checkout';
import { useDispatch, useSelector } from 'react-redux';
import { addAddressAC, setShipAddressAC, placeOrderAC, emptyCartAC} from '../action';
import { useNavigate } from 'react-router-dom';


const CheckoutPage= () => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state =>state.cart.items)
  const order = useSelector(state => state.order)
  const user = useSelector(state=>state.user)

const addAddress = (address)=>{
  dispatch(addAddressAC(address))
}

const setShipAddress = (shipping_address)=>{
  dispatch(setShipAddressAC(shipping_address))
}

const placeOrder = ()=>{
  if(order.shipping_address){
    dispatch(placeOrderAC(order,navigate))
    dispatch(emptyCartAC())
  }else{
    alert('Choose a Shipping Address')
  }
}

  return (
    <>
    <Nav cartCount={cartItems.length}></Nav>
    <CheckOut order={order} user={user} addAddress={addAddress} setShipAddress={setShipAddress} placeOrder={placeOrder}></CheckOut>
    <Footer></Footer>
    </>
  );
}

export default CheckoutPage;