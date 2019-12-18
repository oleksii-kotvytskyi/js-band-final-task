import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInPage from '../../pages/sign-in';
import BooksPage from '../../pages/books';

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
      <Route path="/books" component={BooksPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
export default App;
