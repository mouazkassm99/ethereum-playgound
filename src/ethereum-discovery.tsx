/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers, Provider } from "ethers"
import { useEffect, useState } from "react"
import EthereumCurrentBlockNumberDisplayer from "./component/ethereum-current-block-number-displayer"
import CustomEtherumProvider from "./component/custom-etherum-provider"
import EthereumAddressBalance from "./component/etherum-addresss-balance"

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


                <EthereumAddressBalance
                    provider={provider}
                />

            </CustomEtherumProvider>

        </div>
    )
}