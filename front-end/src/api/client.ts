import { GraphQLClient } from "graphql-request";

const APIUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/graphql"; 

export const client = new GraphQLClient(APIUrl, {
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
