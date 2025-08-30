const mongoose = require("mongoose");
const { HoldingModel } = require("../../backend/models/HoldingsModel");
const { PositionModel } = require("../../backend/models/PositionModel");
const { OrdersModel } = require("../../backend/models/OrdersModel");

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  
  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};

exports.handler = async (event, context) => {
  await connectDB();
  
  const { httpMethod, path, body } = event;
  const route = path.replace('/.netlify/functions/api', '');

  try {
    // GET /allHoldings
    if (httpMethod === 'GET' && route === '/allHoldings') {
      const holdings = await HoldingModel.find({});
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(holdings)
      };
    }

    // GET /allPositions
    if (httpMethod === 'GET' && route === '/allPositions') {
      const positions = await PositionModel.find({});
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(positions)
      };
    }

    // POST /newOrder
    if (httpMethod === 'POST' && route === '/newOrder') {
      const orderData = JSON.parse(body);
      const newOrder = new OrdersModel(orderData);
      await newOrder.save();
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Order saved!" })
      };
    }

    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Route not found" })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};