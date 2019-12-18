import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class BookCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countPrice: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { book } = this.props;
    const price = book ? book.price : 0;
    const result = (e.target.value * price).toFixed(2);
    this.setState({ countPrice: result });
  }

  render() {
    const { book } = this.props;
    const { countPrice } = this.state;
    return (
      <>
        {book && (
          <div className="card mb-3 col-5 bg-light align-self-center">
            <form>
              <div className="d-flex justify-content-between mt-3">
                <span>Price:</span>
                <span>{book.price}$</span>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <span>In Stock:</span>
                <span>
                  {book.count} {book.count > 1 ? 'books' : 'book'}
                </span>
              </div>
              <label className="d-flex justify-content-between mt-3">
                Count
                <input
                  type="number"
                  className="form-control book-cart__input"
                  min={0}
                  max={book.count}
                  onChange={this.handleChange}
                />
              </label>
              <div className="d-flex justify-content-between mt-3">
                <span>Total Price:</span>
                <span>{countPrice}$</span>
              </div>
              <button type="submit" className="btn btn-dark float-right mt-3 mb-3">
                Add To Card
              </button>
            </form>
          </div>
        )}
      </>
    );
  }
}

BookCart.defaultProps = {
  book: PropTypes.undefined,
};

BookCart.propTypes = {
  book: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default connect(state => ({ book: state.bookReducer.book }))(BookCart);
