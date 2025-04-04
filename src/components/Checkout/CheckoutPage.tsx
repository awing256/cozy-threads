import {useEffect, useState} from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CheckoutForm} from "./CheckoutForm.tsx";
import {useCart} from "../ShoppingCart/useCart.tsx";
import {Route, Routes} from "react-router-dom";
import {CheckoutCompletePage} from "./CheckoutCompletePage.tsx";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';


export const CheckoutPage = () => {
    const [clientSecret, setClientSecret] = useState<string | null>();
    const {getTotalCost} = useCart();


    useEffect(() => {
        const amount = Math.round(getTotalCost() * 100);
        const fetchPaymentIntent = async () => {

            const response = await fetch(`${API_BASE_URL}/create-payment-intent`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: amount, currency: 'usd' })
            });

            const data = await response.json();
            setClientSecret(data.clientSecret);
        };
        if (amount > 0) {
            fetchPaymentIntent();
        }
        else{
            const secretFromUrl = new URLSearchParams(window.location.search).get(
                'payment_intent_client_secret'
            );
            if (secretFromUrl) setClientSecret(secretFromUrl);
        }
    }, []);

    if (!clientSecret) return <div>Loading payment details...</div>

    return (
        <Elements stripe={stripePromise} options={{clientSecret: clientSecret}}>
            <Routes>
                <Route path="/" element={<CheckoutForm />} />
                <Route path="/complete" element={<CheckoutCompletePage />} />
            </Routes>
        </Elements>
    );
};