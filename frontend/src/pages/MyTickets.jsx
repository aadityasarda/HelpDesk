import React, { useState } from "react";
import useFetchTickets from "../hooks/useFetchTickets";
import Modal from "../components/Modal";
import "../styles/MyTickets.css";

function MyTickets() {
  const { tickets, loading, error } = useFetchTickets();
  const [selectedTicket, setSelectedTicket] = useState(null);

  const openModal = (ticket) => setSelectedTicket(ticket);
  const closeModal = () => setSelectedTicket(null);

  if (loading) return <p>Loading tickets...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="ticket-list-container">
      <h2>My Tickets</h2>
      {/* ... Filters & Search ... */}

      <table className="ticket-table">
        <thead>
          <tr>
            <th>Ticket No.</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Department</th>
            <th>Priority</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket._id}>
              <td
                className="clickable"
                onClick={() => openModal(ticket)}
              >
                {ticket.ticketNo}
              </td>
              <td>{ticket.subject}</td>
              <td>{ticket.status || "In Progress"}</td>
              <td>{ticket.department}</td>
              <td>{ticket.priority}</td>
              <td>{new Date(ticket.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={!!selectedTicket} onClose={closeModal}>
        {selectedTicket && (
          <div>
            <h3>Ticket Details</h3>
            <p><strong>Ticket No:</strong> {selectedTicket.ticketNo}</p>
            <p><strong>Date:</strong> {new Date(selectedTicket.date).toLocaleDateString()}</p>
            <p><strong>Name:</strong> {selectedTicket.name}</p>
            <p><strong>Dept:</strong> {selectedTicket.department}</p>
            <p><strong>Title:</strong> {selectedTicket.subject}</p>
            <p><strong>Description:</strong> {selectedTicket.description}</p>
            <p><strong>Category:</strong> {selectedTicket.category}</p>
            <p><strong>Type:</strong> {selectedTicket.type}</p>
            <p><strong>Priority:</strong> {selectedTicket.priority}</p>
            <p><strong>Status:</strong> {selectedTicket.status || "In Progress"}</p>
            <p><strong>Attachment:</strong> {selectedTicket.file ? selectedTicket.file.name : "None"}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default MyTickets;
