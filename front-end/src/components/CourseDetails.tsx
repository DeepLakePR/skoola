'use client';

import { Card, Button, Tag, List, Modal, Row, Col } from 'antd';
import { ArrowLeftOutlined, CheckOutlined, EnvironmentOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

interface CourseDetailsProps {
    course: {
        id: number;
        title: string;
        description: string;
        gradient: string;
        textColor: string;
        details: {
            about: string;
            skills: string[],
            market: string[],
            benefits: string[]
        }
    };
}

const CourseDetails = ({ course }: CourseDetailsProps) => {

    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleModalCancel = () => {
        setIsModalOpen(false);
    };

    const courseData = {
        id: course.id,
        title: course.title,
        description: course.description,
        about: course.details.about,
        skills: course.details.skills,
        market: course.details.market,
        benefits: course.details.benefits
    };

    const schools = [
        {
            slug: 'julio-szymanski',
            name: 'Szymanski',
            address: 'R. São Vicente de Paulo, 76 - Centro, Araucária - PR, 83702-050',
            phone: '(41) 3642-4089',
            imageUrl: '/schools/szymanski.jpg',
        },
        {
            slug: 'helena-wysocki',
            name: 'Helena Wysocki',
            address: 'R. Maranhão, 2673 - Costeira, Araucária - PR, 83709-225',
            phone: '(41) 3607-2899',
            imageUrl: '/schools/helena.jpg',
        },
        {
            slug: 'dias-rocha',
            name: 'Dias Da Rocha',
            address: 'R. Maj. Sez. P. de Souza, 723 - Centro, Araucária - PR, 83702-270',
            phone: '(41) 3642-1433',
            imageUrl: '/schools/rocha.jpg',
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header e Breadcrumb */}
                <div className="mb-8">
                    <Button
                        type="link"
                        icon={<ArrowLeftOutlined />}
                        onClick={() => router.back()}
                        className="text-gray-600 hover:text-gray-800 mb-4 pl-0"
                    >
                        Voltar
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar com Card do Curso */}
                    <div className="lg:col-span-1">
                        <Card
                            className={`shadow-lg border-0 rounded-2xl overflow-hidden ${course.gradient} h-fit`}
                            styles={{
                                body: {
                                    padding: '24px',
                                    background: 'transparent'
                                }
                            }}
                        >
                            <div className="text-center">
                                <h2 className={`text-xl font-bold mb-4 ${course.textColor}`}>
                                    {courseData.title}
                                </h2>
                                <p className={`text-sm mb-6 leading-relaxed ${course.textColor} opacity-90`}>
                                    {courseData.description}
                                </p>

                                <div className="space-y-3">
                                    <Button
                                        type="primary"
                                        className="w-full bg-white text-gray-900 hover:bg-gray-100 border-0 font-medium h-10 shadow-md"
                                        size="large"
                                    >
                                        Inscreva-se
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Conteúdo Principal */}
                    <div className="lg:col-span-3">
                        <Card
                            className="shadow-lg border-0 rounded-2xl overflow-hidden bg-white"
                            styles={{ body: { padding: 0 } }}
                        >
                            <div className="p-6 md:p-8">
                                {/* Cabeçalho do Curso */}
                                <div className="text-center mb-8">
                                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        {courseData.title}
                                    </h1>
                                    <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
                                        {courseData.description}
                                    </p>
                                </div>

                                {/* Botão de Localização - Versão Desktop (no conteúdo principal) */}
                                {/* <div className="flex justify-center mb-8">
                                    <Button
                                        type="primary"
                                        icon={<EnvironmentOutlined />}
                                        className="bg-blue-600 hover:bg-blue-700 border-0 font-medium h-12 px-6"
                                        size="large"
                                    >
                                        Escolas que Ofertam esse Curso
                                    </Button>
                                </div> */}

                                {/* Sobre o Curso */}
                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                        Sobre o Curso
                                    </h2>
                                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                        <p>
                                            {courseData.about}
                                        </p>
                                    </div>
                                </section>

                                {/* Disciplinas e Habilidades */}
                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                        Disciplinas e Habilidades Desenvolvidas
                                    </h2>
                                    <p className="text-gray-600 mb-4">
                                        Durante o curso, o aluno desenvolve competências como:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {courseData.skills.map((skill, index) => (
                                            <div key={index} className="flex items-start space-x-2">
                                                <CheckOutlined className="text-green-500 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Mercado de Trabalho */}
                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                        Mercado de Trabalho
                                    </h2>
                                    <p className="text-gray-600 mb-4">
                                        O profissional de {courseData.title} pode atuar em diversos setores, incluindo:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {courseData.market.map((sector, index) => (
                                            <Tag
                                                key={index}
                                                className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1 rounded-lg text-sm"
                                            >
                                                {sector}
                                            </Tag>
                                        ))}
                                    </div>
                                </section>

                                {/* Benefícios do Curso */}
                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                        Benefícios do Curso
                                    </h2>
                                    <List
                                        dataSource={courseData.benefits}
                                        renderItem={(benefit) => (
                                            <List.Item className="border-0 px-0 py-2">
                                                <div className="flex items-center space-x-3">
                                                    <div className="bg-green-100 flex items-center rounded-full p-2 mt-0.5">
                                                        <CheckOutlined className="text-green-600 text-xs" />
                                                    </div>
                                                    <span className="text-gray-700">{benefit}</span>
                                                </div>
                                            </List.Item>
                                        )}
                                    />
                                </section>

                                {/* CTA Final */}
                                <div className="text-center mt-8 pt-6 border-t border-gray-200">
                                    <Button
                                        type="primary"
                                        size="large"
                                        className="bg-blue-600 hover:bg-blue-700 border-0 font-semibold h-12 px-8 text-lg"
                                    >
                                        Inscreva-se Agora no Curso
                                    </Button>

                                    <Button
                                        type="default"
                                        icon={<EnvironmentOutlined />}
                                        href="#location"
                                        className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold h-12 px-6 text-lg ml-4"
                                        size="large"
                                        onClick={showModal}
                                    >
                                        Escolas que Ofertam esse Curso
                                    </Button>

                                    <p className="text-gray-500 text-sm mt-3">
                                        Vagas limitadas • Início imediato
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-center mt-12 pt-8 border-t border-gray-300">
                    <p className="text-gray-600">
                        © Skoola - Todos os direitos reservados 2025
                    </p>
                </footer>
            </div>

            <Modal
                title="Escolas que ofertam esse Curso"
                open={isModalOpen}
                onCancel={handleModalCancel}
                footer={null}
                width={'75%'}
            >
                <Row gutter={[16, 16]} className="items-stretch">

                    {schools.map((school) => (
                        <Col key={school.slug} span={24} md={8} className="items-stretch">
                            <Card
                                hoverable
                                cover={<Image src={school.imageUrl} width={500} height={100} alt={school.name}
                                    className="object-cover w-full h-50"/>}
                                className='h-full! self-stretch!'
                                style={{ height: '100% !important' }} 
                            >
                                <h3 className="font-bold text-lg mb-2">{school.name}</h3>
                                <p className="text-gray-600">{school.address}</p>
                                <Link href={`tel:+55${school.phone}`} target="_blank" className="text-gray-600">{school.phone}</Link>
                                <div className="flex justify-between mt-4">
                                    <Button
                                        icon={<EnvironmentOutlined />}
                                        type="text"
                                        onClick={() => {
                                            // talvez abrir mapa ou rotear para alguma parte
                                            window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.address)}`, '_blank');
                                        }}
                                    >
                                        Localização
                                    </Button>
                                    <Button
                                        icon={<InfoCircleOutlined />}
                                        type="primary"
                                        onClick={() => {
                                            handleModalCancel();
                                            router.push(`/escola/${school.slug}`);
                                        }}
                                    >
                                        Informação
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </Modal>

        </section >
    );
};

export default CourseDetails;
