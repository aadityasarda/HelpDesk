export async function registerUser(data) {
    const res = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await res.json();

    if (!res.ok) throw new Error(result.message || "Registration failed");
    return result;
}

export async function loginUser(data) {
    const res = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await res.json();

    if (!res.ok) throw new Error(result.message || "Login failed");
    return result;
}