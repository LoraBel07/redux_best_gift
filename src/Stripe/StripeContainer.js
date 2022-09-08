import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51LfbUkIxYIsgFwes9KCfRcBMzuqpwzVEM91NhbGzvmr4y8ougEyRayBPvzd4UScYKtL9zNLRMS1XMnIW8k135eJS00nbKjWfk2";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
	return (
		<Elements stripe={stripeTestPromise}>
			<CheckoutForm />
		</Elements>
	);
};

export default Stripe;