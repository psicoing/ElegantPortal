export function ReplitBadge() {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-black text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg border border-gray-600 backdrop-blur-sm">
        <svg
          width="16"
          height="16"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M7 5.5C7 4.67157 7.67157 4 8.5 4H15.5C16.3284 4 17 4.67157 17 5.5V12H8.5C7.67157 12 7 11.3284 7 10.5V5.5Z"
            fill="#F26207"
          />
          <path
            d="M17 12H24.5C25.3284 12 26 12.6716 26 13.5V18.5C26 19.3284 25.3284 20 24.5 20H17V12Z"
            fill="#F26207"
          />
          <path
            d="M7 21.5C7 20.6716 7.67157 20 8.5 20H17V26.5C17 27.3284 16.3284 28 15.5 28H8.5C7.67157 28 7 27.3284 7 26.5V21.5Z"
            fill="#F26207"
          />
        </svg>
        <span className="text-gray-300">Desarrollado en</span>
        <span className="text-white font-semibold">Replit</span>
      </div>
    </div>
  );
}