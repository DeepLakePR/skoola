"use client"

import { loginUser } from "@/api/userAPI";
import Background from "@/components/Background";
import Logo from "@/components/Logo";
import { Button, Input, Form, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormValues {
    email: string,
    password: string
}

export default function Login() {

    const router = useRouter();

    const [messageApi, contextHolder] = message.useMessage();

    const [loading, setLoading] = useState<boolean>(false);

    async function handleLogin(values: FormValues) {

        setLoading(true);

        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const tokenRes: any = await loginUser(values.email, values.password)
            localStorage.setItem("token", tokenRes.login);

            messageApi.success("Logado com sucesso! Redirecionando para o seu perfil...");
            return router.push("/perfil")

        } catch (err) {
            console.error(err);
            messageApi.error("Credenciais inválidas, tente novamente.")

        } finally {
            setLoading(false);
        }
    }

    return <div className="p-4 flex h-full items-center justify-center">
        {contextHolder}

        <Background />

        <Form onFinish={handleLogin} className="p-4 bg-white rounded-3xl w-[85%] h-full flex flex-col items-center justify-center gap-3">

            <Logo imgWidth={200} imgHeight={200} className="mb-8" />

            <p className="text-3xl">Login</p>

            <div className="flex flex-col gap-2 w-80">
                <Form.Item name="email" rules={[{ required: true, message: "Informe o e-mail" }, { type: "email", message: "E-mail inválido" }]}
                    className="mb-2!">
                    <Input placeholder="E-mail" about="Coloque seu e-mail" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: "Informe sua senha" }]}
                    className="mb-2!">
                    <Input.Password placeholder="Senha" about="Coloque sua senha" />
                </Form.Item>
            </div>

            <Button type="primary" htmlType="submit" loading={loading}>
                Entrar
            </Button>

        </Form >
    </div >
}
