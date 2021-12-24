import CurrencyService from "../../api/CurrencyService";

export const SET_BITCOIN = "SET_BITCOIN";
export const SET_ETHEREUM = "SET_ETHEREUM";

export const CurrencyActions = {
  setBitcoinAction: (bitcoin) => ({ type: SET_BITCOIN, payload: bitcoin }),
  setEthereumAction: (ethereum) => ({ type: SET_ETHEREUM, payload: ethereum }),

  getBitcoinAction: () => async (dispatch) => {
    try {
      const response = await CurrencyService.getBitcoin();
      dispatch(CurrencyActions.setBitcoinAction(response.data));
    } catch (err) {
      console.log("getBitcoin err: ", err);
    }
  },
  getEthereumAction: () => async (dispatch) => {
    try {
      const response = await CurrencyService.getEthereum();
      dispatch(CurrencyActions.setEthereumAction(response.data));
    } catch (err) {
      console.log("getEthereum err: ", err);
    }
  },
};
