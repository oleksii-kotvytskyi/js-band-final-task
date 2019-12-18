import {
  ADD_BOOKS_TO_CART,
  PURCHASE_BOOKS_ERROR,
  PURCHASE_BOOKS_REQUEST,
  PURCHASE_BOOKS_SUCCES,
} from './actions';

const books = JSON.parse(localStorage.getItem('cart'))
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const initialState = {
  books,
  error: undefined,
  isLoading: false,
};

export const getCountBooksInCart = state =>
  state.cartReducer.books.reduce(
    (acumulator, book) => acumulator + Number(book.count),
    0,
  );

const cartReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case ADD_BOOKS_TO_CART: {
      let result = state.books.find(el => el.id === action.payload.id);

      if (result) {
        result = state.books.map(book =>
          book.id === action.payload.id
            ? {
                ...book,
                count: Number(book.count) + Number(action.payload.count),
                totalPrice: Number(book.totalPrice) + Number(action.payload.totalPrice),
              }
            : book,
        );
      } else {
        result = [...state.books, action.payload];
      }
      localStorage.setItem('cart', JSON.stringify(result));
      return {
        ...state,
        books: result,
      };
    }
    case PURCHASE_BOOKS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PURCHASE_BOOKS_SUCCES: {
      return {
        ...state,
        books: undefined,
      };
    }
    case PURCHASE_BOOKS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
