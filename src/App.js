import { useState } from "react";
import CryptoDetatails from "../components/CryptoDetails.component";
import CryptoList from "../components/CryptoList.component";
import "./styles.css";

export default function App() {
  const [crypto, setCrypto] = useState();

  const handleChange = (crypto) => {
    setCrypto(crypto);
  };

  return (
    <main className="container flex-row">
      <section className="cryptoList">
        <CryptoList handleChange={handleChange} />
      </section>

      <section className="cryptoDescription">
        {crypto && <CryptoDetatails crypto={crypto} />}
      </section>
    </main>
  );
}
