const CryptoDetatails = ({ crypto }) => {
  return (
    <div className="flex-col">
      <p className="cryptoTitle">Name: {crypto?.name}</p>

      <p className="cryptoTitle">Price: {crypto?.price}</p>

      <p className="cryptoTitle">Description: {crypto?.description}</p>
    </div>
  );
};

export default CryptoDetatails;
