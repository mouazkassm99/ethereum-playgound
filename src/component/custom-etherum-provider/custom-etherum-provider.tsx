import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface CustomEtherumProviderProps {
    children: React.ReactNode,
}

const queryClient = new QueryClient()

export default function CustomEtherumProvider(
    { children }: CustomEtherumProviderProps
) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}