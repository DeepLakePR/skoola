import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient("http://localhost:3000/graphql", {
    headers: () => ({
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    }),
});
