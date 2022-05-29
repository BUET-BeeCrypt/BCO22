/**
 * @desc This file creates a user named 'appUser' at Hospital 1. (Just for testing. Use the API to create a patient)
 */


const {Wallets} = require('fabric-network');
const FabricCAServices = require('fabric-ca-client');
const path = require('path');
const {buildCAClient, registerAndEnrollUser} = require('../fabric/medidapp/application-javascript/CAUtil.js');
const walletPath = path.join(__dirname, '../fabric/medidapp/application-javascript/wallet');
const {buildCCPHosp1, buildCCPHosp2, buildWallet, buildCCPHosp3} = require('../fabric/medidapp/application-javascript/AppUtil.js');
let mspOrg;
let adminUserId;
let caClient;

/**
 * @param {String} hospitalId
 * @param {string} userId
 * @param {String} attributes
 */
exports.enrollRegisterUser = async function(hospitalId, userId, attributes) {
  try {
    // setup the wallet to hold the credentials of the application user
    const wallet = await buildWallet(Wallets, walletPath);
    hospitalId = parseInt(hospitalId);

    if (hospitalId === 1) {
      // build an in memory object with the network configuration (also known as a connection profile)
      const ccp = buildCCPHosp1();

      // build an instance of the fabric ca services client based on
      // the information in the network configuration
      caClient = buildCAClient(FabricCAServices, ccp, 'ca.org1.example.com' /* 'ca.hosp1.spondon.com' */);

      mspOrg = 'Org1MSP';//'hosp1MSP';
      adminUserId = 'admin'//'hosp1admin';
    } else if (hospitalId === 2) {
      // build an in memory object with the network configuration (also known as a connection profile)
      const ccp = buildCCPHosp2();

      // build an instance of the fabric ca services client based on
      // the information in the network configuration
      caClient = buildCAClient(FabricCAServices, ccp, 'ca.org2.example.com'/* 'ca.hosp2.spondon.com' */);

      mspOrg = "Org2MSP"//'hosp2MSP';
      adminUserId = 'admin';//'hosp2admin';
    } else if (hospitalId === 3) {
      // build an in memory object with the network configuration (also known as a connection profile)
      const ccp = buildCCPHosp3();

      // build an instance of the fabric ca services client based on
      // the information in the network configuration
      caClient = buildCAClient(FabricCAServices, ccp, /* 'ca.hosp3.spondon.com' */);

      mspOrg = 'hosp3MSP';
      adminUserId = 'hosp3admin';
    }
    // enrolls users to Hospital 1 and adds the user to the wallet
    await registerAndEnrollUser(caClient, wallet, mspOrg, userId, adminUserId, attributes);
    console.log('msg: Successfully enrolled user ' + userId + ' and imported it into the wallet');
  } catch (error) {
    console.error(`Failed to register user "${userId}": ${error}`);
    process.exit(1);
  }
};
