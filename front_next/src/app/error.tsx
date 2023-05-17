'use client'; // Error components must be Client components
import { Main } from "./components/main";
import { Button } from "./components/button";
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
//   useEffect(() => {
//     // Log the error to an error reporting service
//     console.error(error);
//   }, [error]);
 
  return (
    <Main className="flex items-center justify-center gap-20">
      <h2>Something went wrong!</h2>
      <Button 
      onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Main>
  );
}