const express = require("express");
const router = express.Router();
const {
  createTicket,
  getAllTickets,
  getTicketById,
} = require("../controller/ticketController");

router.post("/", createTicket);

router.get("/", getAllTickets);

router.get("/:id", getTicketById);

module.exports = router;
