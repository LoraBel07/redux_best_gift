import { useAuth0 } from "@auth0/auth0-react";

const MyAccount = () => {
	const { user, isAuthenticated } = useAuth0();
	return(
		isAuthenticated && (
		<div className="gifts my">
			<p>{user.nickname}</p>
			<p>{user.email}</p>
			<img className="userimg" src={user.picture} alt="#"/>
		</div>)
	)
}

export default MyAccount;