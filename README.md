# Blockchain-based-Crowdfunding-DApp
Graduation Project is about Making a Crowdfunding Decentralized App using Blockchain Technology on top of Ethereum Network.

## Description

The project involves creating a Blockchain-powered App designed for Decentralized Crowdfunding, emphasizing transparency, security, and decentralization. 
It utilizes Smart Contracts, which are immutable artificial contacts responsible for enforcing agreements without the possibility of alteration after deployment....


## Features 

We have two primary actors:
- Investor/ Donator/ Fundraiser.
- Campaign launcher.

Investors can:
- Login with Meta Mask Wallet
- Donate to campaigns
- Refund Money
- View Campaigns

Campaign launchers can:
- Launch Campaign
- Close Campaign
- Edit Campaign
- View Campaign
- Login with MetaMask 
- Withdraw Funds


The Frontend was made by ReactJS, the Backend by NodeJS, the Blockchain by Solidity, testing was by Mocha, Chai and Jest.

## Architecture

It has A frontend connected to both Blockchain and Backend, Blockchain is for verifying transactions and backend to serve and store information to the backend database (MongoDB).
It also uses decentralized file storage called IPFS for image storage. 



## Principles Used

- Test Driven Development: 
Since once Smart contracts are deployed to the Blockchain Network, it can not be changed. A Test Driven Development approach was made to write tests and mocks as scenarios and then write the required code to pass these tests.






