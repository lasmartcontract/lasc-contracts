const LASCInterestToken = artifacts.require("./LASCInterestToken");

contract("LASCInterestToken", async(accounts) =>{
  it("deploys", async() => {
    const instance = await LASCInterestToken.deployed();
    assert.isOk(instance);
  });

  it("reports detailed information", async() => {
    const instance = await LASCInterestToken.deployed();
    const symbol = await instance.symbol();
    const name = await instance.name();
    const decimals = await instance.decimals();

    assert.equal(symbol, "LASC-I");
    assert.equal(name, "Los Angeles Smart Contract Interest Token (LASC-I)");
    assert.equal(decimals.toNumber(), 18);

  });

});