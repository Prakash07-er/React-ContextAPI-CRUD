import React from 'react'
import { useContext, useEffect } from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router';
import UserContext from './userContext';

export default  function Usercreate() {
    let history = useHistory()
    let userData = useContext(UserContext)

    let [name,setname] = useState("");
    let [position,setposition] = useState("");
    let [office,setoffice] = useState("");
    let [age,setage] = useState("");
    let [salery,setsalery] = useState("");

    let cancel =  () =>{
       
        history.push("/users");
      }

    let userSubmit = async (e) => {
        e.preventDefault();
         userData.setuserList([...userData.userList,{
            name,
            position,
            office,
            age,
            salery
        }])
     await   fetch ("https://6073fc33066e7e0017e78bc1.mockapi.io/userdata",{
            method: "POST",
            body: JSON.stringify({
                name,
                position,
                office,
                age,
                salery
            }),
            headers: {
                "Content-type" : "application/json"
            }
        })
        history.push('/users')
    }

    useEffect(() => {
        console.log("During creation")
    },[])

    useEffect(() => {
        console.log("During props change")
    },[name])

    useEffect(() => {
        return() => {
            console.log("component destroyed")
        }
    },[])

    return (
        <div className="container">
            <h1> User Create</h1>
            <div class="container rounded bg-white mt-5 mb-5">
            
            <form class="col-md-12 border-right" onSubmit={userSubmit}>
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">User Create</h4>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6"><label class="labels">Name</label>
                        <input type="text" class="form-control" placeholder="enter full name" 
                        value={name} onChange={(e) => setname(e.target.value)} required/></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><label class="labels">Position</label>
                        <input type="text" class="form-control" placeholder="enter position" 
                         value={position} onChange={(e) => setposition(e.target.value)} required/></div>

                        <div class="col-md-12"><label class="labels">Office</label>
                        <input type="text" class="form-control" placeholder="enter office name"
                         value={office} onChange={(e) => setoffice(e.target.value)} required/></div>

                        <div class="col-md-12"><label class="labels">Age</label>
                        <input type="text" class="form-control" placeholder="enter age" 
                        value={age} onChange={(e) => setage(e.target.value)} required /></div>
                        
                        <div class="col-md-12"><label class="labels">Salery</label>
                        <input type="text" class="form-control" placeholder="enter salery"
                         value={salery} onChange={(e) => setsalery(e.target.value)} required /></div>
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


