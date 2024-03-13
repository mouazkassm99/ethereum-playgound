import { useMutation } from "@tanstack/react-query";
import { Provider, formatEther } from "ethers";
import { useState } from "react";

interface EthereumAddressBalanceProps {
    provider: Provider,
}
export default function EthereumAddressBalance({ provider }: EthereumAddressBalanceProps) {

    const [inputAddress, setInputAddress] = useState<string>('ethers.eth');

    if (!provider) {
        throw new Error('No Provider Object was provided');
    }


    const { mutate, data } = useMutation({
        mutationFn: (address: string) => provider.getBalance(address),
    });

    const handleGetBalanceClicked = () => {
        mutate(inputAddress);
    }

    let toDisplayData = '';
    if (data) {
        toDisplayData = formatEther(data);
    }


    return (
        <div>
            <div>{toDisplayData}</div>
            <input
                type="text"
                id="etherum-balance-address"
                value={inputAddress}
                onChange={(e) => setInputAddress(e.target.value)}
            />
            <button onClick={handleGetBalanceClicked}>Get Balance</button>
        </div>
    )

}