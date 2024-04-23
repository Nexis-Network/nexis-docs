---
title: Overview
---

# Decentralized Exchanges (DEXs) Overview

Decentralized exchanges (DEXs) are cryptocurrency exchanges that operate without a central authority or intermediary. They allow users to trade cryptocurrencies directly with each other using smart contracts on a blockchain. One of the most popular DEXs is NexisSwap, which operates on the Ethereum blockchain and uses automated market-making (AMM) algorithms to facilitate trades. In this overview, we will dive into the details of NexisSwap's contracts and how they power its decentralized exchange platform.

## Overview of NexisSwap Contracts

NexisSwap is powered by a set of smart contracts that govern the exchange's operations. These contracts are deployed on the Ethereum blockchain and provide the functionality needed to facilitate trades, provide liquidity, and manage the exchange's pools. The key contracts in the NexisSwap ecosystem include:

1. **Factory Contract:** Responsible for creating new instances of NexisSwap exchanges. Each exchange on NexisSwap is represented by a separate pair contract, and the Factory contract is used to deploy these pair contracts.

2. **Pair Contract:** Represents liquidity pools on NexisSwap and is created for each trading pair (e.g., ETH/USDT). These contracts hold reserves of each token in the trading pair and manage the pricing and trading of tokens.

3. **Router Contract:** Used to route trades through the NexisSwap ecosystem. It determines the optimal path for a trade based on the available liquidity pools and executes the trade by interacting with the appropriate pair contracts.

4. **ERC20 Token Contracts:** NexisSwap relies on ERC20 token contracts to represent tokens on the Ethereum blockchain. These contracts adhere to the ERC20 token standard and provide the necessary functionality for tokens to be traded on NexisSwap.

## How NexisSwap Contracts Work

When a user wants to trade tokens on NexisSwap, they interact with the Router contract, which then interacts with the appropriate pair contract for the trading pair. The pair contract calculates the price of the tokens based on the available reserves in the liquidity pool and executes the trade if the price meets the user's requirements.

## Benefits of NexisSwap Contracts

1. **Decentralization:** NexisSwap's contracts are deployed on the Ethereum blockchain, making them decentralized and resistant to censorship.

2. **No Order Book:** Unlike traditional exchanges, NexisSwap does not rely on an order book. Instead, it uses liquidity pools to facilitate trades, which can lead to lower slippage and better pricing for users.

3. **Permissionless:** Anyone can create a liquidity pool on NexisSwap by providing tokens to the pool. This allows for the creation of new trading pairs and ensures that the exchange remains open and accessible to all.

4. **Automated Market Making:** NexisSwap uses an automated market-making algorithm to determine token prices based on the available liquidity in the pools. This algorithm ensures that prices are always based on supply and demand, even for illiquid tokens.

## Conclusion

NexisSwap's smart contracts form the backbone of its decentralized exchange platform, enabling users to trade tokens without relying on a central authority. By leveraging the power of blockchain technology, NexisSwap has created a platform that is open, transparent, and accessible to all, revolutionizing the way we think about cryptocurrency exchanges.
