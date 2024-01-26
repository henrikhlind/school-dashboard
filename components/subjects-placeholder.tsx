export default function SubjectsPlaceholder() {
    return (
        <div className="flex flex-col w-56">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="felx items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900" >
                    Fetching...
                </div>
            ))}
        </div>
    )
}