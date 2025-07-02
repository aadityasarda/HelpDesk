import { useEffect, useState } from "react";
import { getTicketById } from "../services/ticketService";

export default function useTicketDetails(id) {
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTicket() {
      try {
        const data = await getTicketById(id);
        setTicket(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTicket();
  }, [id]);

  return { ticket, loading, error };
}
