import React, { Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes , Link , Route , useParams, useNavigate} from "react-router-dom";
import "./App.css";
import AddTutorial from "./components/add-tutorial.component.js";
import Tutorial from "./components/tutorial.component.js";
import TutorialsList from "./components/tutorial-list.component.js";

class App extends Component{
  render() {
    const Wrapper = (props) => {
      const params  = useParams();
      const navigate = useNavigate();
      return <Tutorial {...props} params={params} navigate={navigate} />
    }
    return (
      <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"tutorials"} className="navbar-brand">
          Mimi's Tutorials
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="*" element={<TutorialsList />} />
          <Route path="/add" element={<AddTutorial />} />
          <Route path="/tutorials" element={<TutorialsList />} />
          <Route path="/tutorials/:id" element={<Wrapper />} />
        </Routes>
      </div>
    </div>);
  }
}

export default App;
