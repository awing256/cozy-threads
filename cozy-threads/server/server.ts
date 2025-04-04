// This is your test secret API key.
const stripe = require("stripe")(
    process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-03-31.basil",
});
const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors({origin: 'http://lcoalhost:5500'}))

const YOUR_DOMAIN = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            ui_mode: "custom",
            line_items: [
                {
                    // Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
                    price: "{{PRICE_ID}}",
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/success.html`,
            cancel_url: `${process.env.CLIENT_URL}/cancel.html`

        });
        res.json({url: session.url})
    }catch(e){
        res.status(500).json({error:e.message})
    }

});

app.listen(3000, () => console.log("Running on port 3000"));