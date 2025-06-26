import express from "express";
import service from "../models/Service";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await service.find();
  res.json(data);
});

export default router;
