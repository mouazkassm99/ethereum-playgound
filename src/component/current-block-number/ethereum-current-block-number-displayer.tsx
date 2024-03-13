import { useQuery } from "@tanstack/react-query";
import { BaseProps } from "./props-types/base-props";

type EthereumCurrentBlockNumberDisplayerProps = BaseProps;
export default function EthereumCurrentBlockNumberDisplayer({
    provider,
    refetchInMs = undefined,
}: EthereumCurrentBlockNumberDisplayerProps) {

    if (!provider) {
        throw new Error('No Provider Object was provided');
    }


    const { data, isLoading, isError } = useQuery({
        queryKey: ['provider-block-number'],
        queryFn: () => provider.getBlockNumber(),
        refetchInterval: refetchInMs ?? false,
    });

    if (isError) {
        return (
            <div
                className="etherum-error-block-number"
            >
                there was an error
            </div>
        )
    }

    if (isLoading) {
        return (
            <div
                className="etherum-loading-block-number"
            >
                loading...
            </div>
        )
    }


    return (
        <div
            className="etherum-data-block-number"
        >
            {data}
        </div>
    )

}