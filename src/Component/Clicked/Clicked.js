import React from 'react';
import { Link } from 'react-router-dom';


const Clicked = (props) => {
    const {name, email, id} = props.clii;
    return (
        <div style={{backgroundColor: 'lightgreen', padding: '10px', margin: '12px', borderRadius: '12px'}}>
            <h3>Name: {name}</h3>
            <p>Email: {email} </p>
            <p>Id: {id} <Link to= {`/about/${id}`}>Show detail of {id} </Link> </p>
        </div>
    );
};

export default Clicked;