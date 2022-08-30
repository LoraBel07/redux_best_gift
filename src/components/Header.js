
import { Container, Navbar, FormControl, Nav, Dropdown, Badge } from "react-bootstrap";

const Header = () => {
	return <Navbar bg="info" variant="dark" style={{ height: 80 }}>
		<Container>
			<Navbar.Brand>
				<a href="/"> Shopping cart </a>
			</Navbar.Brand>
			<Navbar.Text className="search">
				<FormControl style={{ width: 500 }} placeholder="Search a gift"	className="m-auto" />
			</Navbar.Text>
			<Nav>
				<Dropdown alignRight>
					<Dropdown.Toggle variant="success">
						{/* <FaShoppingCart color="white" font-size="25px" />*/}
						<Badge>{10}</Badge>
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