import { useState } from 'react';
import { createTicket } from '../services/ticketService';

export default function useTicketForm() {
    const [formData, setFormData] = useState({
        ticketNo: '',
        date: '',
        name: '',
        department: '',
        subject: '',
        category: '',
        type: '',
        priority: '',
        description: '',
        file: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createTicket(formData);
            alert('Ticket submitted successfully!');
            setFormData({
                ticketNo: '',
                date: '',
                name: '',
                department: '',
                subject: '',
                category: '',
                type: '',
                priority: '',
                description: '',
                file: null
            });
        } catch (err) {
            alert('Failed to submit ticket.');
        }
    };

    return { formData, handleChange, handleSubmit };
}
