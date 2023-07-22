# Blockchain-based-Crowdfunding-DApp
Supply is about Making a Crowdfunding Decentralized App using Blockchain Technology on top of Ethereum Network.

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


## API Security:

- `JWT` authentication.
- Define `CORS` policy to allow only specific domains.
- Implemented Header security using the `Helmet` package.
- Passwords are hashed using an irreversible algorithm `bcrypt`.
- Implemented a strict endpoint validation system using Joi.

## API Versioning:

All routes are versioned by default `GET - api/v1`.

## API Features:

- [x] CRUD (Create, Read, Update, Delete) for all resources using RESTful API design.
- [x] Index Pagination - Search - Sort - Select - Filter.
- [x] API Versioning (v1).
- [x] Best Practices & Clean Code (MVC, SOLID, DRY, KISS).
- [x] Error Handling System (Generic error handler middleware with Correct HTTP Status Code & Error message).

## API Documentation:

### All Endpoints (overview):

#### Campaign routes:

- `GET - api/v1/` - get campaigns.
- `POST - api/v1/` - add campaigns.
- `GET - api/v1/donations/:campaignId/:address` - get user donations.
- `GET - api/v1/:campaignId` - get campaign by ID.
- `GET - api/v1/profiles/:address` - get campaign User.
- `PATCH - api/v1/:id` - get campaigns.
- `DELETE - api/v1/:id` - Delete campaign.
- `GET - api/v1/uploadImage` - Upload image for the campaign.

#### Reward routes:

- `GET - api/v1/` - get rewards.
- `GET - api/v1/profiles/:address` - get user rewards.

## How to use:

1. First of all, you have to configure the `.env` file using your credentials like MongoDB URL, Password, etc.
2. Second, install dependencies from the frontend, backend, and blockchain folders by navigating into the folder using `cd <folder-name>` and

```bash
npm install
npm run dev
```


 It will run the project's frontend and backend on ports configured in the .env file. You should deploy the blockchain part using either a fake mainnet by using Alchemy's API key or deploy it on the Sapoli testnet.

## How to run tests


```bash
 npm run test

```

## How to Deploy the Contract

Navigate to the blockchain folder and

```bash
 npm run deploy

```
and chooose one account from multiple ones to be your private and public key addresses and configure them and add them to the wallet (MetaMask)

## prices fluctionation problem:

We faced price fluctuations in cryptocurrencies in general, so we decided to use stable coins that are backed by the US dollar. We used DAI and converted currencies, whether it is ETH or any other tokenized currency.

## Technologies used 
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- Mocha
- Chai
- Joi
- Solidity
- Hardhat
- helmet
- jest 
- ReactJS






