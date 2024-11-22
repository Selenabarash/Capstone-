import axios from "axios"
import React from 'react'
// i dont import profile 
// do I import styling? 


function Profile(){
    return(
        <main>
            <h1> Profile Page </h1> 
            <h2 className="profile-name">{name}</h2>
            <img src={photoUrl} alt={`${name}'s profile`} className="profile-photo" /> 
            <p className="profile-bio">{bio}</p>

         </main>
    )
}

export default Profile


// i need route to profile 