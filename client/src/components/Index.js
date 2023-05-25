import React from 'react';



export default function index() {
    const user = JSON.parse(localStorage.getItem("user")); 
        return (
            <div>
                <h1>WELL COME - {user.userName.toUpperCase()}</h1>
            </div>
        );
    
}
