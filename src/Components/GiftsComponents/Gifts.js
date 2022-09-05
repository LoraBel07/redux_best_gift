import dataGifts from "../../Data/dataGifts";
import Gift from "./Gift";

const Gifts = () => {
	return(
	<div className='gifts'>
		{ dataGifts.map(gift => <Gift gift={gift}/>)}
	</div>
	)
}

export default Gifts;