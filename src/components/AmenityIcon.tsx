export default function AmenityIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "wifi":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13a10 10 0 0114 0M8.5 16.5a5 5 0 017 0M12 20h.01"
          />
        </svg>
      );
    case "parking":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2zm5 4v8"
          />
        </svg>
      );
    case "ac":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8h18M3 16h18M4 12h16"
          />
        </svg>
      );
    case "view":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="3" />
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      );
    case "terrace":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="3" y="10" width="18" height="7" rx="2" />
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 10V7a5 5 0 0110 0v3"
          />
        </svg>
      );
    case "washer":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="12" cy="12" r="5" />
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 7h.01M7 7h.01"
          />
        </svg>
      );
    case "kitchen":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 4v16M16 4v16"
          />
        </svg>
      );
    case "tv":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="2" y="7" width="20" height="13" rx="2" />
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 21h8"
          />
        </svg>
      );
    default:
      return null;
  }
}
