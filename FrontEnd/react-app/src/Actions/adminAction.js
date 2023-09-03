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
  ADMIN_PRODUCTS_REQUEST,
  ADMIN_PRODUCTS_SUCCESS,
  ADMIN_PRODUCTS_FAILURE,
} from "../Constants/adminConstants";
import axios from "axios";

//Admin Users Actions
export const getUsersList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_USERS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`http://localhost:8080/api/users`, config);
    dispatch({ type: ADMIN_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADMIN_USERS_FAILURE, payload: error.message });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_USERS_DELETE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`http://localhost:8080/api/users/${id}`, config);

    const { data } = await axios.get(`http://localhost:8080/api/users`, config);
    dispatch({ type: ADMIN_USERS_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADMIN_USERS_DELETE_FAILURE, payload: error.message });
  }
};

//Admin Orders Actions
export const getOrdersList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_ORDERS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `http://localhost:8080/api/orders`,
      config
    );
    dispatch({ type: ADMIN_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADMIN_ORDERS_FAILURE, payload: error.message });
  }
};

//Admin Products Actions
