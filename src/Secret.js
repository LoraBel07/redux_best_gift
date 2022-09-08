import { useAuth0 } from "@auth0/auth0-react";
import userImg from './user.png';

const Secret = () => {
	const { isAuthenticated } = useAuth0();
	return (
		isAuthenticated && (
		<div>
			<img className="userimg" src={userImg} alt="#"/>
		</div>
		)
	)
}
export default Secret;