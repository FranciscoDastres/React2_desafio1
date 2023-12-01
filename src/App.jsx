import Navbar from './components/Navegation';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes as R } from "react-router-dom";
import Home from './view/Home'
import Contact from './view/Contact'
import NotFound from './view/NotFound'
function App() {

  return (
    <>
      <Navbar />
      <R>
        <Route
          path="/"
          element={<Home />}>
        </Route>
        <Route
          path="/contact"
          element={<Contact />}>
        </Route>
        <Route
          path="*"
          element={<NotFound />}>
        </Route>
      </R>
    </>
  )
}

export default App
