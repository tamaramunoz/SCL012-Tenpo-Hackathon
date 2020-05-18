import React from 'react';
import V1 from './Views/V1';
import V2 from './Views/V2';
import V3 from './Views/V3';
import V4 from './Views/V4';
import V5 from './Views/V5';
import V6 from './Views/V6';
import V7 from './Views/V7';
import V8 from './Views/V8';
import V9 from './Views/V9';
import Chat from './Views/Chat';
import Phone from './components/Phone';
import ModalMail from './components/ModalMail';
import Loading from './Views/Loading';
import AddPhone from './Views/AddPhone';
import ValidatePhone from './Views/ValidatePhone';
import EnterAddress from './Views/EnterAddress';
import CreateKey from './Views/CreateKey';
import ConfirmKey from './Views/ConfirmKey';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={V1} />
        <Route exact path='/V2' component={V2} />
        <Route exact path='/V3' component={V3} />
        <Route exact path='/V4' component={V4} />
        <Route exact path='/V5' component={V5} />
        <Route exact path='/V6' component={V6} />
        <Route exact path='/V7' component={V7} />
        <Route exact path='/V8' component={V8} />
        <Route exact path='/V9' component={V9} />
        <Route exact path='/loading' component={Loading} />
        <Route exact path='/chat' component={Chat} />
        <Route exact path='/modalMail' component={ModalMail} />
        <Route exact path='/phone' component={Phone} />
        <Route exact path='/addphone' component={AddPhone} />
        <Route exact path='/validate' component={ValidatePhone} />
        <Route exact path='/address' component={EnterAddress} />
        <Route exact path='/createkey' component={CreateKey} />
        <Route exact path='/confirmkey' component={ConfirmKey} />
      </Switch>
    </Router>
  );
}

export default App;
