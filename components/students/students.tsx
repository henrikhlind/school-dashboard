import prisma from '@/lib/prisma'

export default async function Students(props: any) {
    const students = await prisma.students.findMany({
        orderBy: {
            id: 'asc',
        },
    })

    return (
        <div className="border shadow-sm rounded-lg text-sm w-fit">
            <table className="table-fixed">
                <thead className="border-b text-left text-gray-500">
                    <tr>
                        <th className="w-20 font-normal p-4">#</th>
                        <th className="w-96 font-normal p-4">Navn</th>
                        <th className="w-96 font-normal p-4">E-post</th>
                        <th className="w-96 font-normal p-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {students.length === 0 ? (
                        <tr className='hover:bg-gray-100/40 transition-all duration-100'>
                            <td className='p-4'></td>
                            <td className='p-4'>Fant ingen elever</td>
                            <td className='p-4'></td>
                            <td className='p-4'></td>
                        </tr>
                    ) : (
                        students.map(async (student: any) => (
                            <tr className='hover:bg-gray-100/40 transition-all duration-100' key={student.studentId}>
                                <td className='p-4'>{student.id}</td>
                                <td className='p-4 font-medium'>{student.name}</td>
                                <td className='p-4'>{student.email}</td>
                                <td className='p-4'>
                                    <button className='bg-gray-900 rounded-lg w-full p-2 px-3 text-white text-sm font-medium'>Se elev</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}