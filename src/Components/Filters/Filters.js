import Filter from "./Filter";

const Filters = () => {
	return(
	<div className="header">
		<div className="question">
		<h1> What kind of gift do you like?</h1>
		</div>		
		<div className="row">
		{['Yummy', 'Flowers', 'Jewelry', 'Staitionery', 'Devices', 'All' ].map(category => <Filter category={category}/>
		)}
		</div>
	</div>
	)
}

export default Filters;