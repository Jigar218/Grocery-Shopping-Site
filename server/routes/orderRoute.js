import express from "express";
import authUser from "../middleware/authUser.js";
import {
  getAllOrders,
  getUserOrders,
  placedOrderCOD,
  placedOrderStripe,
} from "../controllers/orderController.js";
import authSeller from "../middleware/authSeller.js";

const orderRouter = express.Router();

orderRouter.post("/cod", authUser, placedOrderCOD);
orderRouter.get("/user", authUser, getUserOrders);
orderRouter.get("/seller", authSeller, getAllOrders);
orderRouter.post("/stripe", authSeller, placedOrderStripe);

export default orderRouter;
