import { useState, useEffect } from 'react';
import { useInkathon, useRegisteredContract, contractTx } from '@scio-labs/use-inkathon';
import BN from 'bn.js';

function Mint() {
  const { connect, activeAccount, api } = useInkathon();
  const { contract } = useRegisteredContract('nft_contract');
  const [amount, setAmount] = useState(0);
  const [toAddress, setToAddress] = useState(null);
  const [mintSuccessful, setMintSuccessful] = useState(false); // New state variable

  useEffect(() => {
    if (activeAccount) {
      setToAddress(activeAccount.address);
    }
  }, [activeAccount]);

  const mintTokens = async () => {
    if (!activeAccount || !api || !contract || !toAddress) {
      return;
    }

    await connect();

    if (activeAccount) {
      try {
        const value = new BN('1000000000000000000');
        await contractTx(api, activeAccount.address, contract, 'PayableMint::mint', { value }, [toAddress, amount]);
        console.log('Minting tokens successful');
        setMintSuccessful(true); // Update the state variable when minting is successful
      } catch (error) {
        console.error('Error minting tokens:', error);
        setMintSuccessful(false); // You can also set it to false here if the minting fails
      }
    }
  };

  return (
    <div>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      <button onClick={mintTokens}>Mint Tokens</button>
      {mintSuccessful && <p>Mint successful!</p>} {/* Conditionally render the success message */}
    </div>
  );
}

export default Mint;
