const LASCInterestToken = artifacts.require("./LASCInterestToken");

module.exports = function(deployer) {
  deployer.deploy(LASCInterestToken, "Los Angeles Smart Contract Interest Token (LASC-I)", "LASC-I", 18);
};