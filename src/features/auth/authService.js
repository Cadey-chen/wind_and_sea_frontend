// Register user
const register = async (userData) => {
    const response = await fetch('http://localhost:8080/users/create', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(userData)});

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

// Log in user 
const login = async (userData) => {
    const response = await fetch('http://localhost:8080/users/login', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(userData)});

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

// Logout user
const logout = () => {
    localStorage.removeItem('user');
}

const authService = {
    register,
    login,
    logout
}

export default authService;