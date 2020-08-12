import "./db";
import dotenv from "dotenv";
import app from "./app";

import "./models/Video";
import "./models/Comment";
import "./models/User";

dotenv.config();

const PORT = 4000;

const handleListening = () => console.log(`✅ Listening on: localhost:${PORT}`);

app.listen(PORT, handleListening);
