"use client"

import Background from "@/components/Background";
import Logo from "@/components/Logo";
import { Button, Input } from "antd";

export default function Cadastro() {
    return <div className="p-4 flex h-full items-center justify-center">
        <Background />

        <div className="p-4 bg-white rounded-3xl w-[85%] h-full flex flex-col items-center justify-center gap-3">

            <Logo imgWidth={200} imgHeight={200} className="mb-8" />

            <p className="text-3xl">Cadastro</p>

            <div className="flex flex-col gap-2 w-80">
                <Input placeholder="Nome" about="Coloque seu nome" />
                
                <Input placeholder="E-mail" about="Coloque seu e-mail" />
                <Input placeholder="Repita seu e-mail" about="Repita seu e-mail" />

                <Input.Password placeholder="Senha" about="Coloque sua senha" />
            </div>

            <Button type="primary">
                Cadastrar-me
            </Button>

        </div>
    </div>
}
