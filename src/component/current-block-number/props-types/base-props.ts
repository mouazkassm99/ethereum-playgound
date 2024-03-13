import { Provider } from "ethers";

export type BaseProps = {
    provider: Provider;
    refetchInMs?: number;
}