import { cryptos } from "./helper";
import "./crypto-list.css";

const CryptoList = ({ handleChange }) => {
  return (
    <ul>
      {cryptos.map((crypto) => (
        <li key={crypto?.name}>
          <button className="cryptoTitle" onClick={() => handleChange(crypto)}>
            {crypto?.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CryptoList;
