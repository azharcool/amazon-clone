import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import CartItemsReducer from "./CartItemsReducer";
import SetUserReducer from "./setUserReducer";
import SignedInReducer from "./SignedInReducer";
import languageReducer from "./languageReducer";

const allReducers = combineReducers({
  products: ProductsReducer,
  cart: CartItemsReducer,
  user: SetUserReducer,
  signedIn: SignedInReducer,
  language: languageReducer,
});

export default allReducers;
