import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/giftSlice";


const Filter = ({category}) => {

	const selectedCategory = useSelector(getSelectedCategory);
	return(
		<div>
			<h4 className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{category}</h4>
		</div>
	)
}
export default Filter;