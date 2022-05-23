
require('@nomiclabs/hardhat-waffle')

module.exports = {
    solidity: '0.8.2',
    networks: {
      rinkeby: {
        url: "https://eth-rinkeby.alchemyapi.io/v2/_frMP4K1I4b0i6qs52yN-ZiUlBFXl7aM",
        accounts: ["2c04bd021bcaa141e9b0e79b591e9ca344ab6cf9b02e3ed3f491728e46640b75"]
      }
    }
}


