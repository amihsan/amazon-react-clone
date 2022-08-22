export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  if (action.type === "ADD_TO_BASKET") {
    return {
      ...state,
      basket: [...state.basket, action.item],
    };
  }

  if (action.type === "EMPTY_BASKET") {
    return {
      ...state,
      basket: [],
    };
  }

  if (action.type === "REMOVE_FROM_BASKET") {
    const index = state.basket.findIndex(
      (basketItem) => basketItem.id === action.id
    );

    let newBasket = [...state.basket];

    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.warn(
        `Cant remove product (id: ${action.id}) as its not in basket!`
      );
    }

    return {
      ...state,
      basket: newBasket,
    };
  }

  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.user,
    };
  }

  return state;
};

export default reducer;
