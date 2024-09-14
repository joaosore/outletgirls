async function switchNetwork(chainId) {
  if (window.ethereum) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: chainId,
                rpcUrl: 'RPC_URL', // Substitua com a URL RPC da rede
              },
            ],
          });
        } catch (addError) {
          console.error('Failed to add the network:', addError);
        }
      } else {
        console.error('Failed to switch the network:', error);
      }
    }
  } else {
    console.error('Metamask not found');
  }
}

export { switchNetwork };
