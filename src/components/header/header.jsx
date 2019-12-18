import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from '../../assets/images/cart.png';
import { getCountBooksInCart } from '../../redux/cart/reducer';

const Header = ({ isAuthentificated, avatar, username, countBooksInCart }) => {
  return (
    <div>
      <div className="bg-secondary border-bottom d-flex justify-content-around flex-wrap">
        <h1 className="h2 text-left pt-3 pb-2 pl-5" style={{ color: 'white' }}>
          JS BAND STORE/ Aleksei Kotvitskyi
        </h1>
        {isAuthentificated && (
          <ul className="header-nav-list">
            <li>
              <Link to="/cart" style={{ textDecoration: 'none' }}>
                <img src={Cart} alt="cart" width="50" height="50" className="mt-3" />
                <div className="cart-countbooks">{countBooksInCart}</div>
              </Link>
            </li>
            <li>
              <button type="button" className="btn btn-light">
                Sign Out
              </button>
            </li>
            <li>
              <img
                src={avatar}
                alt="avatar"
                width="50"
                height="50"
                className="rounded-circle"
              />
              <span className="ml-2">{username}</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

Header.defaultProps = {
  avatar: PropTypes.undefined,
  username: PropTypes.undefined,
};

Header.propTypes = {
  isAuthentificated: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  username: PropTypes.string,
  countBooksInCart: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  return {
    isAuthentificated: state.signInReducer.isAuthentificated,
    avatar: state.signInReducer.avatar,
    username: state.signInReducer.username,
    countBooksInCart: getCountBooksInCart(state),
  };
};

export default connect(mapStateToProps)(Header);
