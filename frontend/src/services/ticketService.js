const API_BASE = "http://localhost:5000/api/tickets";

export async function createTicket(data) {
  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to create ticket");
    return await res.json();
  } catch (err) {
    console.error("Create Ticket Error:", err.message);
    throw err;
  }
}

export async function getTickets() {
  try {
    const res = await fetch(API_BASE);
    if (!res.ok) throw new Error("Failed to fetch tickets");
    return await res.json();
  } catch (err) {
    console.error("Get Tickets Error:", err.message);
    throw err;
  }
}

export async function getTicketById(id) {
  try {
    const res = await fetch(`${API_BASE}/${id}`);
    if (!res.ok) throw new Error("Ticket not found");
    return await res.json();
  } catch (err) {
    console.error("Get Ticket By ID Error:", err.message);
    throw err;
  }
}
