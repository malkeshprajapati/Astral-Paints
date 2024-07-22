"use client";

import {
    ApolloLink,
    HttpLink
} from "@apollo/client";
import {
    ApolloClient,
    ApolloNextAppProvider,
    InMemoryCache,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";

function makeClient() {
    const httpLink = new HttpLink({
        uri: process.env.API_ROUTE,
    });
    return new ApolloClient({
        cache: new InMemoryCache(),
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                    new SSRMultipartLink({
                        stripDefer: true,
                    }),
                    httpLink,
                ])
                : httpLink,
    });
}

export function ApolloWrapper({ children }) {
    //with this composition pattern, children component will always render on server
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}