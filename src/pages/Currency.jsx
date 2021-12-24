import { Link } from "react-router-dom";
import "../assets/styles/currency.css";

const Currency = () => {
  return (
    <div className="wrapper">
      <h1 className="currency__title">Currency</h1>
      <div className="currency__list">
        <Link to="/trends/bitcoin" className="currency__item">
          BTC
        </Link>
        <Link to="/trends/ethereum" className="currency__item">
          ETH
        </Link>
      </div>
    </div>
  );
};

export default Currency;
