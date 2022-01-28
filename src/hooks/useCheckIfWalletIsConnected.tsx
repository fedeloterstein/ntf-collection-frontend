import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useSetupEventListener } from "./useSetupEventListener";

export const useCheckIfWalletIsConnected = () => {
    const setupEventListener = useSetupEventListener();
    const { setCurrentAccount } = useContext(AuthContext);
    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                console.log("Make sure you have metamask!");
                return;
            } else {
                console.log("We have the ethereum object", ethereum);
            }

            const accounts = await ethereum.request({ method: "eth_accounts" });
               
            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account:", account);
                setCurrentAccount(account);

                // Setup listener! This is for the case where a user comes to our site
                // and ALREADY had their wallet connected + authorized.
                setupEventListener()
            } else {
                console.log("No authorized account found")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return checkIfWalletIsConnected;
}
