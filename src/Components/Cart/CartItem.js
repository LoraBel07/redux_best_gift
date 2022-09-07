import dataGifts from '../../Data/dataGifts';


const CartItem = ({cartItem}) => {
	const gift = dataGifts.find(item => item.id === cartItem.giftId)
	console.log(gift)
	return(
	<div className='cartItem'>
		<p>{gift.name}</p>		
		<p> x {cartItem.quantity}</p>
		<p>Price: ${gift.price * cartItem.quantity}</p>
		
	</div>
	)
}

export default CartItem;