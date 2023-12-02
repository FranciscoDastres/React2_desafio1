import error404 from '../assets/img/error-404.png'
import "./NotFound.css"
const NotFound = () => {
  return (
    <div>
        <h1></h1>
        <img className='error-404' 
          src={error404} 
          alt="error-404" 
        />
    </div>
  );
};

export default NotFound;