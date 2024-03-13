import { formatEther } from "ethers"
import { BaseProps } from "./props/base-props";


type DataDisplayerProps = BaseProps;

export default function DataDisplayer({
    data,
    isError,
    isLoading,
}: DataDisplayerProps) {

    if (isError) {
        return (
            <div
                className="etherum-error-account-balance"
            >
                there was an error
            </div>
        )
    }

    if (isLoading) {
        return (
            <div
                className="etherum-loading-account-balance"
            >
                loading...
            </div>
        )
    }

    let toDisplayData = '';

    if (data) {
        toDisplayData = formatEther(data);
    }

    return (
        <div
            className="etherum-data-account-balance"
        >
            {toDisplayData}
        </div>
    )
}