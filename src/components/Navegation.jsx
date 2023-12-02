import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
const Navbar = () => {
  return (
    <div>
    <Nav className='align-center bg-danger  p-4 d-flex'>
      <Link className='m-3 fs-3 text-black 'to="/">Home 🏠</Link>
      <Link className='m-3 fs-3 text-black texte-decoration-none'to="/contact">Contact 📱</Link>
      <Link className='m-3 fs-3 text-black texte-decoration-none'to="/*"></Link>
      <Link className='m-3 fs-3 text-black text-decoration-none ms-auto'>Happy Cake 🍰</Link>
    </Nav>
      
   
    </div>

   
  )
}

export default Navbar;