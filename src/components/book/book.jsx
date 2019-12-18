import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBook, removeBookFromStore } from '../../redux/book/actions';
import Spinner from '../spinner';

class Book extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      getBookCT,
    } = this.props;
    getBookCT(id);
  }

  componentWillUnmount() {
    const { removeBookFromStoreCT } = this.props;
    removeBookFromStoreCT();
  }

  render() {
    const { book, isLoading } = this.props;

    return (
      <>
        {isLoading && <Spinner />}
        {book && (
          <div className="card mb-3 col-6 mt-5 ml-5 bg-light">
            <div className="row no-gutters">
              <div className="pl-3 pt-3 col-md-4">
                <img src={book.cover} className="card-img" alt={book.title} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">Autor: {book.author}</p>
                  <p className="card-text">Level: {book.level}</p>
                  <p className="card-text">Tags: {book.tags}</p>
                </div>
              </div>
            </div>
            <div className="card-footer mt-3">{book.description}</div>
          </div>
        )}
      </>
    );
  }
}

Book.defaultProps = {
  book: PropTypes.undefined,
};

Book.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
  getBookCT: PropTypes.func.isRequired,
  removeBookFromStoreCT: PropTypes.func.isRequired,
  book: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    tags: PropTypes.oneOfType([PropTypes.array]).isRequired,
    description: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getBookCT: id => dispatch(getBook(id)),
  removeBookFromStoreCT: () => dispatch(removeBookFromStore()),
});

export default connect(
  state => ({
    book: state.bookReducer.book,
    isLoading: state.bookReducer.isLoading,
  }),
  mapDispatchToProps,
)(withRouter(Book));
