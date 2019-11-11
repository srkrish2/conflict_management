import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom';

import LogInPage from './component/LoginPage'
import Invalid from './component/Invalid'
import Didnotfinish from './component/Didnotfinish'
import Consent from './component/Consent'
import AwaitingFeedback from './component/AwaitingFeedback'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LogInPage}/>
        <Route exact path="/consent" component={Consent}/>
        <Route exact path="/demographics" component={LogInPage}/>
        <Route exact path="/readstory" component={LogInPage}/>
        <Route exact path="/guidingquestions" component={LogInPage}/>
        <Route exact path="/awaitingfb" component={AwaitingFeedback}/>
        <Route exact path="/showfeedback" component={LogInPage}/>
        <Route exact path="/revisestory" component={LogInPage}/>
        <Route exact path="/checkfeedbackusage" component={LogInPage}/>
        <Route exact path="/finalSurvey" component={LogInPage}/>
        <Route exact path="/ending" component={LogInPage}/>
        <Route exact path="/invalid" component={Invalid}/>
        <Route exact path="/didnotfinish" component={Didnotfinish}/>
      </div>
    </Router>
  );
}

export default withRouter(App);
