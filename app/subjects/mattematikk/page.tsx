import Enrollment from "@/components/enrollment/enrollment";
import EnrollmentPlaceholder from "@/components/enrollment/enrollment-placeholder";
import AddStudentButton from "@/components/enroll-student/enroll-student-button";
import { Suspense } from 'react'

export default async function subjectPage() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 w-[calc(100vw-18rem)] h-full">
            <div className="flex justify-between w-full pb-5">
                <h1 className='font-semibold text-2xl'>Mattematikk</h1>
                <AddStudentButton subjectId={1} />
            </div>
            < Suspense fallback={<EnrollmentPlaceholder />}>
                <Enrollment subjectId={1} />
            </Suspense>
        </main>
    )
}