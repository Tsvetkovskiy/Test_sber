import { CurrencyActions } from "./currency";
import { LoginActions } from "./login";

export const allActionCreators = {
  ...LoginActions,
  ...CurrencyActions,
};
