import { useQuery } from "@tanstack/react-query";
import { Provider } from "ethers";

interface EthereumCurrentBlockNumberDisplayerProps {
    provider: Provider;
    refetchInMs?: number;
}
export default function EthereumCurrentBlockNumberDisplayer(
    { provider, refetchInMs = undefined }: EthereumCurrentBlockNumberDisplayerProps
) {



    if (!provider) {
        throw new Error('No Provider Object was provided');
    }


    const { data, isLoading, isError } = useQuery({
        queryKey: ['provider'],
        queryFn: () => provider.getBlockNumber(),
        refetchInterval: refetchInMs ?? false,
    });

    if (isError) {
        return (
            <div>
                there was an error
            </div>
        )
    }

    if (isLoading) {
        return (
            <div>
                loading...
            </div>
        )
    }


    return (
        <div>
            {data}
        </div>
    )



}