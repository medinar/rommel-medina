import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Header}/>
          <Route path="/rommel-medina" component={Header}/>
          <Route path="/about-me" component={About}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/services" component={Services}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact-me" component={Contacts}/>   
        </Switch>
      </Router>
  );
}

export default App;
