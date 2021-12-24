import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Trend = () => {
  const { currencyName } = useParams();

  const currencyData = useSelector((state) => state.currency[currencyName]);

  return (
    <div className="wrapper">
      <div className="trend">
        {currencyData.map((currency, i) => (
          <div key={i}>{currency[currencyName].usd} $ </div>
        ))}
      </div>
    </div>
  );
};

export default Trend;
