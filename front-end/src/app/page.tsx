"use client"

import React from "react";
import { Avatar, Card, Col, Divider, Row } from "antd";
import Image from "next/image";
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

        <div className="p-6 text-center">
          <Divider orientation="center" size="large">
            <p className="text-3xl">Cursos Oferecidos</p>
          </Divider>

        </div>

      </div>

      <Footer></Footer>
    </>
  );
}
