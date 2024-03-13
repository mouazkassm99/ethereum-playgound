/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers, formatEther, Provider } from "ethers"
import { useEffect, useState } from "react"
import EthereumCurrentBlockNumberDisplayer from "./component/ethereum-current-block-number-displayer"
import CustomEtherumProvider from "./component/custom-etherum-provider"

export default function EthereumDiscovery() {



    const [provider, setProvider] = useState<null | Provider>(null)

    useEffect(() => {

        const ethereumObjInWindow = (window as any).ethereum
        if (!ethereumObjInWindow) {

            alert('Meta Mask is not installed')
            setProvider(ethers.getDefaultProvider())

        } else {
            setProvider(new ethers.BrowserProvider(ethereumObjInWindow))
        }

    }, [])

    const handleGetBlockNumberClicked = async () => {
        const blockNumber = await provider.getBlockNumber();

        alert('blockNumber ' + blockNumber);
    }

    const handleGetCurrentBalanceClicked = async () => {
        const currentBalance = await provider.getBalance("ethers.eth");

        const formattedEther = formatEther(currentBalance);

        alert('current balance ' + formattedEther);
    }

    if (!provider) {
        return (
            <>
                Loading and connecting to the network...
            </>
        )
    }

    return (
        <div style={{
            display: "flex",
            gap: "1rem"
        }}>

            <CustomEtherumProvider>

                <EthereumCurrentBlockNumberDisplayer
                    provider={provider}
                    refetchInMs={2000}
                />
            </CustomEtherumProvider>

            <button onClick={handleGetBlockNumberClicked}>
                get block number
            </button>

            <button onClick={handleGetCurrentBalanceClicked}>
                get current balance
            </button>
        </div>
    )
}