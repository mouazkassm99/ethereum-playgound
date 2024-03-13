import { EthereumCurrentBlockNumberDisplayer } from ".";
import { BaseProps } from "./props-types/base-props";

type EthereumCurrentBlock = BaseProps
export default function EthereumCurrentBlock({ provider, refetchInMs }: EthereumCurrentBlock) {
    return (

        <div className="etherum-block-number-wrapper">
            <p className="etherum-block-number-title">Current Block Number</p>
            <EthereumCurrentBlockNumberDisplayer
                provider={provider}
                refetchInMs={refetchInMs}
            />
            {refetchInMs &&
                <p className="etherum-block-number-description">
                    refreshes every {refetchInMs / 1000} seconds
                </p>
            }
        </div>
    )
}