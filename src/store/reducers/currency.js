import { SET_BITCOIN, SET_ETHEREUM } from "../actions/currency";

const initialState = {
  bitcoin: [],
  ethereum: [],
};

const CurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BITCOIN:
      let newBitcoin = [];
      if (state.bitcoin.length === 20) {
        newBitcoin = [...state.bitcoin.slice(1), action.payload];
      } else {
        newBitcoin = [...state.bitcoin, action.payload];
      }
      return { ...state, bitcoin: [...newBitcoin] };

    case SET_ETHEREUM:
      let newEthereum = [];
      if (state.ethereum.length === 20) {
        newEthereum = [...state.ethereum.slice(1), action.payload];
      } else {
        newEthereum = [...state.ethereum, action.payload];
      }
      return { ...state, ethereum: [...newEthereum] };

    default:
      return state;
  }
};

export default CurrencyReducer;
