import axios from 'axios';
import APP_URL from '../../config/Config';
const REG_URL = APP_URL + 'users/create';
const LOGIN_URL = APP_URL + 'users/login';

// Register user
const register = async (userData) => {
    const response = await axios.post(REG_URL, userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }

    return response.data.user;
}

// Log in user 
const login = async (userData) => {

    const response = await axios.post(LOGIN_URL, userData);

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