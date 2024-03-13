import { useMutation } from "@tanstack/react-query";
import { Provider } from "ethers";
import { useState } from "react";
import { DataDisplayer } from "./data-displayer";

interface EthereumAddressBalanceProps {
    provider: Provider,
}
export default function EthereumAddressBalance({ provider }: EthereumAddressBalanceProps) {

    const [inputAddress, setInputAddress] = useState<string>('ethers.eth');

    if (!provider) {
        throw new Error('No Provider Object was provided');
    }


    const { mutate, data, isError, isPending } = useMutation({
        mutationFn: (address: string) => provider.getBalance(address),
    });

    const handleGetBalanceClicked = () => {
        mutate(inputAddress);
    }


    return (
        <div
            className="etherum-wrapper-account-balance"
        >
            <DataDisplayer
                data={data}
                isError={isError}
                isLoading={isPending}
            />
            <input
                type="text"
                id="etherum-balance-address"
                className="etherum-input-account-balance"
                value={inputAddress}
                onChange={(e) => setInputAddress(e.target.value)}
            />
            <button
                className="etherum-button-account-balance"
                onClick={handleGetBalanceClicked}
            >
                Get Balance
            </button>
        </div>
    )

}