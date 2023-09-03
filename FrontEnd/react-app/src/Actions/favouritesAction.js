import {
  USER_FAV_FAILURE,
  USER_FAV_REQUEST,
  USER_FAV_SUCCESS,
  USER_ADD_FAVORITE_REQUEST,
  USER_ADD_FAVORITE_SUCCESS,
  USER_ADD_FAVORITE_FAILURE,
  USER_DELETE_FAVORITE_REQUEST,
  USER_DELETE_FAVORITE_SUCCESS,
  USER_DELETE_FAVORITE_FAILURE,
} from "../Constants/favouritesConstants";
import axios from "axios";
export const getFavourites = () => async (dispatch, getstate) => {
  try {
    dispatch({ type: USER_FAV_REQUEST });
    const {
      userLogin: { userInfo },
    } = getstate();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `http://localhost:8080/api/users/favourites`,
      config
    );
    localStorage.setItem("userFav", JSON.stringify(data));
    dispatch({ type: USER_FAV_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_FAV_FAILURE, payload: error });
  }
};

export const addFavorite = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_ADD_FAVORITE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(
      `http://localhost:8080/api/users/favourites/${id}`,
      {},
      config
    );
    const { data } = await axios.get(
      `http://localhost:8080/api/users/favourites`,
      config
    );
    dispatch({ type: USER_ADD_FAVORITE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_ADD_FAVORITE_FAILURE,
      payload: error.response.data.message || error.message,
    });
  }
};

export const deleteFavourite = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DELETE_FAVORITE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(
      `http://localhost:8080/api/users/favourites/${id}`,
      config
    );

    const { data } = await axios.get(
      `http://localhost:8080/api/users/favourites`,
      config
    );
    dispatch({ type: USER_DELETE_FAVORITE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAVORITE_FAILURE,
      payload: error.response.data.message || error.message,
    });
  }
};
