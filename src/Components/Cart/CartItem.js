import dataGifts from '../../Data/dataGifts';
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";


const CartItem = ({cartItem}) => {
	const gift = dataGifts.find(item => item.id === cartItem.giftId);
	const dispatch = useDispatch();
	console.log(gift)
	return(
		<div className='cart'>
	<div className='cartItem'>
		<p>{gift.name} : </p>
		<p> {cartItem.quantity}q. = </p>
		<p> ${gift.price * cartItem.quantity}</p>		
		
	</div>
	<div className='throw' onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
	<img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="#"/> 
	</div>
	</div>
	)
}

export default CartItem;