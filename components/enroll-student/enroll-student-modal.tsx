import { usePathname } from 'next/navigation'
import { useFormState, useFormStatus } from 'react-dom'
import { addStudent } from "@/app/actions"
import { useEffect } from 'react'

const initialState = {
  message: '',
  success: false
}
function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button className={`bg-gray-900 rounded-lg p-2 px-3 text-white text-sm font-medium ${pending ? 'bg-opacity-80' : ''}`} type='submit' disabled={pending}>
            Legg til
        </button>
    )
}

export default function AddStudentModal({ subjectId, setHideModal }: { subjectId: number, setHideModal: (hide: boolean) => void }) {
    const [state, formAction] = useFormState(addStudent, initialState)
    const pathname = usePathname()

    useEffect(() => {
        if (state?.success) {
            setHideModal(true);
        }
    }, [state?.success]);

    return (
        <div className="bg-white rounded-lg p-4 w-80 h-fit">
            <form className="flex flex-col gap-4" action={formAction}>
                <span>Legg til elev i klassen</span>
                <input type="number" name="studentId" placeholder='Elev ID' className="border rounded-lg p-2 focus:outline-none" required/>
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