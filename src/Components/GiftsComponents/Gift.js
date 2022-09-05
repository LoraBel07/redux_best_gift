const Gift = ({gift}) => {
	return(
		<div className="giftBox">
			<img src={gift.imgUrl} alt="#"/>
			<h2>{gift.name}</h2>
			<p>{gift.price}</p>
			<button>How many?</button>
			<button> ➕ Add to Cart</button>
		</div>
	)
}
export default Gift;