import React, { useState, useEffect } from 'react';
import { Link } from 'react-reactor-dom';
import { useNavigate } from 'react-router-dom';
import { updatePost } from '../api';
function Post()
{
    const [activity, setActivity] = useState('');
    const [interest, setInterest] = useState('');
    const [desc, setDesc] = useState('');
    const handlePost = async(e) => {

    };

    return(
        <div class = 'post'>
            <h1>Make a Post</h1>
            <form onSubmit = {handlePost}>
                <label>
                    <input
                        className = "form-control"
                        type ="text"
                        id = "activity"
                        name ="activity"
                        value={activity}
                        onChange ={(event) =>setActivity(event.target.value)}
                        placeholder = "Activity"
                    />
                    What event do you want to attend?
                </label>
                <label>
                    <select name="interest" id="interest">
                        <option value="" disabled selected>Choose an interest</option>
                        <option value="social">Social Event</option>
                        <option value="academic">Academic Event</option>
                        <option value="service">Servive Event</option>
                        <option value="career">Career Event</option>
                    </select>
                </label>
                
            </form>
        </div>
    );

};
export default Post;