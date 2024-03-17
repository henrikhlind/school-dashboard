import Students from "@/components/students/students"
import NewStudentButton from "@/components/create-student/create-student-button"

export default async function subjectPage() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 w-[calc(100vw-18rem)] h-full">
            <div className="flex justify-between w-full pb-5">
                <h1 className='font-semibold text-2xl'>Elever</h1>
                <NewStudentButton />
            </div>
            <Students />
        </main>
    )
}