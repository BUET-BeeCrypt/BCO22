/**
 * @desc Referenced from https://github.com/hyperledger/fabric-samples/tree/master/test-application/javascript
 */

const fs = require('fs');
const path = require('path');

/**
 * @author Jathin Sreenivas
 * @return {ccp} ccp
 * @description Creates a connection profile and returns the network config to Hospital 1. Reads the JSON file created
 * @description When CA is created there is a json for each hospital which specfies the connection profile.
 */
exports.buildCCPHosp1 = () => {
  // load the common connection configuration file
  /* const ccpPath = path.resolve(__dirname, '..', '..', 'first-network',
    'organizations', 'peerOrganizations', 'hosp1.spondon.com', 'connection-hosp1.json'); */
  console.log("======== start buildCCPHosp1 =========");
  const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations',
    'peerOrganizations', 'org1.example.com', 'connection-org1.json');

  const fileExists = fs.existsSync(ccpPath);
  if (!fileExists) {
    throw new Error(`no such file or directory: ${ccpPath}`);
  }
  const contents = fs.readFileSync(ccpPath, 'utf8');

  // build a JSON object from the file contents
  const ccp = JSON.parse(contents);

  console.log(`Loaded the network configuration located at ${ccpPath}\n`);
  return ccp;
};

/**
 * @author Jathin Sreenivas
 * @return {ccp} ccp
 * @description Creates a connection profile and returns the network config to Hospital 2. Reads the JSON file created
 * @description When CA is created there is a json for each hospital which specfies the connection profile.
 */
exports.buildCCPHosp2 = () => {
  // load the common connection configuration file
  /* const ccpPath = path.resolve(__dirname, '..', '..', 'first-network',
    'organizations', 'peerOrganizations', 'hosp2.spondon.com', 'connection-hosp2.json'); */
  console.log("======== start buildCCPHosp2 =========");
  const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations',
    'peerOrganizations', 'org2.example.com', 'connection-org2.json');

  const fileExists = fs.existsSync(ccpPath);
  if (!fileExists) {
    throw new Error(`no such file or directory: ${ccpPath}`);
  }
  const contents = fs.readFileSync(ccpPath, 'utf8');

  // build a JSON object from the file contents
  const ccp = JSON.parse(contents);

  console.log(`Loaded the network configuration located at ${ccpPath}\n`);
  return ccp;
};

/**
 * @author Jathin Sreenivas
 * @return {ccp} ccp
 * @description Creates a connection profile and returns the network config to Hospital 3. Reads the JSON file created
 * @description When CA is created there is a json for each hospital which specfies the connection profile.
 */
exports.buildCCPHosp3 = () => {
  // load the common connection configuration file
  const ccpPath = path.resolve(__dirname, '..', '..', 'first-network',
    'organizations', 'peerOrganizations', 'hosp3.spondon.com', 'connection-hosp3.json');
  const fileExists = fs.existsSync(ccpPath);
  if (!fileExists) {
    throw new Error(`no such file or directory: ${ccpPath}`);
  }
  const contents = fs.readFileSync(ccpPath, 'utf8');

  // build a JSON object from the file contents
  const ccp = JSON.parse(contents);

  console.log(`Loaded the network configuration located at ${ccpPath}`);
  return ccp;
};

/**
 * @author Jathin Sreenivas
 * @param  {*} Wallets
 * @param  {string} walletPath
 * @return {wallet} wallet
 * @description If there is no wallet presents, a new wallet is created else , returns the wallet that is present.
 * @description The wallet path is in ./patient-applcation/server/src/network/wallet
 */
exports.buildWallet = async (Wallets, walletPath) => {
  // Create a new  wallet : Note that wallet is for managing identities.
  let wallet;
  if (walletPath) {
    wallet = await Wallets.newFileSystemWallet(walletPath);
    console.log(`Built a file system wallet at ${walletPath}`);
  } else {
    wallet = await Wallets.newInMemoryWallet();
    console.log('Built an in memory wallet');
  }

  return wallet;
};

/**
 * @author Jathin Sreenivas
 * @param  {string} inputString
 * @return {string} jsonString
 * @description Formats the string to JSON
 */
exports.prettyJSONString = (inputString) => {
  if (inputString) {
    return JSON.stringify(JSON.parse(inputString), null, 2);
  } else {
    return inputString;
  }
};
