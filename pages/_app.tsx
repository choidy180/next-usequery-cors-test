import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
            }
        }
    })
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}

export default App;
