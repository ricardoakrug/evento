"use client"; // Error components must be Client Components

import H1 from "@/components/h1";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="text-center py-24">
      {/* <H1 className="mb-5">Something went wrong!</H1> */}
      <H1>Something went wrong!</H1>
      <p className="flex items-center px-24 py-4">{error.message}</p>
      <button
        className="px-4 py-2 mt-4 text-white bg-gray-500 rounded-md"
        onClick={
          // Attempt to recover by trying to re-render the segment
          reset
        }
      >
        Try again
      </button>
    </main>
  );
}
