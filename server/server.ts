import path from 'path';
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../.env') });
console.log(process.env.STRIPE_SECRET_KEY)
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-03-31.basil",
});

const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
    // console.log('Request body:', req.body);
    try {
        const { amount } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log("Running on port 3000"));