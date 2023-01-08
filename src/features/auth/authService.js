import axios from 'axios';

// Register user
const register = async (userData) => {
    const response = await axios.post('https://dwrestapi.herokuapp.com/users/create', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }

    return response.data.user;
}

// Log in user 
const login = async (userData) => {

    const response = await axios.post('https://dwrestapi.herokuapp.com/users/login', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
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