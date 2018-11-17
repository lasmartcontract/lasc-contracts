pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

contract LASCInterestToken is ERC20, ERC20Detailed, ERC20Burnable, ERC20Mintable {
    constructor(string _name, string _symbol, uint8 _decimals)
      ERC20Burnable()
      ERC20Mintable()
      ERC20Detailed(_name, _symbol, _decimals)
      ERC20()
      public
    { }
}