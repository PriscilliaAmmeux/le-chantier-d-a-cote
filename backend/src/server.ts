import app from "./app";
import config from "./config";

app.listen(config.port, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${config.port}`);
});
