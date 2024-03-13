/* eslint-disable @typescript-eslint/no-explicit-any */
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

    const handleGetBalanceClicked = (e: any) => {
        e.preventDefault();
        mutate(inputAddress);
    }


    return (

        <>
            <div
                className="etherum-wrapper-account-balance"
            >
                <p className="etherum-balance-title">Balance For Address</p>


                <form className="etherum-balance-form">

                    <div className="etherum-balance-form-input-group">

                        <input
                            type="text"
                            id="etherum-balance-address"
                            className="etherum-input-account-balance"
                            placeholder="Address"
                            value={inputAddress}
                            onChange={(e) => {
                                setInputAddress(e.target.value)
                            }}
                        />
                    </div>
                    <button
                        className="etherum-button-account-balance"
                        onClick={handleGetBalanceClicked}
                        type="button"
                    >
                        Get Balance
                    </button>
                </form>

                {
                    (!!data || isError || isPending) &&
                    <div className="etherum-account-balance-footer">
                        <div className="line"></div>
                        <p className="etherum-account-balance-message">The Balance For The Address</p>
                        <div className="line"></div>
                    </div>
                }

                <DataDisplayer
                    data={data}
                    isError={isError}
                    isLoading={isPending}
                />
            </div>


        </>
    )

}