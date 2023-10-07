const express = require("express");
const app = express();
const port = 8000;
require('dotenv').config()
const dayRoutes = require("./routes/dayRoutes"); // import day router
const interviewRoutes = require("./routes/interviewRoutes"); // import day router
const cors = require('cors');
// const { client } = require("./prisma");

app.use(cors())
app.use(express.json());

app.use("/api/days", dayRoutes);
app.use("/api/interviews", interviewRoutes)

app.listen(port, () => console.log(`Server is running on port ${port}`));
