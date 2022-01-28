import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useSetupEventListener } from "./useSetupEventListener";

export const useConnectWallet = () => {
    const { setCurrentAccount } = useContext(AuthContext);
    const setupEventListener = useSetupEventListener();
    const connectWallet = async () => {
        try {
          const { ethereum } = window;
  
          if (!ethereum) {
            alert("Get MetaMask!");
            return;
          }
  
          let chainId = await ethereum.request({ method: 'eth_chainId' });
          console.log("Connected to chain " + chainId);
  
          // String, hex code of the chainId of the Rinkebey test network
          const rinkebyChainId = "0x4";
          if (chainId !== rinkebyChainId) {
            alert("You are not connected to the Rinkeby Test Network!");
            return
          }
  
          const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  
          console.log("Connected", accounts[0]);
          setCurrentAccount(accounts[0]);
  
          // Setup listener! This is for the case where a user comes to our site
          // and connected their wallet for the first time.
          setupEventListener()
        } catch (error) {
          console.log(error)
        }
      }

    return connectWallet;
}
