import express from "express";
import Faq from "../models/Faq";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const faqs = await Faq.find(); //
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
