import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <div>
        <Route path="/Create" component={Create} exact/>
      </div>
      <div>
        <Route path="/Read" component={Read} exact/>
      </div>
      <div>
        <Route path="/Update" component={Update} exact/>
      </div>
    </div>
    </Router>
  );
}

export default App;
