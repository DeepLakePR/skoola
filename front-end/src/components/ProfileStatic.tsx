"use client"

import { CommentOutlined, HeartOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Row } from "antd";
import Image from "next/image";

interface ProfileStaticProps{
    profilePhoto: string,
    profileName: string,
    profilePostDescription?: string
}

export default function ProfileStatic({ profilePhoto, profileName, profilePostDescription }: ProfileStaticProps) {

    return <div className="text-center">
        <div className="w-full h-75 relative flex items-center justify-center">
            <Image className="absolute w-full h-full object-cover z-[-1] opacity-[0.6]" width="1000" height="1000" src="/banner.png" alt="Banner Skoola" />

            <Image width="150" height="150" src={profilePhoto} alt="Perfil" className="rounded-full" />
        </div>

        <Button type="primary" shape="round" className="mt-6" size="large">
            {profileName}
        </Button>

        <div className="p-6 text-center">

            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>

                <Col className="gutter-row" xs={24} sm={12} md={8}>
                    <Card
                        loading={false}
                        actions={[
                            <HeartOutlined key="like" />,
                            <CommentOutlined key="comment" />,
                        ]}
                    >
                        <Card.Meta
                            avatar={<Avatar src={profilePhoto} />}
                            title="Postagem"
                            description={
                                <p>
                                    {profilePostDescription ?? "Sem descrição"}
                                </p>
                            }
                        />
                    </Card>
                </Col>

            </Row>
        </div>
    </div>

}
