import express from "express";
import { receiveLead } from "../controllers/lead.controller.js";

const router = express.Router();

router.post("/lead", receiveLead);

export default router;
