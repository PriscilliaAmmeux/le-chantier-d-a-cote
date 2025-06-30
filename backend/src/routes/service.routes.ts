import express from "express";
import Service from "../models/Service";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const services = await Service.find(); // 
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
