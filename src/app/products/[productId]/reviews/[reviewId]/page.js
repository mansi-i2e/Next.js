'use client';

import { use, useState, useEffect } from 'react';

function getRandomInt(count) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({ params }) {
  const { reviewId, productId } = use(params); // <- ✅ unwrap the promise safely
  
//   const [errorTrigger, setErrorTrigger] = useState(false);

//   useEffect(() => {
//     const random = getRandomInt(2);
//     if (random === 1) {
//       setErrorTrigger(true);
//     }
//   }, []);

//   if (errorTrigger) {
//     throw new Error("ERROR LOADING REVIEW");
//   }

  return (
    <h1>Review {reviewId} for product {productId}</h1>
  );
}
 