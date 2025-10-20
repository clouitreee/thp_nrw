import Stripe from "stripe";

const STRIPE_API_VERSION = "2024-11-20" as const;
const textDecoder = new TextDecoder("utf-8");
const cryptoProvider = Stripe.createSubtleCryptoProvider();

export const runtime = "nodejs";

function getStripeSecret() {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    throw new Error("STRIPE_WEBHOOK_SECRET is not configured");
  }
  return secret;
}

function getStripeClient() {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }

  return new Stripe(apiKey, {
    apiVersion: STRIPE_API_VERSION,
    httpClient: Stripe.createFetchHttpClient(),
  });
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return new Response("Missing Stripe signature", { status: 400 });
  }

  let stripe: Stripe;
  let webhookSecret: string;

  try {
    stripe = getStripeClient();
    webhookSecret = getStripeSecret();
  } catch (error) {
    console.error("Stripe webhook misconfiguration", error);
    return new Response("Webhook misconfigured", { status: 500 });
  }

  const rawBody = await request.arrayBuffer();
  if (rawBody.byteLength === 0) {
    console.error("Stripe webhook received empty body");
    return new Response("Empty payload", { status: 400 });
  }

  try {
    const event = await stripe.webhooks.constructEventAsync(
      textDecoder.decode(rawBody),
      signature,
      webhookSecret,
      undefined,
      { cryptoProvider }
    );

    const eventId = (event as { id?: string }).id;

    if (!eventId) {
      console.error("Stripe webhook missing event id");
      return new Response("Invalid event", { status: 400 });
    }

    switch (event.type) {
      case "payment_intent.succeeded":
      case "checkout.session.completed":
        // TODO: enqueue fulfillment job via Durable Object / Supabase function
        break;
      default:
        console.warn(`Unhandled Stripe webhook event: ${event.type}`);
        break;
    }

    return new Response(null, { status: 204 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Stripe webhook verification failed", message);
    return new Response("Signature verification failed", { status: 400 });
  }
}
