import types from "./actionTypes";
import { Member } from "../types/index";
import { reducerWithInitialState } from "typescript-fsa-reducers";

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

const reducer = reducerWithInitialState(initialDateState)
    .case(types.TEST, (state, test) => ({
        ...state,
        test: test,
    }))
    .case(types.FETCH_ALLDATA_START, (state) => ({
        ...state,
        isLoading: true,
    }))
    .case(types.FETCH_ALLDATA_SUCCEED, (state,members) => ({
        ...state,
        isLoading: false,
        members: members,
        error: "",
    }))
    .case(types.FETCH_ALLDATA_FAIL, (state,error) => ({
        ...state,
        isLoading: false,
        members: [],
        error: error,
    }))
    .case(types.SEARCH_NAME_START, (state,name) => ({
        ...state,
            isLoading: true,
            search: {
                ...state.search,
                name: name,
        },
    }))
    .case(types.SEARCH_NAME_SUCCEED, (state,members) => ({
        ...state,
        isLoading: false,
        members: members,
        error: "",
    }))
    .case(types.SEARCH_NAME_FAIL, (state,error) => ({
        ...state,
        isLoading: false,
        members: [],
        error: error,
    }))
    .case(types.SEARCH_DETAILS_START, (state) => ({
        ...state,
        isLoading: true,
    }))
    .case(types.SEARCH_DETAILS_SUCCEED, (state,members) => ({
        ...state,
        isLoading: false,
        members: members,
        error: "",
    }))
    .case(types.SEARCH_DETAILS_FAIL, (state,error) => ({
        ...state,
        isLoading: false,
        members: [],
        error: error,
    }))
    .case(types.SET_SELECT_DATA, (state, values) => ({
        ...state,
            search: {
            ...state.search,
            select: {
                ...state.search.select,
                [values.id]: values.value,
            },
        },
    }))
    .case(types.SET_ERROR_MESSAGE, (state,error) => ({
        ...state,
        isLoading: false,
        error: error,
    }));

export default reducer;
