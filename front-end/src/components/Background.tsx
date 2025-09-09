import Image from "next/image";

export default function Background() {

    return <Image src="/background.png" width={734} height={734} alt="Background Skoola"
        className="fixed w-full h-full object-cover top-0 right-0 z-[-1]" />

}
