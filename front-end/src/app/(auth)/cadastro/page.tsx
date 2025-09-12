"use client"

import { registerUser } from "@/api/userAPI";
import Background from "@/components/Background";
import Logo from "@/components/Logo";
import { Button, Form, Input, message } from "antd";
import { useState } from "react";

interface FormValues {
    name: string,
    email: string,
    repeatEmail: string,
    password: string
}

export default function Register() {

    const [ messageApi, contextHolder ] = message.useMessage();

    const [loading, setLoading] = useState<boolean>(false);

    async function sendForm(values: FormValues) {

        setLoading(true);
        if(values.email !== values.repeatEmail){
            messageApi.open({
                type: "error",
                content: "Repita o e-mail corretamente.",
            })
        }

        try {
            await registerUser(values.name, values.email, values.password);
            messageApi.open({
                type: "success",
                content: "Conta criada com sucesso, redirecionando para o login...",
            })

            // result api antd

        } catch (err) {
            messageApi.open({
                type: "error",
                content: "Erro ao se cadastrar, tente novamente mais tarde.",
            })
            console.error(err);

        } finally {
            setLoading(false);
        }

    }

    return <div className="p-4 flex h-full items-center justify-center">
        <Background />

        {contextHolder}

        <Form onFinish={sendForm} className="p-4 bg-white rounded-3xl w-[85%] h-full flex flex-col items-center justify-center gap-3">

            <Logo imgWidth={200} imgHeight={200} className="mb-8" />

            <p className="text-3xl">Cadastro</p>

            <div className="flex flex-col w-80">

                <Form.Item name="name" required={true} className="mb-2!">
                    <Input placeholder="Nome" about="Coloque seu nome" />
                </Form.Item>

                <Form.Item name="email" required={true} className="mb-2!">
                    <Input placeholder="E-mail" about="Coloque seu e-mail" />
                </Form.Item>

                <Form.Item name="repeatEmail" required={true} className="mb-2!">
                    <Input placeholder="Repita seu e-mail" about="Repita seu e-mail" />
                </Form.Item>

                <Form.Item name="password" required={true} className="mb-2!">
                    <Input.Password placeholder="Senha" about="Coloque sua senha" />
                </Form.Item>
            </div>

            <Button type="primary" htmlType="submit" loading={loading}>
                Cadastrar-me
            </Button>

        </Form>
    </div>
}
