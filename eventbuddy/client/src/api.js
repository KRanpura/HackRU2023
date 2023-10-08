import axios from 'axios'
const API_URL = 'http://localhost:5000';

export const createUser = async(user)=>{
    const response = await axios.post (`${API_URL}/users/createUser`, user);
    return response;
}
export const getUser = async(email,password)=>{
    const response = await axios.get(`${API_URL}/users/getUser/${email}/${password}`);
    return response;
}
export const updatePost = async(post)=> {
    const response = await axios.post(`${API_URL}/events/createEvent`,post);
    return response;
}

export const getPost = async()=> {
    const response = await axios.get(`${API_URL}/events/getEvents`);
    return response;
}