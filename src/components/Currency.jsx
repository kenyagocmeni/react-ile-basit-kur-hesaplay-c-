import React, { useState } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

function Currency() {
  const [amount, setamount] = useState(0);
  const [fromCurrency, setfromCurrency] = useState("USD");
  const [toCurrency, settoCurrency] = useState("TRY");
  const [result, setresult] = useState(0);

  let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
  let API_KEY = "fca_live_QE7NaL9At5zhFsqOe0pTZpExtErdduXrJNJr7p4T";

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setresult(result);
  };

  return (
    <div className="currency-div">
      <div>
        <h3
          style={{
            marginTop: "-20px",
            fontFamily: "arial",
            backgroundColor: "black",
            color: "white",
          }}
        >
          DÖVİZ KURU UYGULAMASI
        </h3>
      </div>

      <div>
        <input
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          type="number"
          className="amount"
        />
        <select
          onChange={(e) => setfromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaRegArrowAltCircleRight
          style={{ fontSize: "25px", marginRight: "10px" }}
        />

        <select
          onChange={(e) => settoCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input
          value={result}
          onChange={(e) => setresult(e.target.value)}
          type="number"
          className="result"
        />
      </div>
      <div>
        <button onClick={exchange} className="exchange-button">
          Çevir
        </button>
      </div>
    </div>
  );
}

export default Currency;
