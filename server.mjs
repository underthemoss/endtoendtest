import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/business_units", async (req, res) => {
  const apiKey =
    "0Y6HcMR9YwqzypiKE0lqhVTX4yNZwaNRf4oylla9BkB3cX0Ag92iRgDC29kcjlgE";
  const {
    database = "mongowilly",
    collection = "mongowillycollection",
    dataSource = "AtlasCluster",
    document,
  } = req.body;
  const response = await fetch(
    `https://data.mongodb-api.com/app/data-fujce/endpoint/data/v1/action/insertOne`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({ database, collection, dataSource, document }),
    }
  );

  if (response.ok) {
    const data = await response.json();
    res.json(data);
  } else {
    const error = await response.text();
    res.status(response.status).send(error);
  }
});

app.get("/business_units", async (req, res) => {
  const apiKey =
    "0Y6HcMR9YwqzypiKE0lqhVTX4yNZwaNRf4oylla9BkB3cX0Ag92iRgDC29kcjlgE";
  const { database, collection, dataSource } = req.query;

  const response = await fetch(
    `https://data.mongodb-api.com/app/data-fujce/endpoint/data/v1/action/find`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        database,
        collection,
        dataSource,
      }),
    }
  );

  if (response.ok) {
    const data = await response.json();
    res.json(data);
  } else {
    const error = await response.text();
    res.status(response.status).send(error);
  }
});

app.delete("/business_units/:id", async (req, res) => {
  const apiKey =
    "0Y6HcMR9YwqzypiKE0lqhVTX4yNZwaNRf4oylla9BkB3cX0Ag92iRgDC29kcjlgE";
  const {
    database = "mongowilly",
    collection = "mongowillycollection",
    dataSource = "AtlasCluster",
    id,
  } = req.params;
  const response = await fetch(
    `https://data.mongodb-api.com/app/data-fujce/endpoint/data/v1/action/deleteOne`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        database,
        collection,
        dataSource,
        filter: { _id: id },
      }),
    }
  );

  if (response.ok) {
    const data = await response.json();
    res.json(data);
  } else {
    const error = await response.text();
    res.status(response.status).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
