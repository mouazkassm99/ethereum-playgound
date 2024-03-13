import { useQuery } from "@tanstack/react-query";
import { BaseProps } from "./props-types/base-props";
import { StylesProps } from "./props-types/styles-props";

type EthereumCurrentBlockNumberDisplayerProps = BaseProps & StylesProps;
export default function EthereumCurrentBlockNumberDisplayer({
    provider,
    refetchInMs = undefined,
    errorStyles = undefined,
    loadingStyles = undefined,
    dataStyles = undefined,
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
                style={errorStyles}
            >
                there was an error
            </div>
        )
    }

    if (isLoading) {
        return (
            <div
                className="etherum-loading-block-number"
                style={loadingStyles}
            >
                loading...
            </div>
        )
    }


    return (
        <div
            className="etherum-data-block-number"
            style={dataStyles}
        >
            {data}
        </div>
    )

}