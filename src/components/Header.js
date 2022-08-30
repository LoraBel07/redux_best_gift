
import { Container, Navbar, FormControl, Nav, Dropdown, Badge } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Header = () => {
	return <Navbar bg="info" variant="dark" style={{ height: 80 }}>
		<Container>
			<Navbar.Brand>
				<Link to="/"> Shopping cart </Link>
			</Navbar.Brand>
			<Navbar.Text className="search">
				<FormControl style={{ width: 500 }} placeholder="Search a gift"	className="m-auto" />
			</Navbar.Text>
			<Nav>
				<Dropdown>
					<Dropdown.Toggle variant="success">
						<FaShoppingCart color="white"  />
						
						<Badge>{8}</Badge>
					</Dropdown.Toggle>
					<Dropdown.Menu style={{ minWidth: 370 }} >
						<span style={{ padding: 10 }}>Cart is Empty!</span>
					</Dropdown.Menu>
				</Dropdown>
			</Nav> 
		</Container>


	</Navbar>
        

		
	
}
export default Header;