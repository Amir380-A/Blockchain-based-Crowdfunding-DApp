/* eslint-disable no-undef */
/** @format */

async function main() {
  const [add1, add2, add3, add4, add5, add6, add7] = await ethers.getSigners()
  console.log(`Deploying contracts with the account: ${add1.address}`)
  // const balance = await add1.getBalance();
  // console.log(`Account balance: ${balance.toString()}`);

  const CrowdCharity = await ethers.getContractFactory('CrowdCharity')
  const crowdcharity = await CrowdCharity.deploy()

  const REWARD_CONTRACT_ADDRESS = await crowdcharity.rewardContract()
  const charityrewards = await ethers.getContractAt(
    'CharityRewards',
    REWARD_CONTRACT_ADDRESS
  )

  console.log(`CrowdCharity address: ${crowdcharity.address}`)
  console.log(`CharityRewards address: ${charityrewards.address}`)

  } 
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
