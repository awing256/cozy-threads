import {useEffect, useState} from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CheckoutForm} from "./CheckoutForm.tsx";
import {useCart} from "../ShoppingCart/useCart.tsx";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const CheckoutPage = () => {
    const [clientSecret, setClientSecret] = useState();
    const {getTotalCost} = useCart();

    useEffect(() => {
        const fetchPaymentIntent = async () => {
            const amount = Math.round(getTotalCost() * 100);

            const response = await fetch('http://localhost:3000/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: amount, currency: 'usd' })
            });

            const data = await response.json();
            setClientSecret(data.clientSecret);
        };

        fetchPaymentIntent();
    }, []);

    return (
        <Elements stripe={stripePromise} options={clientSecret}>
            <CheckoutForm />
        </Elements>
    );
};