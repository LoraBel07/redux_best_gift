import dataGifts from "../../Data/dataGifts";
import Gift from "./Gift";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/giftSlice";

const Gifts = () => {
	const selectedCategory = useSelector(getSelectedCategory);

	return(
	<div className='gifts'>
		{ dataGifts
		.filter(gift => {
			if (selectedCategory === 'All') return true;
			return selectedCategory === gift.category; 
		})
		.map(gift => <Gift gift={gift}/>)}
	</div>
	)
}

export default Gifts;