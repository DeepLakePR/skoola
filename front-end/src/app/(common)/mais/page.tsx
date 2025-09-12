import Background from "@/components/Background";
import Logo from "@/components/Logo";
import { AppstoreOutlined, CalendarOutlined, InfoCircleOutlined, RobotOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Link from "next/link";

export default function Page() {

    return <div className="flex flex-col items-center justify-center p-8">
        <Background />
        <Logo imgHeight={200} imgWidth={200} className="mb-4" />

        <div className="bg-white rounded-2xl w-[85%] p-6">

            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>

                <Col className="gutter-row" xs={24} md={12}>
                    <Link href="/agenda" title="Agenda" className="flex flex-col items-center justify-center text-2xl p-4 py-7 rounded-xl border-1 border-zinc-400 hover:bg-zinc-200! transition-all! ease-in-out! duration-250!">
                        <CalendarOutlined className="text-3xl!" />

                        <p>Agenda</p>
                    </Link>
                </Col>

                <Col className="gutter-row" xs={24} md={12}>
                    <Link href="/plataformas" title="Plataformas" className="flex flex-col items-center justify-center text-2xl p-4 py-7 rounded-xl border-1 border-zinc-400 hover:bg-zinc-200! transition-all! ease-in-out! duration-250!">
                        <AppstoreOutlined className="text-3xl!" />

                        <p>Plataformas</p>
                    </Link>
                </Col>

                <Col className="gutter-row" xs={24} md={12}>
                    <Link href="/suporte" title="Suporte" className="flex flex-col items-center justify-center text-2xl p-4 py-7 rounded-xl border-1 border-zinc-400 hover:bg-zinc-200! transition-all! ease-in-out! duration-250!">
                        <RobotOutlined className="text-3xl!" />

                        <p>Suporte</p>
                    </Link>
                </Col>

                <Col className="gutter-row" xs={24} md={12}>
                    <Link href="/sobre" title="Quem Somos" className="flex flex-col items-center justify-center text-2xl p-4 py-7 rounded-xl border-1 border-zinc-400 hover:bg-zinc-200! transition-all! ease-in-out! duration-250!">
                        <InfoCircleOutlined className="text-3xl!" />

                        <p>Quem Somos</p>
                    </Link>
                </Col>


            </Row>

        </div>
    </div>

}
