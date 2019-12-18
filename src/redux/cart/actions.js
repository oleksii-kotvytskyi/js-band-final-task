export const ADD_BOOKS_TO_CART = 'ADD_BOOKS_TO_CART';
export const PURCHASE_BOOKS_REQUEST = 'PURCHASE_BOOKS_REQUEST';
export const PURCHASE_BOOKS_SUCCES = 'PURCHASE_BOOKS_SUCCES';
export const PURCHASE_BOOKS_ERROR = 'PURCHASE_BOOKS_ERROR';

export const addBooksToCart = books => ({
  type: ADD_BOOKS_TO_CART,
  payload: books,
});

export const purchaseBooksRequest = () => ({
  type: PURCHASE_BOOKS_REQUEST,
});

export const purchaseBooksSucces = () => ({
  type: PURCHASE_BOOKS_SUCCES,
});

export const purchaseBooksError = error => ({
  type: PURCHASE_BOOKS_ERROR,
  payload: error,
});
