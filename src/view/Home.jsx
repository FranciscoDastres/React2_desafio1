import { Container } from "react-bootstrap"
import "./Home.css"

const Home = () => {
  return (
    <>
    <Container className="text-center pt-5">
        <h1 className="mb-2"> 
             <span className="fw-bold" >Bienvenido a Happy Cake</span>
        </h1>
        <p className="mb-2" >¡El lugar de los pasteles felices!'</p>
        <img classname='imgpastel' src="/src/assets/img/happycake.png" alt="Happy Cake" />
        
      </Container>
    </>

  )
}

export default Home;