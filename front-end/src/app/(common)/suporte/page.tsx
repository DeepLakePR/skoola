"use client"

import Logo from "@/components/Logo";
import { SendOutlined } from "@ant-design/icons";
import { Avatar, Button, Input } from "antd";

export default function Support(){

    return <div className="flex flex-col items-center p-8 px-24 h-[85%]">
        <Logo imgWidth={200} imgHeight={200} className="mb-4" />

        <div className="flex max-[768px]:flex-col p-4 items-center self-start">
            <Avatar size="large" src={"https://cdn-icons-png.flaticon.com/512/1068/1068549.png"} />

            <p className="ml-2 max-[768px]:ml-0! max-[768px]:mt-2! p-2 rounded-4xl border-1 border-zinc-300 bg-zinc-100">
                Oi, aluno! Se veio perguntar se a prova foi adiada, sinto dizer... aqui é só suporte, não milagre.
            </p>
        </div>

        <Input placeholder="Digite aqui sua Mensagem" suffix={<Button type="primary" shape="round"><SendOutlined /></Button>} 
        className="rounded-4xl! w-[50%]! max-[768px]:w-[100%]! mt-auto!" />

    </div>

}
