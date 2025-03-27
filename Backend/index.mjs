import express from "express"
import cors from "cors"
import axios from "axios"
import bodyParser from "body-parser"
import route from "./routes/eventRoutes.mjs"
const app =express()

const corsoptions = {
    origin: "http://localhost:5173", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsoptions));
  app.options("*", cors(corsoptions));


app.use(bodyParser.json())
app.use(express.json())
app.use(route)
app.use(cors())




// Function to get access token
const getAccessToken = async () => {
  const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
    auth: {
      username: process.env.CONSUMER_KEY,
      password: process.env.CONSUMER_SECRET,
    },
  });
  return response.data.access_token;
};

// Function to generate password for STK push
const generatePassword = () => {
  const shortcode = process.env.SHORTCODE;
  const passkey = process.env.PASSKEY;
  const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
  return Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');
};

// STK push endpoint
app.post('/api/initiate-payment', async (req, res) => {
  try {
    const { phoneNumber, amount } = req.body;
    const accessToken = await getAccessToken();

    // STK Push request
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = generatePassword();

    const stkPush = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
      BusinessShortCode: process.env.SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: process.env.SHORTCODE,
      PhoneNumber: phoneNumber,
      CallBackURL: 'https://example.com/callback',
      AccountReference: '254769846063',
      TransactionDesc: 'Payment for goods',
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    res.json(stkPush.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred', details: error.response ? error.response.data : error.message });
  }
});

// QR code generation endpoint
app.post('/api/generate-qr', async (req, res) => {
  try {
    const { amount, accountReference, transactionDesc } = req.body;
    const accessToken = await getAccessToken();

    const response = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/qrcode/v1/generate',
      {
        ShortCode: process.env.SHORTCODE,
        Amount: amount,
        AccountReference: accountReference,
        TransactionDesc: transactionDesc,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred', details: error.response ? error.response.data : error.message });
  }
});





app.listen( process.env.port ||3000,()=>{
    console.log("Server running on port 3000")
})


