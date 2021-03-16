import types from "./actionTypes";
import { Member } from "../types/index";

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

// type ActionType = {
//         type: 'FETCH_ALLDATA_START' | 'SEARCH_DETAILS_START';
//     } | {
//         type: 'SET_SELECT_DATA';
//         payload: {
//             id: string;
//             value: string;
//         };
//     } | {
//         type: types.TEST | 'SET_ERROR_MESSAGE' | 'FETCH_ALLDATA_FAIL' | 'SEARCH_NAME_START' | 'SEARCH_NAME_FAIL' | 'SEARCH_DETAILS_FAIL';
//         payload: string;
//     } | {
//         type: 'FETCH_ALLDATA_SUCCEED' | 'SEARCH_NAME_SUCCEED' | 'SEARCH_DETAILS_SUCCEED';
//         payload: Member[];
//     };
type ActionType = {
  type: string;
  payload?: string | Member[] | { id: string; value: string };
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

const reducer = (state = initialDateState, action: ActionType) => {
  switch (action.type) {
	case types.TEST:
	  const test = action.payload as string;
	  return {
		...state,
		test: test,
	  };
	case types.FETCH_ALLDATA_START:
	  return {
		...state,
		isLoading: true,
	  };
	case types.FETCH_ALLDATA_SUCCEED:
	  const allMembers = action.payload as Member[];
	  return {
		...state,
		isLoading: false,
		members: allMembers,
		error: "",
	  };
	case types.FETCH_ALLDATA_FAIL:
	  const allMembersErr = action.payload as string;
	  return {
		...state,
		isLoading: false,
		members: [],
		error: allMembersErr,
	  };
	case types.SEARCH_NAME_START:
	  const name = action.payload as string;
	  return {
		...state,
		isLoading: true,
		search: {
		  ...state.search,
		  name: name,
		},
	  };
	case types.SEARCH_NAME_SUCCEED:
	  const searchNameMembers = action.payload as Member[];
	  return {
		...state,
		isLoading: false,
		members: searchNameMembers,
		error: "",
	  };
	case types.SEARCH_NAME_FAIL:
	  const searchNameMembersErr = action.payload as string;
	  return {
		...state,
		isLoading: false,
		members: [],
		error: searchNameMembersErr,
	  };
	case types.SEARCH_DETAILS_START:
	  return {
		...state,
		isLoading: true,
	  };
	case types.SEARCH_DETAILS_SUCCEED:
	  const searchDetailMembers = action.payload as Member[];
	  return {
		...state,
		isLoading: false,
		members: searchDetailMembers,
		error: "",
	  };
	case types.SEARCH_DETAILS_FAIL:
	  const searchDetailMembersErr = action.payload as string;
	  return {
		...state,
		isLoading: false,
		members: [],
		error: searchDetailMembersErr,
	  };
	case types.SET_SELECT_DATA:
	  const id =
		!action.payload ||
		typeof action.payload === "string" ||
		Array.isArray(action.payload)
		  ? ""
		  : action.payload.id;
	  const value =
		!action.payload ||
		typeof action.payload === "string" ||
		Array.isArray(action.payload)
		  ? ""
		  : action.payload.value;
	  return {
		...state,
		search: {
		  ...state.search,
		  select: {
			...state.search.select,
			[id]: value,
		  },
		},
	  };
	case types.SET_ERROR_MESSAGE:
	  const err = action.payload as string;
	  return {
		...state,
		isLoading: false,
		error: err,
	  };
	default:
	  return {
		...state,
	  };
  }
};

export default reducer;
