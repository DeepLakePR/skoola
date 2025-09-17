"use client"

import { useRouter } from "next/navigation";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const router = useRouter();


    if (typeof window !== "undefined") {
        const user = JSON.parse(localStorage.getItem("user") ?? "{}");

        if (user.token)
            return router.push("/perfil");

    }

    return (
        <>
            {children}
        </>
    )
}
