"use client"

import { updateUserName } from "@/api/userAPI";
import Background from "@/components/Background";
import { EditOutlined } from "@ant-design/icons";
import { Button, Input, message, Modal } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UserData{
    token: string,
    id: string,
    name: string,
    email: string
}

export default function Profile() {

    const [messageApi, contextHolder] = message.useMessage();
    
    const router = useRouter();

    const [editUserModal, setEditUserModal] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserData>({
        token: "",
        id: "",
        name: "",
        email: ""
    });

    useEffect(() => {
        if(typeof window !== "undefined"){
            const user = JSON.parse(localStorage.getItem("user") ?? "{}");

            if (!user.token)
                return router.push("/login");

            setUserData(user);

        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function finishUserEdit() {

        try{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const res: any = await updateUserName(userData.id, userData.name);

            const newUser = {...userData, name: res.updateName}
            localStorage.setItem(
                "user",
                JSON.stringify(newUser)
            )
            messageApi.success("Nome atualizado com sucesso!")

        }catch(err){
            messageApi.error("Erro ao atualizar cadastro, tente novamente mais tarde.");
            console.error(err);

        }finally{
            setEditUserModal(false);

        }
    }

    return <div className="flex flex-col items-center justify-center p-8">

        {contextHolder}

        <Modal
            title="Editar Nome"
            centered
            open={editUserModal}
            onOk={() => finishUserEdit()}
            onCancel={() => setEditUserModal(false)}
            width={{
                xs: '90%',
                sm: '80%',
                md: '70%',
                lg: '60%',  
                xl: '50%',
                xxl: '40%',
            }}
            cancelText="Cancelar"
            okText="Salvar">
            <Input placeholder="Nome" value={userData.name} onChange={(value) => setUserData({...userData, name: value.target.value})} />
        </Modal>

        <Background />

        <Image src="/user.png" width={150} height={150} alt="Usuário Skoola" />

        <div className="flex flex-col items-center bg-sky-500 mt-4 text-white gap-y-2 p-4 rounded-xl w-[85%]">
            <div className="flex gap-2 items-center">
                <p>E-mail:</p>
                <p className="font-bold">{userData.email}</p>
            </div>

            <div className="flex gap-2 items-center">
                <p>Nome:</p>
                <p className="font-bold">{userData.name}</p>

                <Button icon={<EditOutlined />} type="primary" onClick={() => setEditUserModal(true)}></Button>
            </div>
        </div>

    </div>
}
