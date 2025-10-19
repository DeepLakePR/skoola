import { client } from "./client";

export const registerUser = async (
    name: string, 
    email: string, 
    password: string,
    course: string
) => {
    const mutation = `
        mutation {
            register(
                name: "${name}",
                email: "${email}",
                password: "${password}",
                course: "${course}"
            )
        }
    `

    return client.request(mutation)
}

export const loginUser = async (
    email: string,
    password: string
) => {
    const mutation = `
        mutation {
            login(
                email: "${email}",
                password: "${password}"
            ) {
                id,
                email,
                name,
                token
            }
        }
    `

    return client.request(mutation)
}

export const updateUserName = async (
    userId: string,
    name: string
) => {
    const mutation = `
        mutation {
            updateName(
                userId: "${userId}",
                name: "${name}"
            )
        }
    `

    return client.request(mutation);
}
