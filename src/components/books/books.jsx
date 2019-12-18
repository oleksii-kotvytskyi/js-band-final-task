import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBooks } from '../../redux/books/actions';
import BookListItem from '../booklist-item';
import Spinner from '../spinner';

class Books extends React.Component {
  componentDidMount() {
    const { books, getBooksCT } = this.props;
    if (!books) getBooksCT();
  }

  render() {
    const { books, isLoading, error } = this.props;

    return (
      <>
        {isLoading && <Spinner />}
        {error && (
          <div className="booklist-erroMessage">Oops... You should Authorize</div>
        )}
        {books && (
          <ul className="bookList">
            {books.map(book => (
              <BookListItem key={book.id} book={book} />
            ))}
          </ul>
        )}
      </>
    );
  }
}
Books.defaultProps = {
  books: PropTypes.undefined,
  error: PropTypes.undefined,
};

Books.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array]),
  getBooksCT: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.object]),
};

const mapDispatchToProps = dispatch => ({
  getBooksCT: () => dispatch(getBooks()),
});

export default connect(
  state => ({
    books: state.booksReducer.books,
    isLoading: state.booksReducer.isLoading,
    error: state.booksReducer.error,
  }),
  mapDispatchToProps,
)(Books);
