import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useTicketDetails from "../hooks/useTicketDetails";
import "../styles/TicketDetails.css";

function TicketDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { ticket, loading, error } = useTicketDetails(id);

    if (loading) return <p>Loading ticket details...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!ticket) return <p>Ticket not found.</p>;

    return (
        <div className="modal-overlay">
            <div className="ticket-modal">
                <h2 className="modal-title">Ticket Details</h2>
                <div className="ticket-info">
                    <p><strong>Ticket No:</strong> {ticket.ticketNo}</p>
                    <p><strong>Date:</strong> {new Date(ticket.date).toLocaleDateString()}</p>
                    <p><strong>Name:</strong> {ticket.name}</p>
                    <p><strong>Dept:</strong> {ticket.department}</p>
                    <p><strong>Title:</strong> {ticket.subject}</p>
                    <p><strong>Description:</strong> {ticket.description}</p>
                    <p><strong>Category:</strong> {ticket.category}</p>
                    <p><strong>Type:</strong> {ticket.type}</p>
                    <p><strong>Priority:</strong> {ticket.priority}</p>
                    <p><strong>Status:</strong> {ticket.status || "In Progress"}</p>
                    <p><strong>Attachment:</strong> {ticket.file ? ticket.file : "None"}</p>
                </div>
                <button className="close-button" onClick={() => navigate("/my-tickets")}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default TicketDetails;
