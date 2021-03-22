import types from "./actionTypes";
import { Member } from "../types/index";
import { Action } from "redux";
import { isType } from "typescript-fsa";

export type Search = {
  name: string;
  select: {
	color: string;
	group: string;
  };
};

export type InitialState = {
  test: string;
  isLoading: boolean;
  members: Member[];
  search: Search;
  error: string;
};

const initialDateState: InitialState = {
  test: "",
  isLoading: false,
  members: [],
  search: {
	name: "",
	select: {
	  color: "",
	  group: "",
	},
  },
  error: "",
};

const reducer = (state = initialDateState, action: Action) => {
    if (isType(action, types.TEST)) {
        return {
            ...state,
            test: action.payload,
        }
    }  else if (isType(action, types.FETCH_ALLDATA_START)) {
        return {
            ...state,
            isLoading: true,
        };
    } else if (isType(action, types.FETCH_ALLDATA_SUCCEED)) {
        return {
            ...state,
            isLoading: false,
            members: action.payload,
            error: "",
        };
    } else if (isType(action, types.FETCH_ALLDATA_FAIL)) {
        return {
            ...state,
            isLoading: false,
            members: [],
            error: action.payload,
        };
    } else if (isType(action, types.SEARCH_NAME_START)) {
        return {
            ...state,
            isLoading: true,
            search: {
            ...state.search,
            name: action.payload,
            },
        };
    } else if (isType(action, types.SEARCH_NAME_SUCCEED)) {
        return {
            ...state,
            isLoading: false,
            members: action.payload,
            error: "",
        };
    } else if (isType(action, types.SEARCH_NAME_FAIL)) {
        return {
            ...state,
            isLoading: false,
            members: [],
            error: action.payload,
        };
    } else if (isType(action, types.SEARCH_DETAILS_START)){
        return {
            ...state,
            isLoading: true,
        };
    } else if (isType(action, types.SEARCH_DETAILS_SUCCEED)){
        return {
            ...state,
            isLoading: false,
            members: action.payload,
            error: "",
        };
    } else if (isType(action, types.SEARCH_DETAILS_FAIL)){
        return {
            ...state,
            isLoading: false,
            members: [],
            error: action.payload,
        };
    } else if (isType(action, types.SET_SELECT_DATA)){
        return {
            ...state,
            search: {
            ...state.search,
            select: {
                ...state.search.select,
                [action.payload.id]: action.payload.value,
            },
            },
        };
    } else if (isType(action, types.SET_ERROR_MESSAGE)){
        return {
            ...state,
            isLoading: false,
            error: action.payload,
        };
    } else {
        return {
            ...state,
        };
    }
};

export default reducer;
