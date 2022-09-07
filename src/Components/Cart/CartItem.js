
const CartItem = ({cartItem}) => {
	console.log(cartItem);

	return(
	<div className='cartItem'>		
		<p> x {cartItem.quantity}</p>
		
	</div>
	)
}

export default CartItem;