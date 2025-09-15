import Background from "@/components/Background";
import Logo from "@/components/Logo";
import { Avatar, Badge, Button } from "antd";
import Image from "next/image";

export default function Messages() {

    return <div className="flex flex-col items-center justify-center p-8">
        <Background />
        <Logo imgHeight={200} imgWidth={200} className="mb-4" />

        <div className="bg-white rounded-2xl w-[85%] px-6 py-4 text-left">
            <h1 className="text-2xl px-4 mb-4">
                Mensagens
            </h1>

            <div className="flex flex-col gap-y-2">
                <Button className="flex justify-start!" size="large">
                    <Avatar size={32} src={<Image src="/shortcuts/shortcut-2.png" width={32} height={32} alt="Chat de mensagens - Skoola" />} />

                    SEED

                    <Badge count={102} />
                </Button>

                <Button className="flex justify-start!" size="large">
                    <Avatar size={32} src={<Image src="/shortcuts/shortcut-3.png" width={32} height={32} alt="Chat de mensagens - Skoola" />} />

                    Escola Cidade
                    
                    <Badge count={15} />
                </Button>

                <Button className="flex justify-start!" size="large">
                    <Avatar size={32} src={<Image src="/shortcuts/shortcut-1.png" width={32} height={32} alt="Chat de mensagens - Skoola" />} />

                    Esportes
                    
                    <Badge count={23} />
                </Button>

            <Button className="flex justify-start!" size="large">
                    <Avatar size={32} src={<Image src="/shortcuts/shortcut-4.png" width={32} height={32} alt="Chat de mensagens - Skoola" />} />

                    Grêmio Estudantil
                    
                    <Badge count={7} />
                </Button>
            </div>

        </div>

    </div>

}
