import express from "express";
import cors from "cors"
import * as fastq from "fastq";
import cron from "node-cron"

export const app = express()

// const chain = new RagChain()

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Middlewares
app.use(express.json());
app.use(cors())

// Queue