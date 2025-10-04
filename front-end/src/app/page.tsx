"use client"

import React from "react";
import { Avatar, Card, Col, Divider, Row } from "antd";
import { HeartOutlined, CommentOutlined } from "@ant-design/icons";
import Image from "next/image";
import Shortcut from "@/components/Shortcut";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <>
      <Header></Header>

      <div>
        <div className="w-full h-75 relative flex items-center justify-center">
          <Image className="absolute w-full h-full object-cover z-[-1] opacity-[0.6]" width="1000" height="1000" src="/banner.png" alt="Banner Skoola" />

          <h1 className="text-6xl text-sky-950 font-medium text-center">Bem-vindo a Skoola</h1>
        </div>

        <div className="w-full py-3 bg-sky-500 flex items-center justify-center">
          <Shortcut url={"/sports"} imageSrc={"/shortcuts/shortcut-1.png"} />

          <Shortcut url={"/gov-parana"} imageSrc={"/shortcuts/shortcut-2.png"} />

          <Shortcut url={"/szymanski"} imageSrc={"/shortcuts/shortcut-3.png"} />

          <Shortcut url={"/gremio"} imageSrc={"/shortcuts/shortcut-4.png"} />

          <Shortcut url={"/perfil"} imageSrc={"/shortcuts/shortcut-5.png"} />
        </div>

        <div className="p-6 text-center">
          <Divider orientation="center" size="large"><p className="text-3xl">Últimas Postagens</p></Divider>

          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>

            <Col className="gutter-row" xs={24} sm={12} md={8}>
              <Card
                className="h-full"
                loading={false}
                cover={
                  <Image src="/posts/aranha-robo.jpg" width={1000} height={5} style={{ height: "50vh", objectFit: "cover" }} alt="Aranha Robô Skoola"  />
                }
                actions={[
                  <HeartOutlined key="like" />,
                  <CommentOutlined key="comment" />,
                ]}
              >
                <Card.Meta
                  avatar={<Avatar src="/shortcuts/shortcut-3.png" />}
                  title="Aranha Robô"
                  description={
                    <p>
                      Os alunos do 3ºCDS recentemente fizeram um trabalho incrível para a feira de profissões, a Aranha Robô, segue uma imagem de como ficou o resultado final.
                    </p>
                  }
                />
              </Card>
            </Col>

            <Col className="gutter-row" xs={24} sm={12} md={8}>
              <Card
              className="h-full"
                loading={false}
                cover={
                  <Image src="/posts/pista.jpg" width={1000} height={100} alt="Pista de Corrida Skoola" style={{ height: "50vh", objectFit: "cover" }} />
                }
                actions={[
                  <HeartOutlined key="like" />,
                  <CommentOutlined key="comment" />,
                ]}
              >
                <Card.Meta
                  avatar={<Avatar src="/shortcuts/shortcut-3.png" />}
                  title="Pista de Corrida"
                  description={
                      <p>
                        No ano passado, o 3ºCDS fez uma pista de corrida com carrinhos de LED. Até o prefeito da cidade jogou e curtiu o jogo! O jogo foi feito com arduino e peças parecidas com lego.
                      </p>
                  }
                />
              </Card>
            </Col>

          </Row>
        </div>

      </div>

      <Footer></Footer>
    </>
  );
}
