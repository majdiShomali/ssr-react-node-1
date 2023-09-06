import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";
import cors from 'cors';
import mongoose from 'mongoose';

import userRoutes from "./routes/userRouter"; 

// const errorHandler = require('./middleware/500');
// const notFoundHandler = require('./middleware/404');

const dbURI = process.env.MONGODB;
const PORT = process.env.PORT || 8000;


const app = express();
app.use(cors());

app.use(express.static(path.resolve(__dirname, "..", "build")));


app.use("/api", userRoutes);


// app.use(errorHandler);
// app.use('*',notFoundHandler);

app.get("*", (req, res) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Some error happened");
    }

    const context = {};
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      return res.redirect(301, context.url);
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});





const startServer = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`Starting server on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

startServer();