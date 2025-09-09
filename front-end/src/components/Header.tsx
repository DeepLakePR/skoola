"use client";

import { Avatar, Button, Card, Flex, Input, Menu, Modal } from "antd";
import {
    HomeOutlined,
    MessageOutlined,
    UserOutlined,
    PlusOutlined,
    SearchOutlined,
    HeartOutlined,
    CommentOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {

    const [modalSearchResult, setModalSearchResult] = useState<boolean>(false);
    const [modalLoading, setModalLoading] = useState<boolean>(true);

    function showSearchResult() {
        setModalSearchResult(true);
        setModalLoading(true);

        setTimeout(() => {
            setModalLoading(false);
        }, 1000);
    }

    return (
        <>
            <div className="flex justify-between py-4 px-8 bg-sky-500">
                <Link href="/" className="w-32">
                    <Image src="/logo.png" width="64" height="64" alt="Logo Skoola" />
                </Link>

                <Menu
                    className="w-full flex justify-end-safe bg-transparent!"
                    defaultSelectedKeys={["1"]}
                    mode="horizontal"
                    theme="dark"
                    items={[
                        {
                            label: (<Link href="/">Home</Link>),
                            key: "1",
                            style: { borderRadius: 6 },
                            icon: <HomeOutlined />,

                        },
                        {
                            label: (<Link href="/mensagens">Mensagens</Link>),
                            key: "2",
                            style: { borderRadius: 6 },
                            icon: <MessageOutlined />,
                        },
                        {
                            label: (<Link href="/perfil">Perfil</Link>),
                            key: "3",
                            style: { borderRadius: 6 },
                            icon: <UserOutlined />,
                        },
                        {
                            label: (<Link href="/mais">Mais</Link>),
                            key: "4",
                            style: { borderRadius: 6 },
                            icon: <PlusOutlined />,
                        },
                    ]}
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
