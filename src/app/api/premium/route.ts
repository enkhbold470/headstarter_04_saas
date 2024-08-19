import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`, {});

export async function POST(req: Request) {
  try {
    // We'll implement the checkout session creation here
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    return new NextResponse(
      JSON.stringify({ error: { message: error.message } }),
      {
        status: 500,
      }
    );
  }
}
