export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="rounded-xl border border-orange-100 bg-white px-8 py-6 text-center max-w-md shadow-sm">
        <p className="text-4xl mb-3">🍽️</p>
        <p className="text-gray-500">{message}</p>
      </div>
    </div>
  )
}
