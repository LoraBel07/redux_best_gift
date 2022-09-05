import Gift from "./Gift";

const Gifts = () => {
	return(
	<div>
		{ dataGifts.map(gift => <Gift gift={gift}/>)}
	</div>
	)
}

export default Gifts;