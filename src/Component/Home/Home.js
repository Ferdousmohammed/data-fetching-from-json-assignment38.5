import React from 'react';
import { useEffect, useState } from 'react';
import Clicked from '../Clicked/Clicked';


const Home = () => {
    const [clicked, setClicked] = useState([]);

  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setClicked(data))
  
    }, [0])
    return (
        <div>

<p>Data faching from json placeHolder, userData {clicked.length} </p>
              {
        clicked.map(clii => <Clicked clii={clii}></Clicked>)
       }
        </div>
    );
};

export default Home;