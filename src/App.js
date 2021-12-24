import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useActions } from "./hooks/useActions";
import Currency from "./pages/Currency";
import General from "./pages/General";
import Login from "./pages/Login";
import Trend from "./pages/Trend";

function App() {
  const isAuthorized = useSelector((state) => state.login.isAuthorized);
  const { getBitcoinAction, getEthereumAction } = useActions();

  const getAllCurrencies = () => {
    getBitcoinAction();
    getEthereumAction();
  };

  useEffect(() => {
    if (isAuthorized) {
      const interval = setInterval(() => getAllCurrencies(), 1000);

      return () => clearInterval(interval);
    }
  }, [isAuthorized]);

  return (
    <div className="app">
      <Header />
      <Routes>
        {isAuthorized ? (
          <>
            <Route path="/currency" exact element={<Currency />} />
            <Route path="/trends/:currencyName" exact element={<Trend />} />
          </>
        ) : (
          <>
            <Route path="/login" exact element={<Login />} />
            <Route
              path="/currency"
              exact
              element={<Navigate to="/login" replace />}
            />
            <Route
              path="/trends/:currencyName"
              exact
              element={<Navigate to="/login" replace />}
            />
          </>
        )}
        <Route path="/" exact element={<General />} />
      </Routes>
    </div>
  );
}

export default App;
