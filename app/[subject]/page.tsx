import Enrollment from "@/components/enrollment";
import prisma from "@/lib/prisma";

export default async function subjectPage({ params }: { params: { subject: string } }) {
    const subjects = await prisma.subjects.findMany();
    const subject = params.subject.charAt(0).toUpperCase() + params.subject.slice(1)
    const subjectId = subjects.find(subject => subject.name.toLowerCase() === params.subject)?.id;


    return subjects.some(subject => subject.name.toLowerCase() === params.subject) ?
        <main className="flex flex-1 flex-col gap-4 p-4 w-[calc(100vw-18rem)] h-full">
        <div className="flex justify-between w-full pb-5">
            <h1 className='font-semibold text-2xl'>{subject}</h1>
            <button className="bg-gray-900 rounded-lg p-2 px-3 text-white text-sm font-medium">Add student</button>
        </div>
       <Enrollment subjectId={subjectId}/>
    </main>
    : (
        <div>404</div>
    );

}