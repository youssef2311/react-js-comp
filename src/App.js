import React , {component} from 'react' ;
import './App.css';
import Footer from './comp/Footer';
import Main from './comp/Main';
import Navbar from './comp/NavBar.js';


function App() {
  return (
    <div className="all">
  <Navbar />
  <br />
 <Main />
 <img src="\e5651cc292bd28e736608b78be047bca.jpg" style={{height: "550px"}} />
 <br />
 <Footer />
  </div>
  );
}

   
  

export default App;
