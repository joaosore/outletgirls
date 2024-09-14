import { ethers } from 'ethers';

async function connectWallet() {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      return address;
    } catch (error) {
      console.error('Erro ao criar Web3Provider:', error);
    }
  } else {
    console.log('MetaMask (ou outro provedor de carteira) não está instalado!');
  }
}

export { connectWallet };
