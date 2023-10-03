import React from "react";
import ReactDOM from "react-dom";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/aos/dist/aos.css";
import { createPublicClient, http } from "viem";
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: "yourAlchemyApiKey" }), publicProvider()]
);
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),

    new WalletConnectConnector({
      chains,
      options: {
        projectId: "8a91f6dea1641db53f1ac5a0d008910b",
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

ReactDOM.render(
  <WagmiConfig config={config}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WagmiConfig>,
  document.getElementById("root")
);
