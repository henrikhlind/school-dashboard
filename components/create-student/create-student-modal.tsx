import { usePathname } from 'next/navigation'
import { useFormState, useFormStatus } from 'react-dom'
import { newStudent } from "@/app/actions"
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

export default function NewStudentModal({ setHideModal }: { setHideModal: (hide: boolean) => void }) {
    const [state, formAction] = useFormState(newStudent, initialState)
    const pathname = usePathname()

    useEffect(() => {
        if (state?.success) {
            setHideModal(true);
        }
    }, [state?.success]);

    return (
        <div className="bg-white rounded-lg p-4 w-80 h-fit">
            <form className="flex flex-col gap-4" action={formAction}>
                <span className='text-center'>Opprett ny elev</span>
                <input type="text" name="name" placeholder='Navn' className="border rounded-lg p-2 focus:outline-none" required/>
                <input type="text" name="email" placeholder='E-post' className="border rounded-lg p-2 focus:outline-none" required/>
                < SubmitButton />
                <p className=''>
                    {state?.message}
                </p>
            </form>
        </div>
    )
}