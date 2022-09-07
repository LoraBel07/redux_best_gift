import { useSelector } from 'react-redux';
import { getCartItems } from '../../redux/cartSlice';
import imgCart from './cart.png';
import CartItem from './CartItem';

const Cart = () => {

	const cartItems = useSelector(getCartItems)

	return(
	<div className='cartBox'>
		
		<img src={ imgCart } className="cart" alt="cart"/>
		{cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
		
		
	</div>
	)
}

export default Cart;