"use client";

import { useState, useEffect } from "react";
import { UsePaymentIntent } from "@/hooks/paymentIntent";
export default function Basic() {
  const [paymentIntent, setPaymentIntent] = useState([]);

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      const intent = await UsePaymentIntent(1000, "usd");
      // setPaymentIntent(intent);
    };
    fetchPaymentIntent();
  }, []);
  return (
    <div>
      {/* <button onClick={fetchPaymentIntent}>Fetch Payment Intent</button> */}
    </div>
  );
}
