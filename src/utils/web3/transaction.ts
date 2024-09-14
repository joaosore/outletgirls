import { ethers } from 'ethers';
import { api } from '../../services/api';

interface IContract {
  network: string;
  contract: string;
  token: string;
  decimals: number;
  image_url: string;
  hash: string;
  de;
}

async function transaction(network, token, recipient, amount, networks) {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const currentGasPrice = await provider.getGasPrice();
      const adjustedGasPrice = currentGasPrice.mul(ethers.BigNumber.from(2));

      const overrides = {
        gasLimit: 1000000,
        gasPrice: adjustedGasPrice,
      };

      const signer = provider.getSigner();
      const contracts = await api.get(
        `/contract/by-network/${
          networks.find((item) => item.chainId === network)?.id
        }`
      );

      const tokenAddress: any = contracts.data.find(
        (item) => item.currency.currency === JSON.parse(token?.coin).currency
      );

      const tokenAbi = [
        'function transfer(address to, uint amount) returns (bool)',
      ];

      const tokenContract = new ethers.Contract(
        tokenAddress.hash,
        tokenAbi,
        signer
      );

      const amountInUnits = ethers.utils.parseUnits(
        amount,
        tokenAddress.decimals
      );

      const tx = await tokenContract.transfer(
        recipient,
        amountInUnits,
        overrides
      );

      return {
        status: 'finish',
        message: tx,
      };
    } catch (error) {
      if (error.message.includes('user rejected transaction')) {
        return {
          status: 'error',
          message: 'Transação rejeitada pelo usuário!',
        };
      } else {
        console.log(error);
      }
    }
  } else {
    console.log('MetaMask (ou outro provedor de carteira) não está instalado!');
  }
}

async function validHashTransaction(tx) {
  const receipt = await tx.wait();
  console.log('Transaction Confirmed:', receipt);
}

export { transaction, validHashTransaction };
