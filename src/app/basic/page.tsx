"use client";

import { useState, useEffect } from "react";
import { UsePaymentIntent } from "@/hooks/paymentIntent";
export default function Basic() {
  const [paymentIntent, setPaymentIntent] = useState([]);

  useEffect(() => {}, []);
  return (
    <div>
      {/* <button onClick={fetchPaymentIntent}>Fetch Payment Intent</button> */}
    </div>
  );
}
