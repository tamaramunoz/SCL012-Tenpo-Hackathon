import React from 'react';
import V1 from './Views/V1';
import V2 from './Views/V2';
import Chat from './Views/Chat';
import FloatButton from './components/FloatButton';
import Assistance from './components/Assistance'
import Phone from './components/Phone';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={V1} />
        <Route exact path='/V2' component={V2} />
        <Route exact path='/Chat' component={Chat} />
        <Route exact path='/floatButton' component={FloatButton} />
        <Route exact path='/assistance' component={Assistance} />
        <Route exact path='/phone' component={Phone} />
      </Switch>
    </Router>
  );
}

export default App;
