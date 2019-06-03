import { actionTypes } from '../constants/actionTypes';
import { ImageObj } from '../actions/types';

interface Action {
  type: string;
  payload: any;
}

export interface ImageState {
  myImages: ImageObj[];
  searchImages: ImageObj[];
  modalToggle: boolean;
  modalURL: string;
}

const initialState: ImageState = {
  myImages: [],
  searchImages: [],
  modalToggle: false,
  modalURL: '',
};

const imageReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE:
      return {
        ...state,
        myImages: action.payload,
      };
    case actionTypes.GET_SEARCH_IMAGE:
      return {
        ...state,
        searchImages: action.payload,
      };
    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        modalToggle: action.payload.modalToggle,
        modalURL: action.payload.modalURL,
      };
    case actionTypes.DROP_MODAL:
      return {
        ...state,
        modalToggle: false,
        modalURL: '',
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        searchImages: [],
      };
    default:
      return state;
  }
};

export default imageReducer;
