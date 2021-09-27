import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Stories from './Stories/Stories';
import Pricing from './Pricing/Pricing';

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            
            <Route exact path='/stories' component={Stories} />

            <Route exact path='/pricing' component={Pricing} />
          </Switch>
        </div>
      
    </Router>
    
  );
}

export default App;
