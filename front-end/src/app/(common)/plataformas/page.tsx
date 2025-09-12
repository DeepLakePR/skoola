import { Row } from "antd";
import ImageButtonGrid from "@/components/ImageButtonGrid";

export default function Page() {

    return <div className="p-8">
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>

            <ImageButtonGrid link="" image="/platforms/escola-parana.png" />

            <ImageButtonGrid link="" image="/platforms/classroom.png" />

            <ImageButtonGrid link="" image="/platforms/redacao.png" />

            <ImageButtonGrid link="" image="/platforms/khan.png" />

            <ImageButtonGrid link="" image="/platforms/ouvidoria.png" />

            <ImageButtonGrid link="" image="/platforms/alura.png" />

            <ImageButtonGrid link="" image="/platforms/area-aluno.png" />

            <ImageButtonGrid link="" image="/platforms/quizziz.png" />

            <ImageButtonGrid link="" image="/platforms/leia.png" />

        </Row>
    </div>

}
