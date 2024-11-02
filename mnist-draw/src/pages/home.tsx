import { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setIsAuthenticated(true);
        }
      }
      return;
    };
    checkWalletConnection().then(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <main className="w-screen min-h-screen flex justify-center items-center bg-zinc-700 gap-8">
        <p className="text-white text-xl">Loading...</p>
      </main>
    );
  return (
    <main className="w-screen min-h-screen flex justify-center items-center bg-zinc-700 gap-8">
        {isAuthenticated && (
            <a 
                href="/mnist"
                className="rounded-md shadow-md px-4 py-2 text-white bg-blue-600 hover:bg-blue-800 transition-all"
            >
                MNIST
            </a>
        )}
      {!isAuthenticated && (
        <button
          type="button"
          className="rounded-md shadow-md px-4 py-2 text-white bg-blue-600 hover:bg-blue-800 transition-all"
          onClick={async () => {
            try {
              if (!window.ethereum) {
                alert("Please install MetaMask to use this feature.");
                return;
              }

              new ethers.BrowserProvider(window.ethereum);
              setIsAuthenticated(true);
            } catch (error) {
              console.error("Wallet connection failed:", error);
              setIsAuthenticated(false);
            }
          }}
        >
          Authenticate
        </button>
      )}
    </main>
  );
}
