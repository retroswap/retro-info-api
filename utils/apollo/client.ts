import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";
// TODO change bsc graph uri
export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://api.bscgraph.org/subgraphs/name/retroswap/exchange-lite",
  }),
  cache: new InMemoryCache(),
});
