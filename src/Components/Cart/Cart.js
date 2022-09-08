import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import imgCart from './cart.png';
import CartItem from './CartItem';
import StripeContainer from "../../Stripe/StripeContainer";

const Cart = () => {

	const cartItems = useSelector(getCartItems);
	const totalPrice = useSelector(getTotalPrice);

	return(
	<div className='cartBox'>
		
		<img src={ imgCart } className="cartI" alt="cart"/>
		
		{cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
		<h4>Total: ${totalPrice}</h4>
		<StripeContainer/>
		
	</div>
	)
}

export default Cart;