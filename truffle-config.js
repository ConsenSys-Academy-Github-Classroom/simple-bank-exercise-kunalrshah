module.exports = {
  networks: {
    local: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
       version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
         enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
       }
    }
  },
// // To run contract with the latest compiler, uncomment lines 10-14 below:
// compilers: { 
//   solc: {
//     version: "^0.8",    // Fetch latest 0.8.x Solidity compiler 
//   }
// }
};
