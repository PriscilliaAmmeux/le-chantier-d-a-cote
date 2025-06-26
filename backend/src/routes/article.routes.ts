import express from "express";
import article from "../models/Service";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await article.find();
  res.json(data);
});

export default router;
