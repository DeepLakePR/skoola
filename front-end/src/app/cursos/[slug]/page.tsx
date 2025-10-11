import CourseDetails from '@/components/CourseDetails';
import { notFound } from 'next/navigation';

const courses = {
    'ensino-medio': {
        id: 1,
        title: 'Ensino Médio Regular',
        description: 'Formação completa para o ensino médio tradicional',
        gradient: 'bg-[radial-gradient(at_20%_30%,_#3B82F6_0%,_#1E40AF_50%,_#1E3A8A_100%)]!',
        textColor: 'text-white!',
        details: {
            about: `
                O Ensino Médio Regular oferece uma formação sólida e abrangente, preparando os alunos para o ensino superior ou para o mercado de trabalho. O curso desenvolve competências cognitivas, sociais e pessoais, promovendo o crescimento acadêmico e humano dos estudantes.
            `,
            skills: [
                'Linguagens, códigos e suas tecnologias',
                'Matemática e suas aplicações',
                'Ciências da natureza e seus métodos',
                'Ciências humanas e sociais',
                'Raciocínio crítico e resolução de problemas',
                'Comunicação eficaz e trabalho em equipe'
            ],
            market: [
                'Física',
                'Matemática',
                'Língua Portuguesa',
                'História',
                'Geografia'
            ],
            benefits: [
                'Formação completa e equilibrada',
                'Preparação para estudos futuros e mercado de trabalho',
                'Desenvolvimento de habilidades cognitivas e sociais',
                'Flexibilidade para escolha de itinerários formativos',
                'Base sólida para crescimento acadêmico e pessoal'
            ]
        }
    },
    'administracao': {
        id: 2,
        title: 'Administração',
        description: 'Curso técnico em administração empresarial',
        gradient: 'bg-[radial-gradient(at_70%_20%,_#10B981_0%,_#059669_40%,_#047857_80%)]!',
        textColor: 'text-white!',
        details: {
            about: `
                Administração é um curso técnico que proporciona conhecimento prático e teórico para a gestão de empresas e organizações. 
                O profissional é capaz de gerenciar equipes e recursos, planejar e organizar processos, analisar indicadores de desempenho, 
                tomar decisões estratégicas e aplicar conceitos de finanças, marketing e logística.
            `,
            skills: [
                'Gestão financeira e orçamentária',
                'Administração de pessoas e liderança',
                'Planejamento estratégico',
                'Marketing e atendimento ao cliente',
                'Organização e controle de processos',
                'Tomada de decisão e análise de resultados'
            ],
            market: [
                'Empresas privadas e públicas',
                'Setores financeiros e comerciais',
                'Instituições governamentais',
                'Projetos de gestão e planejamento estratégico',
                'Setores de recursos humanos, logística e marketing'
            ],
            benefits: [
                'Formação prática e teórica em gestão e negócios',
                'Desenvolvimento de habilidades de liderança e organização',
                'Preparação para o mercado de trabalho',
                'Capacitação para atuar em diversos setores empresariais',
                'Base sólida para continuar estudos em nível superior'
            ]
        }
    },
    'docentes': {
        id: 3,
        title: 'Formação de Docentes',
        description: 'Formação para futuros educadores',
        gradient: 'bg-[radial-gradient(at_30%_70%,_#F59E0B_0%,_#D97706_40%,_#B45309_80%)]!',
        textColor: 'text-white!',
        details: {
            about: `
                O curso de Formação de Docentes prepara os alunos para atuar como professores e educadores, desenvolvendo competências pedagógicas, didáticas e de gestão educacional. O objetivo é formar profissionais capazes de ensinar de forma eficiente e inspiradora.
            `,
            skills: [
                'Didática e pedagogia',
                'Planejamento educacional',
                'Gestão de sala de aula',
                'Metodologias ativas de ensino',
                'Avaliação de aprendizagem',
                'Comunicação e relacionamento interpessoal'
            ],
            market: [
                'Ensino fundamental e médio',
                'Instituições técnicas e cursos profissionalizantes',
                'Projetos de educação infantil e programas sociais',
                'Capacitação e treinamento corporativo',
                'Consultoria educacional e pedagógica'
            ],
            benefits: [
                'Formação prática e teórica para atuar como educador',
                'Desenvolvimento de habilidades pedagógicas e de gestão',
                'Preparação para atuar em diferentes contextos educacionais',
                'Possibilidade de continuar estudos em nível superior',
                'Capacitação para promover aprendizagem de qualidade'
            ]
        }
    },
    'ads': {
        id: 4,
        title: 'Análise e Desenvolvimento de Sistemas',
        description: 'Curso técnico em tecnologia e programação',
        gradient: 'bg-[radial-gradient(at_80%_60%,_#8B5CF6_0%,_#7C3AED_40%,_#6D28D9_80%)]!',
        textColor: 'text-white!',
        details: {
            about: `
                O curso de Análise e Desenvolvimento de Sistemas (ADS) prepara os alunos para atuarem no desenvolvimento de softwares, aplicativos e sistemas para diversas áreas. Durante o curso, o estudante aprende desde conceitos de lógica de programação até gestão de projetos e desenvolvimento de soluções tecnológicas.
            `,
            skills: [
                'Lógica de programação e algoritmos',
                'Programação em linguagens modernas (Java, Python, JavaScript, etc.)',
                'Banco de dados e SQL',
                'Desenvolvimento de aplicativos web e mobile',
                'Gestão de projetos de TI',
                'Segurança da informação e boas práticas de software'
            ],
            market: [
                'Desenvolvimento de softwares e aplicativos',
                'Empresas de tecnologia, startups e consultorias',
                'Instituições financeiras e setores corporativos',
                'Projetos de inovação e transformação digital',
                'Suporte, manutenção e atualização de sistemas existentes'
            ],
            benefits: [
                'Formação prática e alinhada às necessidades do mercado',
                'Desenvolvimento de habilidades técnicas e comportamentais',
                'Preparação para o mercado de trabalho e projetos reais',
                'Possibilidade de continuar a formação acadêmica em nível superior',
                'Competências em tecnologias modernas e metodologias ágeis'
            ]
        }
    }
};

interface PageProps {
    params: {
        slug: string;
    };
}

export default function CoursePage({ params }: PageProps) {
    const course = courses[params.slug as keyof typeof courses];

    if (!course) {
        notFound();
    }

    return <CourseDetails course={course} />;
}

export async function generateStaticParams() {
    return Object.keys(courses).map((slug) => ({
        slug,
    }));
}
