import Link from "next/link";

export default function NotFound() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
         <h1 className="text-6xl sm:text-8xl font-bold text-red-500 mb-4">
            404
         </h1>
         <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6 text-center">
            Page Not Found
         </h2>
         <p className="text-base sm:text-lg text-gray-600 mb-8 text-center max-w-md">
            Oops! The page you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.
         </p>
         <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-base sm:text-lg font-medium"
         >
            Go to Homepage
         </Link>
      </div>
   );
}
