import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-teal-500 rounded-lg blur opacity-75"></div>
        <div className="relative bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl">
          <h1 className="text-6xl font-bold text-amber-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="inline-block relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-teal-500 rounded-lg blur opacity-75"></div>
            <Link
              href="/"
              className="relative inline-block px-6 py-3 bg-white dark:bg-gray-800 rounded-lg font-medium text-amber-600 dark:text-amber-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
