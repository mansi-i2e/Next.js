'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>{error.message}</p> {/* <-- this will show "ERROR LOADING REVIEW" */}
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
