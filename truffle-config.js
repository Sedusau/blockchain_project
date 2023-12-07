
const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = 'runway hobby negative certain toilet advance dragon alien lyrics message giant fall';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    sepolia:{
      provider: ()=>
      new HDWalletProvider(
        mnemonic,
        'https://sepolia.infura.io/v3/3851eb6023c148b397e3c008292768e9'
      ),
      network_id:11155111,
      gas: 4000000, // Adjust the gas limit as per your requirements
 gasPrice: 10000000000, // Set the gas price to an appropriate value
 confirmations: 2, // Set the number of confirmations needed for a transaction
 timeoutBlocks: 200, // Set the timeout for transactions
 skipDryRun: true // Skip the dry run option
      
    }
  },

  compilers:{
    solc: {
      version:"0.7.2"

    }

  }
  
};
