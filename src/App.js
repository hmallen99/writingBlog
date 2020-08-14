import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,                                     
} from "react-router-dom";
import Stories from "./Pages/Stories";
import Home from "./Pages/Home";
import About from "./Pages/About";
import './App.css';


function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/stories">Stories</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/stories">
                        <Stories />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
