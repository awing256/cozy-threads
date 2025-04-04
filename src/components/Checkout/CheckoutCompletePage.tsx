// import {useState, useEffect} from 'react';
// import {useStripe} from '@stripe/react-stripe-js';
import SiteHeader from "../SiteHeader.tsx";
import {useCart} from "../ShoppingCart/useCart.tsx";
import {useEffect} from "react";



export const CheckoutCompletePage = () => {
    const {clearCart} = useCart()
    useEffect(() => {
        clearCart();
    }, []);
    // const stripe = useStripe();
    // const [message, setMessage] = useState<string | null>();

    // useEffect(() => {
    //     if (!stripe) {
    //         return;
    //     }
    //     if (clientSecret) {
    //         // Retrieve the PaymentIntent
    //         stripe
    //             .retrievePaymentIntent(clientSecret)
    //             .then(({paymentIntent}) => {
    //                 // Inspect the PaymentIntent `status` to indicate the status of the payment
    //                 // to your customer.
    //                 //
    //                 // Some payment methods will [immediately succeed or fail][0] upon
    //                 // confirmation, while others will first enter a `processing` state.
    //                 //
    //                 // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
    //                 switch (paymentIntent?.status) {
    //                     case 'succeeded':
    //                         setMessage('Success! Payment received.');
    //                         break;
    //
    //                     case 'processing':
    //                         setMessage("Payment processing. We'll update you when payment is received.");
    //                         break;
    //
    //                     case 'requires_payment_method':
    //                         // Redirect your user back to your payment page to attempt collecting
    //                         // payment again
    //                         setMessage('Payment failed. Please try another payment method.');
    //                         break;
    //
    //                     default:
    //                         setMessage('Something went wrong.');
    //                         break;
    //                 }
    //             });
    //     }
    // }, [stripe]);


    return (
        <>
            <SiteHeader/>
            <div>
                {"Success! Payment request received."}
            </div>
        </>
)
};

