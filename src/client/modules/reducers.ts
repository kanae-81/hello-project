import types from "./actionTypes";

export type InitialState = {
  test: string | undefined;
  isLoading: boolean;
  members: any;
  search: {
    name: string | undefined;
    select: {
      color: string | undefined;
      group: string | undefined;
    };
  };
  error: string | undefined;
};

const initialDateState: InitialState = {
    test: "",
    isLoading: false,
    members: '',
    search: {
        name: '',
        select: {
            color: '',
            group:'',
        }
    },
    error: '',
};

const reducer = (state = initialDateState, action: any) => {
switch (action.type) {
  case types.TEST:
    return {
      ...state,
      test: action.payload,
    };
  case types.FETCH_ALLDATA_START:
    return {
      ...state,
      isLoading: true,
    };
  case types.FETCH_ALLDATA_SUCCEED:
    return {
      ...state,
      isLoading: false,
      members: action.payload,
      error: "",
    };
  case types.FETCH_ALLDATA_FAIL:
    return {
      ...state,
      isLoading: false,
      members: "",
      error: action.payload,
    };
  case types.SEARCH_NAME_START:
    return {
      ...state,
      isLoading: true,
      search: {
        ...state.search,
        name: action.payload,
      },
    };
  case types.SEARCH_NAME_SUCCEED:
    return {
      ...state,
      isLoading: false,
      members: action.payload,
      error: "",
    };
  case types.SEARCH_NAME_FAIL:
    return {
      ...state,
      isLoading: false,
      members: "",
      error: action.payload,
    };
  case types.SEARCH_DETAILS_START:
    return {
      ...state,
      isLoading: true,
    };
  case types.SEARCH_DETAILS_SUCCEED:
    return {
      ...state,
      isLoading: false,
      members: action.payload,
      error: "",
    };
  case types.SEARCH_DETAILS_FAIL:
    return {
      ...state,
      isLoading: false,
      members: "",
      error: action.payload,
    };
  case types.SET_SELECT_DATA:
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
  case types.SET_ERROR_MESSAGE:
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  default:
    return {
      ...state,
    };
}
};

export default reducer;
