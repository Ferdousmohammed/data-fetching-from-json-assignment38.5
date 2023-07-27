import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
    const {ClickedId} = useParams();
    const [friend, setFriend] = useState ({});
    
    useEffect(() => {
   
      fetch(`https://jsonplaceholder.typicode.com/users/${ClickedId}`)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])
    
    return (
        <div style={{backgroundColor: 'grey', margin: '20px', padding: '20px', borderRadius: '15px'}}>
            <h3>This is our About page Detail of {ClickedId} </h3>
            <p>Name: {friend.name}</p>
            <p>Email: {friend.email} </p>
            <p>Phone: {friend.phone}</p>
            <p>Website: {friend.website} </p>
        </div>
    );
};

export default About;