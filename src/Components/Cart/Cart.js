import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import imgCart from './cart.png';
import CartItem from './CartItem';

const Cart = () => {

	const cartItems = useSelector(getCartItems);
	const totalPrice = useSelector(getTotalPrice);

	return(
	<div className='cartBox'>
		
		<img src={ imgCart } className="cart" alt="cart"/>
		<h4>Total: ${totalPrice}</h4>
		{cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
		
		
	</div>
	)
}

export default Cart;