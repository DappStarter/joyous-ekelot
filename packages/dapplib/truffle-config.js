require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy razor pulse pulse hunt pave army gift'; 
let testAccounts = [
"0xf95585a3d85ff0f5cd6398e01734c693b3ca06575d9ad56845471801cbbe1b81",
"0xdd93fb03d6fbc3a593fa35abb5101d3f2f0d9963bdb4b20207043a6e05e610d9",
"0x6cdd79cef54e5ec6e0d2e5b51fd72cc44ad6cb1cb287da5db661016a6a029c45",
"0xbafddc722f9cd2870b7d7bb6c3e6c101012c48f6483d77761678ec52efd78c9f",
"0x531242abc1e1be8053b4d7736d32ddf7ae2f6086848e79e777688a51205eb3f6",
"0x2160144a9683392d5cd373e5612497ac228513aa95f29f4e0dfa4d2bdfbc7671",
"0xcde60d5a44468cb51c0d1968740b2cded9220580afed5f280095de0ef0531a4f",
"0xc23a4202e6f0dd35ffc653a7983b277ede8a40b1462a06e661e292093cfc0dfc",
"0x3f1e90a762c0fa295f7128054216c5b292f2a1abfcba2b3eeeea9fc59178667a",
"0x11718f160758a68d55d284bcc88c95b5241928825cf07cc88d0864534bf100a0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
