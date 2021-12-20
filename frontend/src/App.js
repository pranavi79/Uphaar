import './App.css';
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home.js';

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Home}/> 
      <Footer/>
    </Router>
  );
}

export default App;
