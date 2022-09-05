import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/giftSlice";


const Filter = ({category}) => {
	const dispatch = useDispatch();
	const selectedCategory = useSelector(getSelectedCategory);
	return(
		<div>
			<h4 onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{category}</h4>
		</div>
	)
}
export default Filter;