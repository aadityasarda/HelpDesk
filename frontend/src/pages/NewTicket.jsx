import TicketForm from "../hooks/useTicketForm";
import React from "react";
import "../styles/NewTicket.css";

function NewTicket() {
    const { formData, handleChange, handleSubmit } = TicketForm();

    return (
        <div className="ticket-container">
            <h2>Create New Ticket</h2>
            <form className="ticket-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label>Ticket No.</label>
                        <input
                            type="text"
                            name="ticketNo"
                            value={formData.ticketNo}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Department</label>
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <label>Subject</label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />

                <div className="form-row">
                    <div>
                        <label>Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                        </select>
                    </div>
                    <div className="description-field">
                        <label>Description</label>
                        <textarea
                            name="description"
                            rows="4"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>

                <div className="form-row">
                    <div>
                        <label>Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="Hardware">Hardware</option>
                            <option value="Software">Software</option>
                        </select>
                    </div>
                    <div>
                        <label>Priority</label>
                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="High">High</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="captcha-box">
                        <input type="checkbox" />
                        <span>I'm not a robot</span>
                    </div>
                    <input type="file" name="file" onChange={handleChange} />
                </div>

                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default NewTicket;
