import { useToast } from "@chakra-ui/react";
import { ethers } from "ethers";
import myEpicNft from '../utils/MyEpicNFT.json';

export const useSetupEventListener = () => {

  const toast = useToast()
   // Setup our listener.
   const setupEventListener = async () => {
    // Most of this looks the same as our function askContractToMintNft
    try {
      const { ethereum } = window;

      if (ethereum) {
        // Same stuff again
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS as string, myEpicNft.abi, signer);
        
        // THIS IS THE MAGIC SAUCE.
        // This will essentially "capture" our event when our contract throws it.
        // If you're familiar with webhooks, it's very similar to that!
        connectedContract.on("NewEpicNFTMinted", (from, tokenId) => {
          console.log(from, tokenId.toNumber())
          toast({
            title: `Your NFT was successfully minted`,
            status: 'success',
            isClosable: true,
          })
          return
        });


        console.log("Setup event listener!")

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  return setupEventListener;
};
