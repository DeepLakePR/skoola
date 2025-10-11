/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

interface ICourse{
    id: number,
    title: string,
    description: string,
    link: string,
    gradient: string,
    textColor: string
}

export async function subscribe(course: ICourse) {

    try{
        const user = JSON.parse(localStorage.getItem("user") as string);

        if(!user){
            throw new Error("Usuário não encontrado");
            
        }

        const courses = JSON.parse(localStorage.getItem("courses") ?? "null");

        console.log(courses);

        if(courses){
            courses.map((c: any) => {
                if(c.id === course.id)
                    throw new Error("Você já se inscreveu nesse curso");
            });
        }

        const coursesList = courses ? [...courses, course] : [course]

        console.log(coursesList);

        localStorage.setItem("courses", JSON.stringify(coursesList));

        return true;
    }catch(err){
        console.error(err);
        throw new Error(err as string);
    }

}
