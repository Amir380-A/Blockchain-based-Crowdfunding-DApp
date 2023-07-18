/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { encodePath } = require('../utils.js')

async function main() {
  const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
  const USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
  const WETH9 = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

  let accounts

  const weth = await ethers.getContractAt('IWETH', WETH9)
  const dai = await ethers.getContractAt('IERC20', DAI)
  const usdc = await ethers.getContractAt('IERC20', USDC)

  accounts = await ethers.getSigners(1)


  const CrowdCharity = await ethers.getContractFactory('CrowdCharity')
  const crowdCharity = await CrowdCharity.deploy()
  await crowdCharity.connect(accounts[0]).createCampaign(100)

  

  //    Swap Single  

  await crowdCharity
    .connect(accounts[1])
    .fundCampaignWithEth(1, { value: 10n ** 18n })


  //    Swap multiple   
  const path = [USDC, DAI]
  const fees = [500]
  const encodedPath = encodePath(path, fees)
  // console.log(encodedPath)
  inputToken = await ethers.getContractAt('IERC20', path[0])
  inputAmount = 1000

  //    USDC to DAI     
  // generate USDC coins for address1 just for testing
  await crowdCharity
    .connect(accounts[0])
    .single_Swap_For_Testing(accounts[1].address, USDC, { value: 10n ** 18n }) // USDC
  // console.log("USDC:", await usdc.balanceOf(accounts[1].address))
  // approve contract to use this USDC amount
  await inputToken
    .connect(accounts[1])
    .approve(crowdCharity.address, inputAmount)
  // fund with USDC
  await crowdCharity
    .connect(accounts[1])
    .fundCampaignWithToken(1, inputAmount, encodedPath, path[0])

  //    DAI directly    
 

  // generate DAI coins for address1 just for testing
  await crowdCharity
    .connect(accounts[0])
    .single_Swap_For_Testing(accounts[1].address, DAI, { value: 10n ** 18n }) // DAI
  // approve contract to use this DAI amount
  await dai.connect(accounts[1]).approve(crowdCharity.address, inputAmount)
  //  fund with DAI
  await crowdCharity
    .connect(accounts[1])
    .fundCampaignWithToken(1, inputAmount, [], path[1])

  // funderAmount should increase in DAI
  console.log('DAI:', await crowdCharity.funderAmount(1, accounts[1].address))
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
