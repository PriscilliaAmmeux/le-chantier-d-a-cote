import express from "express";
import faq from "../models/Faq";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await faq.find();
  res.json(data);
});

export default router;
