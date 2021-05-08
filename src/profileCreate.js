import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router';
import ProfileContext from './profileContext';

export default  function Profilecreate() {
    let history = useHistory()

    let profileData = useContext(ProfileContext)

    let [name,setname] = useState("");
    let [position,setposition] = useState("");
    let [office,setoffice] = useState("");
    let [age,setage] = useState("");
    let [salery,setsalery] = useState("");


    let profileSubmit = async (e) => {
        e.preventDefault();
        profileData.setprofileList([...profileData.profileList,{
            name,
            position,
            office,
            age,
            salery
        }])
        history.push("/profile");
    }
    let cancel =  () =>{
       
        history.push("/profile");
      } 

    return (
        <div className="container">
            <h1> Profile Create</h1>
            <div class="container rounded bg-white mt-5 mb-5">
            
            <form class="col-md-12 border-right" onSubmit={profileSubmit}>
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">Profile Create</h4>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6"><label class="labels">Name</label>
                        <input type="text" class="form-control" placeholder="enter full  name" 
                        value={name} onChange={(e) => setname(e.target.value)} /></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><label class="labels">Position</label>
                        <input type="text" class="form-control" placeholder="enter position" 
                         value={position} onChange={(e) => setposition(e.target.value)}/></div>

                        <div class="col-md-12"><label class="labels">Office</label>
                        <input type="text" class="form-control" placeholder="enter office name"
                         value={office} onChange={(e) => setoffice(e.target.value)}/></div>

                        <div class="col-md-12"><label class="labels">Age</label>
                        <input type="text" class="form-control" placeholder="enter age" 
                        value={age} onChange={(e) => setage(e.target.value)} /></div>
                        
                        <div class="col-md-12"><label class="labels">Salery</label>
                        <input type="text" class="form-control" placeholder="enter salery"
                         value={salery} onChange={(e) => setsalery(e.target.value)} /></div>
                    </div>
                    <div className="row mt-3">
                       <div class=" text-center"><button class="btn btn-primary profile-button" type="submit" >Update Profile</button></div>
                        <div class="ml-4 text-center"><button class="btn btn-primary profile-button" type="submit" onClick={cancel}>Cancel</button></div>
                   </div>   
                   </div>
            </form>
          
    </div>
    
        </div>
    )
}


