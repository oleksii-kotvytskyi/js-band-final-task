import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles';
import SignInPage from '../../pages/sign-in';
import BooksPage from '../../pages/books';
import BookPage from '../../pages/book';
import CartPage from '../../pages/cart';
import NotFoundPage from '../../pages/notfound';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/signin" />
      </Route>
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/books" component={BooksPage} />
      <Route exact path="/books/:id" component={BookPage} />
      <Route exact path="/cart" component={CartPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
export default App;
