import prisma from '@/lib/prisma'

export default async function Enrollment(props: any) {
    const students = await prisma.enrollment.findMany({
        where: {
            subjectId: props.subjectId
        },
        orderBy: {
            studentId: 'asc',
        },
    })

    return (
        <div className="border shadow-sm rounded-lg text-sm w-fit">
            <table className="table-fixed">
                <thead className="border-b text-left text-gray-500">
                    <tr>
                        <th className="w-20 font-normal p-4">#</th>
                        <th className="w-72 font-normal p-4">Navn</th>
                        <th className="w-80 font-normal p-4">E-post</th>
                        <th className="w-52 font-normal p-4">Karakter</th>
                        <th className="w-60 font-normal p-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {students.length === 0 ? (
                        <tr className='hover:bg-gray-100/40 transition-all duration-100'>
                            <td className='p-4'></td>
                            <td className='p-4'>Fant ingen elever</td>
                            <td className='p-4'></td>
                            <td className='p-4'></td>
                            <td className='p-4'></td>
                        </tr>
                    ) : (
                        students.map(async (student: any) => (
                            <tr className='hover:bg-gray-100/40 transition-all duration-100' key={student.studentId}>
                                <td className='p-4'>{student.studentId}</td>
                                <td className='p-4 font-medium'>{(await prisma.students.findUnique({where: {id: student.studentId}}))?.name}</td>
                                <td className='p-4'>{(await prisma.students.findUnique({where: {id: student.studentId}}))?.email}</td>
                                <td className='p-4'>{student.grade != 0 ? student.grade : 'Ingen karakter'}</td>
                                <td className="p-4">
                                    <button className="bg-gray-900 rounded-lg p-2 w-full text-white text-sm font-medium">Endre karakter </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}