"use client"

import { useRouter } from "next/navigation";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const router = useRouter();

    if(localStorage.getItem("token"))
        return router.push("/perfil");

    return (
        <>
            {children}
        </>
    )
}
