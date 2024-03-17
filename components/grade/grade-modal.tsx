import { usePathname } from 'next/navigation'
import { useFormState, useFormStatus } from 'react-dom'
import { changeGrade } from "@/app/actions"
import { useEffect } from 'react'

const initialState = {
  message: '',
  success: false
}
function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button className={`bg-gray-900 rounded-lg p-2 px-3 text-white text-sm font-medium ${pending ? 'bg-opacity-80' : ''}`} type='submit' disabled={pending}>
            Endre
        </button>
    )
}

export default function GradeModal({ studentId, subjectId, setHideModal }: { studentId: number, subjectId: number, setHideModal: (hide: boolean) => void }) {
    const [state, formAction] = useFormState(changeGrade, initialState)
    const pathname = usePathname()

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        if (state?.success) {
            setHideModal(true);
        }
    }, [state?.success]);
    /* eslint-enable react-hooks/exhaustive-deps */

    return (
        <div className="bg-white rounded-lg p-4 w-80 h-fit text-base">
            <form className="flex flex-col gap-4" action={formAction}>
                <span>Endre karakter på eleven</span>
                <input type="number" name="grade" placeholder='Karakter' className="border rounded-lg p-2 focus:outline-none" required/>
                <input type="number" name="studentId" className="hidden" value={studentId} readOnly/>
                <input type="number" name="subjectId" className="hidden" value={subjectId} readOnly/>
                <input type="number" name="path" className="hidden" value={pathname} readOnly/>
                < SubmitButton />
                <p className=''>
                    {state?.message}
                </p>
            </form>
        </div>
    )
}