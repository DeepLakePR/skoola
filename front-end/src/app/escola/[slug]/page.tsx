import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface School {
    slug: string;
    name: string;
    address: string;
    phone: string;
    network: string;
    coursesOffered: string[];
    imageUrl: string;
    addressIframe: string;
}

const schools: School[] = [
    {
        slug: 'julio-szymanski',
        name: 'Szymanski',
        address: 'R. São Vicente de Paulo, 76 - Centro, Araucária - PR, 83702-050',
        phone: '(41) 3642-4089',
        network: 'Rede Estadual',
        coursesOffered: [
            'Formação de Docentes',
            'Análise e Desenvolvimento de Sistemas',
            'Administração',
        ],
        imageUrl: '/schools/szymanski.jpg',
        addressIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.467759596372!2d-49.39915279999999!3d-25.589368499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd03a2bc99036b%3A0xd2843373e3d3891d!2sJulio%20Szymanski!5e0!3m2!1spt-BR!2sbr!4v1760902869977!5m2!1spt-BR!2sbr',
    },
    {
        slug: 'helena-wysocki',
        name: 'Helena Wysocki',
        address: 'R. Maranhão, 2673 - Costeira, Araucária - PR, 83709-225',
        phone: '(41) 3607-2899',
        network: 'Rede Estadual',
        coursesOffered: [
            'Administração',
            'Análise e Desenvolvimento de Sistemas',
        ],
        imageUrl: '/schools/helena.jpg',
        addressIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14393.40194435156!2d-49.40146128261718!3d-25.593267353067397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd021db83a76d9%3A0x8ebbb112c50d568c!2sCol%C3%A9gio%20Estadual%20Prof%C2%AA%20Helena%20Wysocki-EFM!5e0!3m2!1spt-BR!2sbr!4v1760902907447!5m2!1spt-BR!2sbr',
    },
    {
        slug: 'dias-rocha',
        name: 'Dias Da Rocha',
        address: 'R. Maj. Sezino Pereira de Souza, 723 - Centro, Araucária - PR, 83702-270',
        phone: '(41) 3642-1433',
        network: 'Rede Estadual',
        coursesOffered: [
            'Administração',
        ],
        imageUrl: '/schools/rocha.jpg',
        addressIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.4038679012688!2d-49.40595839999999!3d-25.5914927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd039382df1317%3A0x552788ed4ea10403!2sDias%20Da%20Rocha%20do%20FATO!5e0!3m2!1spt-BR!2sbr!4v1760903006676!5m2!1spt-BR!2sbr',
    },
];

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
}

export default async function SchoolPage({ params }: PageProps) {

    const { slug } = await params;
    const school = schools.find(s => s.slug === slug);

    if (!school) {
        notFound();
    }

    return (
        <section className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">

            <Button
                type="link"
                icon={<ArrowLeftOutlined />}
                href="/"
                className="text-gray-600 hover:text-gray-800 mb-4 pl-0"
            >
                Voltar para home
            </Button>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6">
                    <span className="inline-block bg-black text-white py-1 px-3 rounded-full text-xs uppercase">
                        {school.network}
                    </span>
                    <h1 className="text-3xl font-bold mt-4 mb-2">{school.name}</h1>
                    <p className="text-gray-600">{school.address}</p>
                    <Link href={`tel:+55${school.phone}`} target="_blank" className="text-gray-600">{school.phone}</Link>

                    <h2 className="text-xl font-semibold mb-2 mt-4">Cursos ofertados:</h2>
                    <ul className="list-disc list-inside mb-6">
                        {school.coursesOffered.map((courseName, idx) => (
                            <li key={idx} className="text-gray-700 mb-1">{courseName}</li>
                        ))}
                    </ul>

                    <div className="mt-8">
                        <h3 className="text-lg font-medium mb-2">Localização no mapa</h3>
                        <div className="mt-8">
                            <div className="w-full h-64 rounded-lg overflow-hidden">
                                <iframe
                                    title={`Mapa de ${school.name}`}
                                    src={school.addressIframe}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function generateStaticParams() {
    return schools.map(school => ({
        slug: school.slug,
    }));
}
