import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

export default function useSignUpForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            alert("User registered successfully!");
            navigate("/signin");
        } catch (err) {
            alert(err.message);
        }
    };

    return { formData, handleChange, handleSubmit };
}