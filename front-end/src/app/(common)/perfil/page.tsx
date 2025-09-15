"use client"

import Background from "@/components/Background";
import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Profile() {

    const router = useRouter();

    if(!localStorage.getItem("token"))
        return router.push("/login");

    return <div className="flex flex-col items-center justify-center p-8">
        <Background />

        <Image src="/user.png" width={150} height={150} alt="Usuário Skoola" />

        <div className="flex flex-col items-center bg-sky-500 mt-4 text-white gap-y-2 p-4 rounded-xl w-[85%]">
            <div className="flex gap-2 items-center">
                <p>E-mail:</p>
                <p className="font-bold">{"USER.EMAIL"}</p>
            </div>

            <div className="flex gap-2 items-center">
                <p>Nome:</p>
                <p className="font-bold">{"USER.NAME"}</p>

                <Button icon={<EditOutlined />} type="primary"></Button>
            </div>
        </div>

    </div>
}
