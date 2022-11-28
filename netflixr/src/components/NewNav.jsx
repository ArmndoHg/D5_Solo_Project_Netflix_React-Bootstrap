import { Nav, Navbar, NavLink } from "react-bootstrap";
import logo from "../assets/netflix_logo.png";
import { BsSearch, BsBellFill } from "react-icons/bs";
import avatar from "../assets/avatar.png";

const NewNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <img id="logo" src={logo} alt="netflix logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Tv Shows</Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">Back Office</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#">
            <BsSearch />
          </Nav.Link>
          <Nav.Link href="#">KIDS</Nav.Link>
          <Nav.Link href="#">
            <BsBellFill />
          </Nav.Link>
          <NavLink>
            <img id="avatar" src={avatar} alt="avatar" />
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NewNav;
