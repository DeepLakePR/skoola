"use client";

import { Avatar, Button, Card, Flex, Input, Menu, Modal } from "antd";
import {
    HomeOutlined,
    UserOutlined,
    PlusOutlined,
    SearchOutlined,
    HeartOutlined,
    CommentOutlined,
    LoginOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ItemType, MenuItemType } from "antd/es/menu/interface";

export default function Header() {

    const [menuItems, setMenuItems] = useState<ItemType<MenuItemType>[]>([]);
    const [modalSearchResult, setModalSearchResult] = useState<boolean>(false);
    const [modalLoading, setModalLoading] = useState<boolean>(true);

    function showSearchResult() {
        setModalSearchResult(true);
        setModalLoading(true);

        setTimeout(() => {
            setModalLoading(false);
        }, 1000);
    }

    useEffect(() => {

        (async function () {
            if (typeof window !== "undefined") {
                const user = JSON.parse(localStorage.getItem("user") ?? "{}");

                if (user.token) {
                    await setMenuItems([
                        {
                            label: (<Link href="/">Home</Link>),
                            key: "",
                            style: { borderRadius: 6 },
                            icon: <HomeOutlined />,

                        },
                        {
                            label: (<Link href="/perfil">Perfil</Link>),
                            key: "perfil",
                            style: { borderRadius: 6 },
                            icon: <UserOutlined />,
                        },
                        {
                            label: (<Link href="/mais">Mais</Link>),
                            key: "mais",
                            style: { borderRadius: 6 },
                            icon: <PlusOutlined />,
                        },
                    ]);
                } else {
                    await setMenuItems([
                        {
                            label: (<Link href="/">Home</Link>),
                            key: "",
                            style: { borderRadius: 6 },
                            icon: <HomeOutlined />,

                        },
                        {
                            label: (<Link href="/login">Login</Link>),
                            key: "login",
                            style: { borderRadius: 6 },
                            icon: <LoginOutlined />,
                        },
                        {
                            label: (<Link href="/mais">Mais</Link>),
                            key: "mais",
                            style: { borderRadius: 6 },
                            icon: <PlusOutlined />,
                        },
                    ])
                }

            }

        })()

    }, []);

    return (
        <>
            <div className="flex justify-between py-4 px-8 bg-sky-500">
                <Link href="/" className="items-center justify-center flex">
                    <Image src="/logo.png" width={72} height={72} alt="Logo Skoola" />
                </Link>

                <Menu
                    className="w-full flex justify-end-safe bg-transparent!"
                    defaultSelectedKeys={[usePathname().replace("/", "")]}
                    mode="horizontal"
                    theme="dark"
                    items={menuItems}
                />
                <Input
                    placeholder="Pesquisar"
                    style={{ width: 200 }}
                    className="ml-2"
                    onInput={() => showSearchResult()}
                    prefix={<SearchOutlined />}
                />
            </div>

            <Modal
                title={<p>Resultado da Pesquisa</p>}
                footer={
                    <Button type="primary" onClick={() => setModalSearchResult(false)}>
                        Ok
                    </Button>
                }
                loading={modalLoading}
                open={modalSearchResult}
                onCancel={() => { setModalSearchResult(false) }}
            >
                <Flex gap="middle" align="start" vertical>
                    <Card
                        loading={false}
                        actions={[
                            <HeartOutlined key="like" />,
                            <CommentOutlined key="comment" />,
                        ]}
                    >
                        <Card.Meta
                            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                            title="Postagem"
                            description={
                                <p>
                                    Description Est sint commodo ad elit irure Lorem laboris. Nisi
                                    eiusmod Lorem sit excepteur dolor amet adipisicing culpa voluptate
                                    enim nisi. Lorem incididunt velit commodo ullamco proident in sint
                                    cupidatat. Consequat reprehenderit commodo cupidatat amet enim
                                    pariatur ipsum sint.
                                </p>
                            }
                        />
                    </Card>

                    <Card
                        loading={false}
                        actions={[
                            <HeartOutlined key="like" />,
                            <CommentOutlined key="comment" />,
                        ]}
                    >
                        <Card.Meta
                            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                            title="Postagem"
                            description={
                                <p>
                                    Description Est sint commodo ad elit irure Lorem laboris. Nisi
                                    eiusmod Lorem sit excepteur dolor amet adipisicing culpa voluptate
                                    enim nisi. Lorem incididunt velit commodo ullamco proident in sint
                                    cupidatat. Consequat reprehenderit commodo cupidatat amet enim
                                    pariatur ipsum sint.
                                </p>
                            }
                        />
                    </Card>

                    <Card
                        loading={false}
                        actions={[
                            <HeartOutlined key="like" />,
                            <CommentOutlined key="comment" />,
                        ]}
                    >
                        <Card.Meta
                            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                            title="Postagem"
                            description={
                                <p>
                                    Description Est sint commodo ad elit irure Lorem laboris. Nisi
                                    eiusmod Lorem sit excepteur dolor amet adipisicing culpa voluptate
                                    enim nisi. Lorem incididunt velit commodo ullamco proident in sint
                                    cupidatat. Consequat reprehenderit commodo cupidatat amet enim
                                    pariatur ipsum sint.
                                </p>
                            }
                        />
                    </Card>

                    <Card
                        loading={false}
                        actions={[
                            <HeartOutlined key="like" />,
                            <CommentOutlined key="comment" />,
                        ]}
                    >
                        <Card.Meta
                            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                            title="Postagem"
                            description={
                                <p>
                                    Description Est sint commodo ad elit irure Lorem laboris. Nisi
                                    eiusmod Lorem sit excepteur dolor amet adipisicing culpa voluptate
                                    enim nisi. Lorem incididunt velit commodo ullamco proident in sint
                                    cupidatat. Consequat reprehenderit commodo cupidatat amet enim
                                    pariatur ipsum sint.
                                </p>
                            }
                        />
                    </Card>

                    <Card
                        loading={false}
                        actions={[
                            <HeartOutlined key="like" />,
                            <CommentOutlined key="comment" />,
                        ]}
                    >
                        <Card.Meta
                            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                            title="Postagem"
                            description={
                                <p>
                                    Description Est sint commodo ad elit irure Lorem laboris. Nisi
                                    eiusmod Lorem sit excepteur dolor amet adipisicing culpa voluptate
                                    enim nisi. Lorem incididunt velit commodo ullamco proident in sint
                                    cupidatat. Consequat reprehenderit commodo cupidatat amet enim
                                    pariatur ipsum sint.
                                </p>
                            }
                        />
                    </Card>
                </Flex>
            </Modal>
        </>
    );
}
