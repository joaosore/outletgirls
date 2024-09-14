import axios from 'axios';
import { ethers } from 'ethers';

async function getTransactionDetails(rpc_url, transactionHash, decimals) {
  const provider = new ethers.providers.JsonRpcProvider(rpc_url);

  const erc20Abi = [
    'function transfer(address to, uint amount)',
    'function symbol() view returns (string)',
  ];

  const tx = await provider.getTransaction(transactionHash);

  if (tx.to && tx.data !== '0x') {
    const contract = new ethers.Contract(tx.to, erc20Abi, provider);

    try {
      const decodedInput = contract.interface.parseTransaction({
        data: tx.data,
        value: tx.value,
      });

      if (decodedInput) {
        // Assuming it's a 'transfer' function call (common for ERC-20)
        if (decodedInput.name === 'transfer') {
          const symbol = await contract.symbol(); // Fetch token symbol
          return {
            amount: ethers.utils.formatUnits(
              decodedInput.args.amount,
              decimals
            ),
            symbol,
            to: decodedInput.args.to,
          };
        }
      }
    } catch (error) {
      console.error('Error decoding transaction:', error);
    }
  } else {
    // If it's a regular ETH transfer
    if (tx.value.gt(0)) {
      console.log(
        `Transaction Action: Transfer ${ethers.utils.formatEther(
          tx.value
        )} ETH to ${tx.to}`
      );
    }
  }
}

export { getTransactionDetails };
