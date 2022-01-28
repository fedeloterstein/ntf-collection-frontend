import { ethers } from 'ethers';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import myEpicNft from '../utils/MyEpicNFT.json';

export const useAskContractToMintNft = () => {

  const { setLoading } = useContext(AuthContext);
  const [message, setmessage] = useState<string | null>(null);

    const askContractToMintNft = async () => {
        try {
          const { ethereum } = window;
    
          if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS as string, myEpicNft.abi, signer);
            
            setLoading(true)
            setmessage("Going to pop wallet now to pay gas...")
            console.log("Going to pop wallet now to pay gas...")
            let nftTxn = await connectedContract.makeAnEpicNFT();
            
            setmessage("Mining...please wait.")
            console.log("Mining...please wait.")
            await nftTxn.wait();
            console.log(nftTxn);
            setmessage(null)
            setLoading(false)
            console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
    
          } else {
            console.log("Ethereum object doesn't exist!");
          }
        } catch (error) {
          console.log(error)
        }
      }

     return {askContractToMintNft, message}; 
};
