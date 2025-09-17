import { GraphQLClient } from "graphql-request";


export const client = new GraphQLClient("http://localhost:3001/graphql", {
    headers: () => {
        
        let User: string | null = null;

        if(typeof window !== "undefined")
            User = localStorage.getItem('user');

        const userObj = JSON.parse(User ?? '{}');
        return {
            Authorization: `Bearer ${userObj.token || ''}`
        };
        
    },
});
