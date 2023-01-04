// Register user
const register = async (userData) => {
    const response = await fetch('http://localhost:8080/users/create', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(userData)})
    .then((res) => {
        return res.json();
    })
    .then((data) => localStorage.setItem('user', JSON.stringify(data.user)));

    return response;
}

// Log in user 
const login = async (userData) => {
    const response = await fetch('http://localhost:8080/users/login', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(userData)})
    .then((res) => {
        return res.json();
    })
    .then((data) => localStorage.setItem('user', JSON.stringify(data.user)));

    return response;
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