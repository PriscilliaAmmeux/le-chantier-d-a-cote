import express from "express";
import Testimonial from "../models/Testimonial";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Testimonial.find();
  res.json(data);
});

export default router;
