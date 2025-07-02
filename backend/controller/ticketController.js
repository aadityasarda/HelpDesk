const Ticket = require("../models/ticket");
const mongoose = require("mongoose")

exports.createTicket = async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTicketById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Server received ID:", id);

    // Convert string to ObjectId manually (important)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Ticket ID" });
    }

    const ticket = await Ticket.findById(new mongoose.Types.ObjectId(id));

    if (!ticket) {
      console.log("Ticket not found in DB");
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.json(ticket);
  } catch (err) {
    console.error("Get Ticket Error:", err.message);
    res.status(500).json({ message: err.message });
  }
};
