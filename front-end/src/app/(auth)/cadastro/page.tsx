"use client"

import { registerUser } from "@/api/userAPI";
import Background from "@/components/Background";
import Logo from "@/components/Logo";
import { Button, Form, Input, message, Result, Select } from "antd";
import Link from "next/link";
import { useState } from "react";

interface FormValues {
    name: string,
    email: string,
    repeatEmail: string,
    password: string,
    course: string
}

export default function Register() {

    const [messageApi, contextHolder] = message.useMessage();

    const [loading, setLoading] = useState<boolean>(false);
    const [successOnRegister, setSuccessOnRegister] = useState<boolean>(false);

    async function sendForm(values: FormValues) {

        if (values.email !== values.repeatEmail) {
            messageApi.open({
                type: "error",
                content: "Repita o e-mail corretamente."
            });
            return

        }

        setLoading(true);

        try {
            await registerUser(values.name, values.email, values.password, values.course);
            setSuccessOnRegister(true);

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

    if (successOnRegister) {
        return <div className="h-full flex items-center justify-center">
            <Result
                status="success"
                title="Conta Criada com Sucesso!"
                subTitle="Seu cadastro foi concluído com sucesso e você já pode acessar sua conta."
                extra={[
                    <Button type="primary" key="profile">
                        <Link href="/login">
                            Ir Para o Login
                        </Link>
                    </Button>
                ]}
            />
        </div>

    }

    return <div className="p-4 flex h-full items-center justify-center">
        <Background />

        {contextHolder}

        <Form onFinish={sendForm} className="p-4 bg-white rounded-3xl w-[85%] h-full flex flex-col items-center justify-center gap-3">

            <Logo imgWidth={200} imgHeight={200} className="mb-8" />

            <p className="text-3xl">Cadastro</p>

            <div className="flex flex-col w-80">

                <Form.Item name="name" rules={[{ required: true, message: "Informe o nome" }]}
                    className="mb-2!">
                    <Input placeholder="Nome" about="Coloque seu nome" />
                </Form.Item>

                <Form.Item name="email" rules={[{ required: true, message: "Informe o e-mail" }, { type: "email", message: "E-mail inválido" }]}
                    className="mb-2!">
                    <Input placeholder="E-mail" about="Coloque seu e-mail" />
                </Form.Item>

                <Form.Item name="repeatEmail" rules={[{ required: true, message: "Repita o e-mail" }]}
                    className="mb-2!">
                    <Input placeholder="Repita seu e-mail" about="Repita seu e-mail" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: "Informe sua senha" }]}
                    className="mb-2!">
                    <Input.Password placeholder="Senha" about="Coloque sua senha" />
                </Form.Item>

                <Form.Item name="course" rules={[{ required: true, message: "Selecione um curso de interesse" }]}
                    className="mb-2!">
                    <Select
                        placeholder="Selecione um curso de interesse"
                        options={[
                            { value: 'analise-desenvolvimento-sistemas', label: 'Análise e Desenvolvimento de Sistemas' },
                            { value: 'administracao', label: 'Administração' },
                            { value: 'formacao-docentes', label: 'Formação de Docentes' },
                        ]}
                    />
                </Form.Item>

            </div>

            <Button type="primary" htmlType="submit" loading={loading}>
                Cadastrar-me
            </Button>

            <p>Já tem uma conta? <Link href="/login">Faça o Login Aqui</Link></p>

        </Form>
    </div>
}
