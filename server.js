const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>SellBoost</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          background: #f5f7fb;
          color: #111827;
          text-align: center;
        }
        header {
          background: #111827;
          color: white;
          padding: 30px 20px;
        }
        h1 {
          margin: 0;
          font-size: 38px;
        }
        .container {
          padding: 40px 20px;
        }
        .card {
          max-width: 500px;
          margin: auto;
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0,0,0,.08);
        }
        button {
          background: #16a34a;
          color: white;
          border: none;
          padding: 14px 24px;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>SellBoost</h1>
        <p>Get More Customers. Make More Sales.</p>
      </header>

      <div class="container">
        <div class="card">
          <h2>Grow Your Clothing Business</h2>
          <p>
            SellBoost helps clothing sellers attract more customers,
            promote their products and increase sales.
          </p>
          <a href="/services" style="
display: inline-block;
background: #16a34a;
color: white;
text-decoration: none;
padding: 14px 24px;
border-radius: 8px;
font-size: 16px;
">
Get Started
</a>
        </div>
      </div>
    </body>
    </html>
  `);
});
app.get("/services", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>SellBoost Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body style="font-family: Arial; text-align: center; padding: 30px;">
        <h1>SellBoost Services</h1>
        <p>We help clothing sellers attract more customers and increase sales.</p>
        <h2>Our Services</h2>
        <p>Product Promotion</p>
        <p>Customer Attraction</p>
        <p>Sales Growth Support</p>
        <a href="/">Back to Home</a>
      </body>
    </html>
  `);
});
app.listen(PORT, () => {
  console.log(`SellBoost running on port ${PORT}`);
});