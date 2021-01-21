require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note punch public gesture farm equal gaze'; 
let testAccounts = [
"0x2d808606ba4fcc650f3404652ebece7720f2eb2387b52abee41e29a84a19a6cc",
"0x16f4acd6c58f6170e43cf9ba793c33529da337e4d78b0d64a78f6a81857c87f8",
"0x3a6af9be515fa0342a6f68a4da944489f6e177b07e25db07e7d682d237b1e25f",
"0x584da4b1b2b8ba0fbc9e35bd0cc9d48ab46c532fd158ad1b8cc8fa50fd35811a",
"0x27c21a61b0d3c90067c3028b02e938905e25bd663f4dcbde6f99c332f11b183a",
"0xb9dedb7bc1cf176dcb53e7fef4d77406b38d97071de9d26751cef25251a479d4",
"0xb758186210d77f8c25a97c9b8b8ead5a6592e42d5af99c594c194a72ed3868bf",
"0x563a72cdfc903955c05ab5f128c08f727b0f25163126365b2a8769cf45c730bf",
"0xe8b6605b6c602428e28a21ed53deb26cf93248a140f4489bbbe26e52e9452158",
"0x6af3b134b3f3436aa3faa3735b1ac4f24e9f12df1bf5c9026bd5e6d9aea48645"
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
