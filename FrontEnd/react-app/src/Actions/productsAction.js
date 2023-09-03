import axios from "axios";
import {
  ADMIN_PRODUCT_DELETE_REQUEST,
  ADMIN_PRODUCT_DELETE_SUCCESS,
  ADMIN_PRODUCT_DELETE_FAILURE,
  ADMIN_PRODUCT_UPDATE_FAILURE,
  ADMIN_PRODUCT_UPDATE_REQUEST,
  ADMIN_PRODUCT_CREATE_FAILURE,
  ADMIN_PRODUCT_CREATE_REQUEST,
  ADMIN_ORDERS_SUCCESS,
  ADMIN_PRODUCT_CREATE_SUCCESS,
} from "../Constants/adminConstants";
const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const { data } = await axios.get("http://localhost:8080/api/products");
    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "PRODUCT_LIST_FAILURE", payload: error.message });
  }
};
//Admin Product Create
export const createProduct = (newProductData) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      "http://localhost:8080/api/products",
      newProductData,
      config
    );
    dispatch({ type: ADMIN_PRODUCT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADMIN_PRODUCT_CREATE_FAILURE, payload: error.message });
  }
};

//Admin Product Delete
export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_DELETE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`http://localhost:8080/api/products/${id}`, config);

    const { data } = await axios.get(
      `http://localhost:8080/api/products`,
      config
    );
    dispatch({ type: ADMIN_PRODUCT_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADMIN_PRODUCT_DELETE_FAILURE, payload: error.message });
  }
};

export const updateProduct =
  (id, updatedProductData) => async (dispatch, getState) => {
    try {
      dispatch({ type: ADMIN_PRODUCT_UPDATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.put(
        `http://localhost:8080/api/products/${id}`,
        updatedProductData,
        config
      );
      const { data } = await axios.get(
        `http://localhost:8080/api/products`,
        config
      );
      dispatch({ type: ADMIN_PRODUCT_DELETE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ADMIN_PRODUCT_UPDATE_FAILURE, payload: error.message });
    }
  };
export default productListAction;
