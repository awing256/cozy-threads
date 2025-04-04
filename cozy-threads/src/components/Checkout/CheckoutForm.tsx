import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export function CheckoutForm() {
    return (
        <Elements stripe={stripePromise}>
            <form>
                <PaymentElement
                    options={{
                        layout: {
                            type: 'accordion', // or 'tabs'
                            defaultCollapsed: false,
                        }
                    }}
                />
                <button>Submit Payment</button>
            </form>
        </Elements>
    );
}