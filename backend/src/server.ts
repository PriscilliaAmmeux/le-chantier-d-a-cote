import app from "./app";
import config from "./config";
import { connectDB } from "./config/db";

connectDB().then(() => {
  app.listen(config.port, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${config.port}`);
  });
});
