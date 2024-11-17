import React, { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User rejected the request:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this app.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>MetaMask Integration with React</h1>
      {account ? (
        <div>
          <p>Connected Account: {account}</p>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect MetaMask Wallet</button>
      )}
    </div>
  );
}

export default App;
