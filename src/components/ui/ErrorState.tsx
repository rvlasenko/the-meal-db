export default function ErrorState({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="rounded-xl border border-red-200 bg-red-50 px-8 py-6 text-center max-w-md">
        <p className="text-4xl mb-3">⚠️</p>
        <p className="font-semibold text-red-700">Something went wrong</p>
        <p className="mt-1 text-sm text-red-500">{message}</p>
      </div>
    </div>
  )
}
