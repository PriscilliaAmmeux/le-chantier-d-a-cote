import express from "express";
import teamMember from "../models/TeamMember";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await teamMember.find();
  res.json(data);
});

export default router;
