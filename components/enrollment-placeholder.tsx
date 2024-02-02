export default async function EnrollmentPlaceholder() {
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
                    <td className='p-4'></td>
                    <td className='p-4'>Henter elever...</td>
                    <td className='p-4'></td>
                    <td className='p-4'></td>
                    <td className='p-4'></td>
                </tbody>
            </table>
        </div>
    )
}