import Enrollment from "@/components/enrollment";
import EnrollmentPlaceholder from "@/components/enrollment-placeholder";
import StudentButton from "@/components/student-button";
import { Suspense } from 'react'

export default async function subjectPage() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 w-[calc(100vw-18rem)] h-full">
            <div className="flex justify-between w-full pb-5">
                <h1 className='font-semibold text-2xl'>Norsk</h1>
                <StudentButton subjectId={2} />
            </div>
            < Suspense fallback={<EnrollmentPlaceholder />}>
                <Enrollment subjectId={2} />
            </Suspense>
        </main>
    )
}