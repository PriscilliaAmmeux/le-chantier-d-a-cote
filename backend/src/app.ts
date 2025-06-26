import express from "express";
import mongoose from "mongoose";
//import testimonialRoutes from "./routes/testimonial.routes";
//import teamRoutes from "./routes/team.routes";
//import serviceRoutes from "./routes/service.routes";
//import articleRoutes from "./routes/article.routes";
//import faqRoutes from "./routes/faq.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch((err) => console.error("❌ Erreur MongoDB", err));

app.use(express.json());
// app.use("/testimonial", testimonialRoutes);
// app.use("/team", teamRoutes);
// app.use("/services", serviceRoutes);
// app.use("/articles", articleRoutes);
// app.use("/faq", faqRoutes);

export default app;
