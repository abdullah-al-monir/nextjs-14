"use client"

const ErrorBoundary = ({ error, reset }) => {
  return (
    <div>
      <button className="bg-purple-500 text-white p-2 rounded-lg" onClick={reset}>Try again</button>
      {error.message}
    </div>
  );
};

export default ErrorBoundary;