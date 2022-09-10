import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [messageSuccess, setMessageSuccess] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { error, paymentMethod } = await stripe.createPaymentMethod({
		type: "card",
		card: elements.getElement(CardElement),
    });

    if (!error) {
		console.log("Stripe 23 | token generated!", paymentMethod);
		try {
			const { id } = paymentMethod;			
			const response = await axios.post(
				"http://localhost:8080/stripe/charge",
				{
				amount: 999,
				id: id,
				}
			);
	
			console.log("Stripe 35 | data", response.data.success);
			if (response.data.success) {
				console.log("CheckoutForm.js 25 | payment successful!");
				setMessageSuccess(true)
			}
			} catch (error) {
			console.log("CheckoutForm.js 28 | ", error);
			}
    } else {
		console.log(error.message);
    }
	};

	return (
		<div>
			{!messageSuccess ?
				<form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
					<div className="cardEl">
						<CardElement />
					</div>
					<button>Pay 👛</button>
				</form>
			:
				<div>
					<h3> 💳 Your payment was successful! 💸 </h3>
				</div>
			}

		</div>
	);
};