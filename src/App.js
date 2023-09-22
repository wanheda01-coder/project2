
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home"; 
import Footer from "./component/Footer";
import Videos from "./component/Videos";
import Uplaod from "./component/Uplaod";
import Login  from "./component/Login";
import Signup  from "./component/Signup";



function App() {

  return (
<Router>
  <Header />
 
  <Routes>

<Route path="/" element ={<Home />}  />
<Route path="/Videos " element ={<Videos />}  />
<Route path="/Upload " element ={<Uplaod />}  />
<Route path="/login " element ={<Login />}  />
<Route path="/Signup " element ={<Signup />}  />
  </Routes>
  <Footer />
</Router>

  );
  
}
export default App;