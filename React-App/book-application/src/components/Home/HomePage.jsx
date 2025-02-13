import React  from "react";
import { useParams } from 'react-router-dom';


function HomePage() {
    const { id } = useParams();

    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page</p>
            {id ? <h2>Showing details for ID: {id}</h2> : <p>No ID provided</p>}
        </div>
    )   
}


export default HomePage;