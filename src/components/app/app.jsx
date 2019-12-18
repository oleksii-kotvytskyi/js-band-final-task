import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInPage from '../../pages/sign-in';
import BooksPage from '../../pages/books';
import BookPage from '../../pages/book';
import '../../styles';

function NotFoundPage() {
  return <h1>Not Found...</h1>;
}

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/signin" />
      </Route>
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/books" component={BooksPage} />
      <Route exact path="/books/:id" component={BookPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
export default App;
