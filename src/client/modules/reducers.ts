import types from "./actionTypes";

export type InitialState = {
  test: string | undefined;
};

const initialDateState: InitialState = {
  test: "",
};

const reducer = (state = initialDateState, action: any) => {
  switch (action.type) {
    case types.TEST:
      return {
        test: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
