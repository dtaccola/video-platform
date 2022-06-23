import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4om8u4w0ctu01yw95xmdbqw/master',
    cache: new InMemoryCache()
})