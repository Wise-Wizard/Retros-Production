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

export const userFavouritesReducer = (state = { favourites: [] }, action) => {
  switch (action.type) {
    case USER_FAV_REQUEST:
      return { loading: true, favourites: [] };
    case USER_FAV_SUCCESS:
      return { loading: false, userFav: action.payload };
    case USER_FAV_FAILURE:
      return { loading: false, error: action.payload };
    case USER_ADD_FAVORITE_REQUEST:
      return { ...state, loading: true };
    case USER_ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        userFav: action.payload,
      };
    case USER_ADD_FAVORITE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case USER_DELETE_FAVORITE_REQUEST:
      return { ...state, loading: true };
    case USER_DELETE_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        userFav: action.payload,
      };
    case USER_DELETE_FAVORITE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
