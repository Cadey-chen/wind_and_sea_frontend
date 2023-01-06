import axios from 'axios';

// Register user
const register = async (userData) => {
    /*
    const response = await fetch('http://localhost:8080/users/create', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(userData)})
    .then((res) => {
        return res.json();
    })
    .then((data) => localStorage.setItem('user', JSON.stringify(data.user)));

    return response;
    */
    const response = await axios.post('http://localhost:8080/users/create', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data.user;
}

// Log in user 
const login = async (userData) => {
    /*
    const response = await fetch('http://localhost:8080/users/login', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(userData)})
    .then((res) => {
        return res.json();
    })
    .then((data) => localStorage.setItem('user', JSON.stringify(data.user)));
    */

    const response = await axios.post('http://localhost:8080/users/login', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data.user;
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