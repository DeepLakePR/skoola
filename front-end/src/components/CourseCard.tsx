'use client';

import { Card, Button, message } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { subscribe } from '@/utils/subscribe-course';
import { useRouter } from 'next/navigation';

interface Course {
    id: number;
    title: string;
    description: string;
    link: string;
    gradient: string;
    textColor: string;
}

interface CourseCardProps {
    course: Course;
    hideSubscriptionButton?: boolean;
}

const CourseCard = ({ course, hideSubscriptionButton }: CourseCardProps) => {

    const router = useRouter();
    const [messageApi, context] = message.useMessage();

    async function handleSubscribe() {

        const user = JSON.parse(localStorage.getItem("user") as string);

        if(!user)
            router.push("/login");

        try{
            await subscribe(course);

            return messageApi.success("Você se inscreveu com sucesso, vá até seu perfil para obter mais informações")
        } catch (err: unknown) {
            console.error(err);

            if (err instanceof Error) {
                return messageApi.error(err.message);
            }
            return messageApi.error(String(err));
        }

    }

    return (<>
        {context}

        <Card
            key={course.id}
            className={`h-full shadow-md text-center hover:shadow-xl transition-all duration-300 border-0 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 ${course.gradient} ${hideSubscriptionButton ? "border-[#007ab3]!" : ""}`}
            styles={{
                body: {
                    padding: '24px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'transparent'
                }
            }}
        >
            <div className="flex-1">
                <h3 className={`text-lg font-bold mb-3 ${course.textColor}`}>
                    {course.title}
                </h3>
                <p className={`text-sm mb-4 leading-relaxed ${course.textColor} opacity-90`}>
                    {course.description}
                </p>
            </div>

            <div className=" mt-auto">
                <div className="text-center">
                    <Button
                        type="link"
                        className={`font-medium p-0 h-auto ${course.textColor} hover:opacity-80`}
                        href={course.link}
                    >
                        Saiba mais <ArrowRightOutlined className="ml-1" />
                    </Button>
                </div>

                <Button
                    type="primary"
                    className={`w-full bg-white text-gray-900 hover:bg-gray-100 border-0 font-medium mt-2 h-10 shadow-md ${hideSubscriptionButton ? "hidden!" : ""}`}
                    href="#subscribe"
                    onClick={() => handleSubscribe()}
                >
                    Clique aqui para se inscrever
                </Button>
            </div>
        </Card >
    </>
    );
};

export default CourseCard;
