import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

export default function useSignInForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(formData);

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            alert("Login successful!");
            switch (data.user.role) {
                case "admin":
                    navigate("/dashboard/admin");
                    break;
                case "operations":
                    navigate("/dashboard/operations");
                    break;
                case "support":
                    navigate("/dashboard/support");
                    break;
                default:
                    navigate("/dashboard");
            }

        } catch (err) {
            alert(err.message);
        }
    };

    return { formData, handleChange, handleSubmit };
}
