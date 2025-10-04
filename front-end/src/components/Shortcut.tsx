import Image from "next/image";
import Link from "next/link";

export interface ShortcutProps{
    url: string,
    imageSrc: string,
}

export default function Shortcut(props: ShortcutProps) {

    const { url, imageSrc } = props;

    return <Link href={url} className="mx-3 scale-100 hover:scale-110 transition-all ease-in-out duration-300">
        <Image src={imageSrc} width={56} height={56} className="w-auto rounded-full" alt="Shortcut" />
    </Link>

}
