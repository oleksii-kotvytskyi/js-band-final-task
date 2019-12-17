import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInPage from '../../pages/sign-in';

function NotFoundPage() {
  return <h1>Not Found...</h1>;
}

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/signin" />
      </Route>
      <Route path="/signin" component={SignInPage} />
      <Route path="/books" component={() => <h1>Books Pages</h1>} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
export default App;
