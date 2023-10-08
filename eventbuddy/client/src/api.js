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

export const getPost = async(interest)=> {
    const response = await axios.get(`${API_URL}/events/getEvents/${interest}`);
    return response;
}
export const getRutgersEvents = async()=> {
    const response = await axios.get("https://rutgers.campuslabs.com/engage/api/discovery/event/search?endsAfter=2023-10-08T08:00:00-04:00&orderByField=endsOn&orderByDirection=ascending&status=Approved&take=15&query")
    return response;
}
export const addEventAttendees = async(email,password,id)=> {
    const response = await axios.patch(`${API_URL}/events/addEventAttendees/${email}/${password}/${id}`);
    return response;
}
export const getAllUserEvents = async(email)=> { 
    const response = await axios.get(`${API_URL}/events/getUserEvents/${email}`);
    return response;
}
export const getCreatorEvents = async(email) => {
    const response = await axios.get(`${API_URL}/events/getCreatorEvents/${email}`);
    return response;
}