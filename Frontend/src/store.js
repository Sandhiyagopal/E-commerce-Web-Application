import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import productReducer from './Pages/reducers/productReducer';
import cartReducer from './Pages/reducers/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer
});

const initialState = {};

const middleWare = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleWare)
));

export default store;
