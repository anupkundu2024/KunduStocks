require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingModel } = require("./models/HoldingsModel");
const { PositionModel } = require("./models/PositionModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3302;
const URL = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// DUMMY DATA TEST FOR HOLDINGS
app.get("/addHoldings", async (req, res) => {
  let tempHloding = [
    {
      name: "BHARTIARTL",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "HDFCBANK",
      qty: 2,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    },
    {
      name: "HINDUNILVR",
      qty: 1,
      avg: 2335.85,
      price: 2417.4,
      net: "+3.49%",
      day: "+0.21%",
    },
    {
      name: "INFY",
      qty: 1,
      avg: 1350.5,
      price: 1555.45,
      net: "+15.18%",
      day: "-1.60%",
      isLoss: true,
    },
    {
      name: "ITC",
      qty: 5,
      avg: 202.0,
      price: 207.9,
      net: "+2.92%",
      day: "+0.80%",
    },
  ];

  tempHloding.forEach((item) => {
    let newHolding = new HoldingModel({
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
    });
    newHolding.save();
  });
  res.send("Holdings added to database!");
});

// DUMMY DATA TEST FOR POSITIONS
app.get("/addPosition", async (req, res) => {
  let tempPosition = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];
  tempPosition.forEach((item) => {
    let newPosition = new PositionModel({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss,
    });
    newPosition.save();
  });
  res.send("Positions added to database!");
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

// for buy stocks in dashboard
app.post("/newOrder", async (req, res) => {
  try {
    console.log("Request body:", req.body);
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order saved!");
  } catch (error) {
    res.status(500).send("Error saving order: " + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`App Started in port ${PORT}`);
  mongoose.connect(URL);
  console.log("DB Connected Successfully");
});
