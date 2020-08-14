import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Story from './Story';

function Stories() {
    let { path, url } = useRouteMatch();
  
    return (
      <div>
        <h2>Stories</h2>
            <ul>
                <li>
                    <Link to={`${url}/blarg`}>Story 1</Link>
                </li>
                <li>
                    <Link to={`${url}/blub`}>Story 2</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Choose a story:</h3>
                </Route>
                <Route path={`${path}/:storyName`}>
                    <Story />
                </Route>
            </Switch>
        </div>
    );
  }

  export default Stories;