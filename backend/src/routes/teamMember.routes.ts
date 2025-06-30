import express from "express";
import TeamMember from "../models/TeamMember";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const teamMembers = await TeamMember.find(); //
    res.json(teamMembers);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
