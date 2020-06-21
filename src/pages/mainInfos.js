import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

class MainInfos extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <Router>
          <div>
            <TopMenu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/todo" component={Todo} />
              <Route path="/chart" component={Chart} />
              <Route path="/about" component={About} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  
  export default MainInfos;
  