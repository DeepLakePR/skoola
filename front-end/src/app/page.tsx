"use client"

import React from "react";
import { Card } from "antd";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";

export default function Home() {

  const courses = [
    {
      id: 1,
      title: 'Ensino Médio Regular',
      description: 'Formação completa para o ensino médio tradicional',
      link: '/cursos/ensino-medio',
      gradient: 'bg-[radial-gradient(at_20%_30%,_#3B82F6_0%,_#1E40AF_50%,_#1E3A8A_100%)]!',
      textColor: 'text-white!'
    },
    {
      id: 2,
      title: 'Administração',
      description: 'Curso técnico em administração empresarial',
      link: '/cursos/administracao',
      gradient: 'bg-[radial-gradient(at_70%_20%,_#10B981_0%,_#059669_40%,_#047857_80%)]!',
      textColor: 'text-white!'
    },
    {
      id: 3,
      title: 'Formação de Docentes',
      description: 'Formação para futuros educadores',
      link: '/cursos/docentes',
      gradient: 'bg-[radial-gradient(at_30%_70%,_#F59E0B_0%,_#D97706_40%,_#B45309_80%)]!',
      textColor: 'text-white!'
    },
    {
      id: 4,
      title: 'Análise e Desenvolvimento de Sistemas',
      description: 'Curso técnico em tecnologia e programação',
      link: '/cursos/ads',
      gradient: 'bg-[radial-gradient(at_80%_60%,_#8B5CF6_0%,_#7C3AED_40%,_#6D28D9_80%)]!',
      textColor: 'text-white!'
    }
  ];

  return (
    <>
      <Header></Header>

      <div>
        <div className="w-full h-75 relative flex items-center justify-center">
          <Image className="absolute w-full h-full object-cover z-[-1] opacity-[0.6]" width="1000" height="1000" src="/banner.png" alt="Banner Skoola" />

          <h1 className="text-6xl text-sky-950 font-medium text-center">Bem-vindo a Skoola</h1>
        </div>

        <div className="p-6 text-center">
          <Card
            className="mb-12 shadow-lg border-0 rounded-2xl overflow-hidden"
            styles={{ body: { padding: 0 } }}
          >
            <div className="bg-white p-6 md:p-8">
              <div className="text-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Skoola Connect
                </h1>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  No Novo Ensino Médio, os alunos têm a liberdade de escolher seu itinerário formativo
                  a partir do segundo ano, podendo optar por áreas voltadas para Exatas ou Humanas,
                  de acordo com seus interesses e projetos de vida.
                </p>

                <p className="my-4">
                  Essa escolha permite que cada estudante aprofunde conhecimentos na área que mais
                  combina com suas habilidades e objetivos. Paralelamente, os itinerários técnicos
                  oferecem uma formação prática e profissional, preparando o aluno para o mercado
                  de trabalho e para desafios reais, ao mesmo tempo em que desenvolve competências
                  técnicas essenciais.
                </p>

                <p>
                  Assim, é possível unir estudo teórico, escolha pessoal e preparo profissional,
                  garantindo uma formação mais completa e alinhada às necessidades do futuro.
                </p>
              </div>

              <div className="border-t border-gray-200 mt-8 pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  Nossos Cursos
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            </div>
          </Card>

        </div>

      </div>

      <Footer></Footer>
    </>
  );
}
