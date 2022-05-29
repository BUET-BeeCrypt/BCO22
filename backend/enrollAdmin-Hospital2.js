/**
 * @desc Execute this file to create and enroll an admin at Hospital 2.
 */


const {Wallets} = require('fabric-network');
const FabricCAServices = require('fabric-ca-client');
const path = require('path');
const {buildCAClient, enrollAdmin} = require('../fabric/medidapp/application-javascript/CAUtil.js');
const {buildCCPHosp2, buildWallet} = require('../fabric/medidapp/application-javascript/AppUtil.js');
const adminHospital2 = "admin"//'hosp2admin';
const adminHospital2Passwd = "adminpw"//'hosp2lithium';

const mspHosp2 = 'Org2MSP'//'hosp2MSP';
const walletPath = path.join(__dirname, '../fabric/medidapp/application-javascript/wallet');

/**
 * @description This functions enrolls the admin of Hospital 2
 */
exports.enrollAdminHosp2 = async function() {
  try {
    // build an in memory object with the network configuration (also known as a connection profile)
    const ccp = buildCCPHosp2();

    // build an instance of the fabric ca services client based on
    // the information in the network configuration
    const caClient = buildCAClient(FabricCAServices, ccp, 'ca.org2.example.com');

    // setup the wallet to hold the credentials of the application user
    const wallet = await buildWallet(Wallets, walletPath);

    // to be executed and only once per hospital. Which enrolls admin and creates admin in the wallet
    await enrollAdmin(caClient, wallet, mspHosp2, adminHospital2, adminHospital2Passwd);

    console.log('msg: Successfully enrolled admin user ' + adminHospital2 + ' and imported it into the wallet');
  } catch (error) {
    console.error(`Failed to enroll admin user ' + ${adminHospital2} + : ${error}`);
    process.exit(1);
  }
};
