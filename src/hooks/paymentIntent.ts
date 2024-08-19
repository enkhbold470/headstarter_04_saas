"use client";
import { useState } from "react";

export function UsePaymentIntent(amount: number, currency: string) {
  const fetchPaymentIntent = async () => {
    const response = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, currency }),
    });
  };
  return { fetchPaymentIntent };
}
