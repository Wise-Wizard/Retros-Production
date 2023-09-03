import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productListReducer, {
  adminProductReducer,
} from "./Reducers/productsReducer";
import productDetailsReducer from "./Reducers/productDetailsReducer";
import { cartReducer } from "./Reducers/cartReducer";
import {
  userLoginReducer,
  userProfileReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./Reducers/userReducer";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
} from "./Reducers/orderReducer";
import { userFavouritesReducer } from "./Reducers/favouritesReducer";
import {
  adminGetOrdersReducer,
  adminGetUsersReducer,
} from "./Reducers/adminReducer";
import { apiSlice } from "./Slices/apiSlice";
import authReducer from "./Slices/authSlice";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const userFavouritesFromStorage = localStorage.getItem("userFav")
  ? JSON.parse(localStorage.getItem("userFav"))
  : {};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  userUpdateProfile: userUpdateReducer,
  userFavourites: userFavouritesReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  // [apiSlice.reducerPath]: apiSlice.reducer,
  // auth: authReducer,
  adminGetUsers: adminGetUsersReducer,
  adminGetOrders: adminGetOrdersReducer,
  adminGetProducts: adminProductReducer,
});

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
  userFavourites: userFavouritesFromStorage,
};
const middleWare = [thunk].concat(apiSlice.middleware);
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;
