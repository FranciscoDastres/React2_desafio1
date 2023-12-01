import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
const Navbar = () => {
  return (
    <div>
    <Nav className='align-middle bg-danger bg-opacity-50 p-4 d-flex'>
      <Link className='m-3 fs-3 text-white texte-decoration-none'to="/">Home 🏠</Link>
      <Link className='m-3 fs-3 text-white texte-decoration-none'to="/contact">Contact 📱</Link>
      <Link className='m-3 fs-3 text-white texte-decoration-none'to="/*"></Link>
    <Nav.Link className='m-3 fs-3 text-white texte-decoration-none top-right'>Happy Cake 🍰</Nav.Link>
    </Nav>
    </div>

   
  )
}

export default Navbar;