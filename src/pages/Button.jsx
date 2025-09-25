export function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 border rounded-xl text-sm hover:bg-gray-100 transition ${className}`}
    >
      {children}
    </button>
  );
}
