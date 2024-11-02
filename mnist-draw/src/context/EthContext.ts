import { createContext } from "react";

interface IEthContext {
    isAuthenticated: boolean;
}

const EthContext = createContext<IEthContext>({} as IEthContext);

export default EthContext;