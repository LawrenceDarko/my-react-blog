import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';
import Page404 from './Components/Page404';


function App() {
  return (
    <Router>
    <div className="App">
      {/* Navbar */}
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/" >
            <Home/>
          </Route>
          <Route path="/create" >
            <Create />
          </Route>
          <Route path="/blogs/:id" >
            <BlogDetails />
          </Route>
          <Route path="*" >
            <Page404 />
          </Route>
        </Switch>
      </div>

    </div>
    </Router>
  );
}

export default App;
