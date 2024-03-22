export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  //.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id //find the index of the first element, or return  -1
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1); // remove
      } else {
        console.warn(
          `cannot remove product ${action.id} as it's not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
