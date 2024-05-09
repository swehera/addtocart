// import { loadStripe } from "@stripe/stripe-js";

// export async function checkout({ lineItems }: { lineItems: React.ReactNode }) {
//   let stripepromise: any = null;
//   let getstripe = () => {
//     if (!stripepromise) {
//       stripepromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY!);
//     }
//     return stripepromise;
//   };
//   const stripe = await getstripe();
//   await stripe.redirectToCheckout({
//     mode: "payment",
//     lineItems,
//     successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
//     cancelUrl: window.location.origin,
//   });
// }
