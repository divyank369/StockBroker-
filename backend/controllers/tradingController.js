const asyncHandler = require("../middleware/asyncHandler");
const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { OrdersModel } = require("../model/OrdersModel");

const buildAccessFilter = (user) => (
  user.role === "admin" ? {} : { owner: user._id }
);

const getHoldings = asyncHandler(async (req, res) => {
  const holdings = await HoldingsModel.find(buildAccessFilter(req.user));
  res.json(holdings);
});

const getPositions = asyncHandler(async (req, res) => {
  const positions = await PositionsModel.find(buildAccessFilter(req.user));
  res.json(positions);
});

const getOrders = asyncHandler(async (req, res) => {
  const orders = await OrdersModel.find(buildAccessFilter(req.user)).sort({
    createdAt: -1,
  });

  res.json(orders);
});

const createOrder = asyncHandler(async (req, res) => {
  const { name, qty, price, mode } = req.body;

  if (!name || !qty || !price || !mode) {
    res.status(400);
    throw new Error("Name, qty, price, and mode are required");
  }

  const order = await OrdersModel.create({
    name,
    qty: Number(qty),
    price: Number(price),
    mode,
    owner: req.user._id,
  });

  res.status(201).json({
    message: "Order created successfully",
    order,
  });
});

module.exports = {
  getHoldings,
  getPositions,
  getOrders,
  createOrder,
};
