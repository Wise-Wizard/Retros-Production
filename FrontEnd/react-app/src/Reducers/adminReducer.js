import {
  ADMIN_USERS_REQUEST,
  ADMIN_USERS_SUCCESS,
  ADMIN_USERS_FAILURE,
  ADMIN_USERS_DELETE_REQUEST,
  ADMIN_USERS_DELETE_SUCCESS,
  ADMIN_USERS_DELETE_FAILURE,
  ADMIN_ORDERS_REQUEST,
  ADMIN_ORDERS_SUCCESS,
  ADMIN_ORDERS_FAILURE,
  ADMIN_PRODUCT_DELETE_REQUEST,
  ADMIN_PRODUCT_DELETE_SUCCESS,
} from "../Constants/adminConstants";

export const adminGetUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_USERS_REQUEST:
      return { loading: true };
    case ADMIN_USERS_SUCCESS:
      return { loading: false, usersList: action.payload };
    case ADMIN_USERS_FAILURE:
      return { loading: false, error: action.payload };

    case ADMIN_USERS_DELETE_REQUEST:
      return { loading: true };
    case ADMIN_USERS_DELETE_SUCCESS:
      return { loading: false, usersList: action.payload };
    case ADMIN_USERS_DELETE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminGetOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_ORDERS_REQUEST:
      return { loading: true };
    case ADMIN_ORDERS_SUCCESS:
      return { loading: false, ordersList: action.payload };
    case ADMIN_ORDERS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
