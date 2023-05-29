const ADD_TO_ORDER = "ADD_TO_ORDER";
const DELETE_ORDER = "DELETE_ORDER";
const HANDLER_CLICK = "HANDLER_CLICK";
const ADD_CASH = "ADD_CASH";

const initialState = {
  orders: [],
  message: false,
  cash: 5,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_CASH:
    return {
      ...state,
      cash: state.cash + action.payload,
    };
  case ADD_TO_ORDER:
    const isInArray = state.orders.some((el) => el.id === action.payload.id);
    if (!isInArray) {
      return {
        ...state,
        orders: [...state.orders, action.payload],
        message: !state.message,
      };
    }
    return state;
  case DELETE_ORDER:
    return {
      ...state,
      orders: state.orders.filter((el) => el.id !== action.payload),
    };
  case HANDLER_CLICK:
    return {
      ...state,
      message: !state.message,
    };
  default:
    return state;
  }
};

export const addCashFunc = (payload) => {
  return {
    type: ADD_CASH,
    payload: payload,
  };
};

export const addToOrderFunc = (item) => {
  return {
    type: ADD_TO_ORDER,
    payload: item,
  };
};

export const deleteOrderFunc = (id) => {
  return {
    type: DELETE_ORDER,
    payload: id,
  };
};

export const handlerClickFunc = () => {
  return {
    type: HANDLER_CLICK,
  };
};
