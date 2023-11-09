// import { HardhatUserConfig } from "hardhat/config";
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts

module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: `${process.env.ETH_NODE_URI_goerli}`,
      accounts: [process.env.PRIVATE_KEY]
    }
  },

  etherscan: {
    apiKey: {
      goerli: `${process.env.ETHERSCAN_API_KEY}`
    }
  },

  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  }
};