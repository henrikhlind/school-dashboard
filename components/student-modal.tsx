import prisma from '@/lib/prisma'

export default function StudentModal(props: {hide: boolean}){
    return (
        props.hide ? null : (
            <div className="bg-white rounded-lg p-4 w-80 h-fit">
                <form className="flex flex-col gap-4" action="">
                    <label htmlFor="id">Elev ID</label>
                    <input type="number" name="id" className="border rounded-lg p-2 focus:outline-none" required/>
                    <button className="bg-gray-900 rounded-lg p-2 px-3 text-white text-sm font-medium">Legg til</button>
                </form>
            </div>
        )
    )
}