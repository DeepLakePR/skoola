import Logo from "@/components/Logo";

export default function About() {

    return <div className="flex flex-col justify-center items-center text-center p-8">
        <Logo imgHeight={200} imgWidth={200} className="mb-4" />

        <p className="text-xl">
            Somos um grupo estudantil focado em melhorar o cotidiano escolar.
        </p>
    </div>

}
