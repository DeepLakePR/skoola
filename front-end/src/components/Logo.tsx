import Image from "next/image";
import Link from "next/link";

export interface LogoProps{
    imgWidth: number,
    imgHeight: number
    className?: string
} 

export default function Logo({ imgWidth, imgHeight, className }: LogoProps) {

    return <Link href="/">
        <Image src="/logo.png" className={className} width={imgWidth} height={imgHeight} alt="Logo Skoola" />
    </Link>

}
