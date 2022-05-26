
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_VIEW_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};


