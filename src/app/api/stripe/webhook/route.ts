import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  // TODO: Verify Stripe webhook signature
  // TODO: Handle checkout.session.completed event
  // TODO: Insert/update order in Supabase
  // TODO: Send confirmation email via Resend
  console.log("Stripe webhook received:", body.substring(0, 100));

  return NextResponse.json({ received: true });
}
