import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import imgBuy from './buy2.png';

const Gift = ({gift}) => {
	const [quantity, setQuantity] = useState(1);
	return(
		<div className="giftBox">
			<img src={gift.imgUrl} alt="#"/>
			<h2>{gift.name}</h2>
			<p>{gift.price}</p>
			<ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
			<button className="buyBtn"> 
				{/* Add to Cart 👉🛒  */}
			<img src={ imgBuy } className="buy" alt="#"/>
			</button>
		</div>
	)
}
export default Gift;