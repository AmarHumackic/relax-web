import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FCFCFC] px-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mb-8 font-sans text-lg text-gray-600">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 inline-flex items-center gap-2 rounded-xs px-8 py-3 text-base font-medium text-white transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
