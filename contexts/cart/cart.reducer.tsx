import { getLocalCart } from "./use-cart";

export const cartItemsTotalPrice = (items:any, coupon = null) => {
  let total = items.reduce((price:any, product:any) => {
    if (product.salePrice) {
      return price + product.salePrice * product.quantity;
    }
    return price + product.price * product.quantity;
  }, 0);
  const discount = coupon
    ? (total * Number(coupon.discountInPercent)) / 100
    : 0;

  return total - discount;
};
// cartItems, cartItemToAdd
const addItemToCart = (state:any, action:any) => {
  const existingCartItemIndex = state.items.findIndex(
    (item:any) => item.id === action.payload.id
  );

  if (existingCartItemIndex > -1) {
    const newState = [...state.items];
    newState[existingCartItemIndex].quantity += action.payload.quantity;
    return newState;
  }
  const result = [...state.items, action.payload];
  localStorage.setItem("cart", JSON.stringify(result));
  return result;
};

// cartItems, cartItemToRemove
const removeItemFromCart = (state:any, action:any) => {
  return state.items.reduce((acc:any, item:any) => {
    if (item.id === action.payload.id) {
      const newQuantity = item.quantity - action.payload.quantity;

      return newQuantity > 0
        ? [...acc, { ...item, quantity: newQuantity }]
        : [...acc];
    }
    const result = [...acc, item];
    localStorage.setItem("cart", JSON.stringify(result));
    return result;
  }, []);
};

const clearItemFromCart = (state:any, action:any) => {
  const result = state.items.filter((item:any) => item.id !== action.payload.id);
  localStorage.setItem("cart", JSON.stringify(result));
  return result;
};

export const reducer = (state:any, action:any) => {
  // console.log(action);
  switch (action.type) {
    case 'REHYDRATE':
      return { ...state, ...action.payload };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'ADD_ITEM':
      return { ...state, items: addItemToCart(state, action) };
    case 'REMOVE_ITEM':
      return { ...state, items: removeItemFromCart(state, action) };
    case 'CLEAR_ITEM_FROM_CART':
      return { ...state, items: clearItemFromCart(state, action) };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'APPLY_COUPON':
      return { ...state, coupon: action.payload };
    case 'REMOVE_COUPON':
      return { ...state, coupon: null };
    case 'REFRESH_CART':
      // console.log("REFRESH CART", {...state, items: state.items.length ? [...state.items] : [...getLocalCart()]})
      return {...state, items: getLocalCart()}
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};
