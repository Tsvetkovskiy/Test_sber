import axios from "axios";

export default class CurrencyService {
  static async getBitcoin() {
    return axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );
  }

  static async getEthereum() {
    return axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    );
  }
}
