"use client"

import React from "react";
import { Avatar, Card, Col, Divider, Row } from "antd";
import { HeartOutlined, CommentOutlined } from "@ant-design/icons";
import Image from "next/image";
import Shortcut from "@/components/Shortcut";

export default function Home() {

  return (
    <div className="">

      <div className="w-full h-75 relative flex items-center justify-center">
        <Image className="absolute w-full h-full object-cover z-[-1] opacity-[0.6]" width="1000" height="1000" src="/banner.png" alt="Banner Skoola" />

        <h1 className="text-6xl text-sky-950 font-medium text-center">Bem-vindo a Skoola</h1>
      </div>

      <div className="w-full py-3 bg-sky-500 flex items-center justify-center">
        <Shortcut url={"/sports"} imageSrc={"/shortcut-1.png"} />

        <Shortcut url={"/gov-parana"} imageSrc={"/shortcut-2.png"} />

        <Shortcut url={"/escola-cidade"} imageSrc={"/shortcut-3.png"} />

        <Shortcut url={"/gremio"} imageSrc={"/shortcut-4.png"} />

        <Shortcut url={"/perfil"} imageSrc={"/shortcut-5.png"} />
      </div>

      <div className="p-6 text-center">
        <Divider orientation="center" size="large"><p className="text-3xl">Últimas Postagens</p></Divider>

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
          </Col>

          <Col className="gutter-row" xs={24} sm={12} md={8}>
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
          </Col>

          <Col className="gutter-row" xs={24} sm={12} md={8}>
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
          </Col>

          <Col className="gutter-row" xs={24} sm={12} md={8}>
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
          </Col>

          <Col className="gutter-row" xs={24} sm={12} md={8}>
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
          </Col>

          <Col className="gutter-row" xs={24} sm={12} md={8}>
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
          </Col>

        </Row>
      </div>
    </div>
  );
}
