import { usePathname } from 'next/navigation'
import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'
import { addStudent } from "@/app/actions"

const initialState = {
  message: '',
}
function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button className={`bg-gray-900 rounded-lg p-2 px-3 text-white text-sm font-medium ${pending ? 'bg-opacity-80' : ''}`} type='submit' disabled={pending}>
            Legg til
        </button>
    )
}

export default function StudentModal(props: { subjectId: number}){
    const [state, formAction] = useFormState(addStudent, initialState)
    const pathname = usePathname()

    return (
        <div className="bg-white rounded-lg p-4 w-80 h-fit">
            <form className="flex flex-col gap-4" action={formAction}>
                <label htmlFor="id">Elev ID</label>
                <input type="number" name="studentId" className="border rounded-lg p-2 focus:outline-none" required/>
                <input type="number" name="subjectId" className="hidden" value={props.subjectId} readOnly/>
                <input type="number" name="path" className="hidden" value={pathname} readOnly/>
                < SubmitButton />
                <p className=''>
                    {state?.message}
                </p>
            </form>
        </div>
    )
}