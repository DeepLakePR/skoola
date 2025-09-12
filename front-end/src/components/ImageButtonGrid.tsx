import { Col } from "antd";
import Image from "next/image";
import Link from "next/link";

interface Props {
    link: string,
    image: string
}

export default function ImageButtonGrid({ link, image }: Props) {

    return <Col className="gutter-row" xs={24} md={8}>
        <Link href={link} target="_blank" title="PLataforma SEED PR" className="flex items-center justify-center">
            <Image src={image} width={96} height={96} alt="Plataforma SEED PR" className="scale-100 hover:scale-110 transition-all ease-in-out duration-300" />
        </Link>
    </Col>

}
