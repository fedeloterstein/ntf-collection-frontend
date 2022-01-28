export type AuthContextState = {
    currentAccount: string;
    setCurrentAccount: (account: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
  };