import React from 'react';
import PropTypes from 'prop-types';

const BookListItem = props => {
  const { book } = props;
  return (
    <li className="card booklist-item bg-light ">
      <img
        src={book.cover}
        alt={book.title}
        className="rounded mx-auto d-block book-img"
      />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.author}</p>
      </div>
      <div className="card-footer">
        <span className="float-left book-price">Price: {book.price}$</span>
        <button type="button" className="btn btn-dark float-right">
          View
        </button>
      </div>
    </li>
  );
};

BookListItem.propTypes = {
  book: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookListItem;
