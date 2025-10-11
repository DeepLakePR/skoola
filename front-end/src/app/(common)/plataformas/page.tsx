import { Row } from "antd";
import ImageButtonGrid from "@/components/ImageButtonGrid";

export default function Page() {

    return <div className="p-8">
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>

            <ImageButtonGrid link="https://aluno.escoladigital.pr.gov.br/escola_parana" image="/platforms/escola-parana.png" />

            <ImageButtonGrid link="http://classroom.google.com/" image="/platforms/classroom.png" />

            <ImageButtonGrid link="https://redacao.pr.gov.br/student/home" image="/platforms/redacao.png" />

            <ImageButtonGrid link="https://pt.khanacademy.org/" image="/platforms/khan.png" />

            <ImageButtonGrid link="https://www.educacao.pr.gov.br/Ouvidoria" image="/platforms/ouvidoria.png" />

            <ImageButtonGrid link="https://www.alura.com.br/" image="/platforms/alura.png" />

            <ImageButtonGrid link="http://areadoaluno.seed.pr.gov.br/" image="/platforms/area-aluno.png" />

            <ImageButtonGrid link="https://wayground.com/join" image="/platforms/quizziz.png" />

            <ImageButtonGrid link="https://leiaparana.odilo.us/" image="/platforms/leia.png" />

        </Row>
    </div>

}
