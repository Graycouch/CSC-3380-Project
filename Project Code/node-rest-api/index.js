const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const routeUser = require("./Routes/users");
const routeAuth = require("./Routes/auth");
const routePost = require("./Routes/posts");

dotenv.config();

// Connection to MongoDB
mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Successfully Connected to MongoDB!");
    }
);

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", routeUser);
app.use("/api/auth", routeAuth);
app.use("/api/posts", routePost);

// Connecting to the Backend Server
app.listen(8800,
    () => {
        console.log("Backend Server is up and  running!");
    }
);