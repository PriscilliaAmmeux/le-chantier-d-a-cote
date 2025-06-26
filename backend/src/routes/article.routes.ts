import express from "express";
import Article from "../models/Service";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const articles = await Article.find(); //
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
