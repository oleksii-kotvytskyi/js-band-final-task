import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route, Redirect } from 'react-router-dom';
// import SignIn from './sign-in/sign-in';

function NotFoundPage() {
  return <h1>Not Found...</h1>;
}

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/signin" />
      </Route>
      <Route path="/signin" component={() => <h1>Sign In Page</h1>} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
export default App;
