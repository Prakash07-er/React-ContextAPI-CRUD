import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router'

export default  function Profiledit(props) {
    console.log(props)
    let history = useHistory();
    let [name ,setname] =useState("")
    let [office ,setoffice] =useState("")
    let [position ,setposition] =useState("")
    let [age ,setage] =useState("")
    let [salery ,setsalery] =useState("")

    useEffect (async () => {
        let edit = await fetch(`https://6073fc33066e7e0017e78bc1.mockapi.io/userdata/${props.match.params.id}`)
        let editdata = await edit.json();
        console.log(editdata);

        setname(editdata.name)
        setoffice(editdata.office)
        setposition(editdata.position)
        setage(editdata.age)
        setsalery(editdata.salery)
    },[])

    let remove = async () =>{
        await fetch(`https://6073fc33066e7e0017e78bc1.mockapi.io/userdata/${props.match.params.id}`, {
          method: "DELETE",
        });
        history.push("/profile");
      }
      let cancel =  () =>{
       
        history.push("/profile");
      }

      let userSubmit = async (e) => {
        e.preventDefault();
        await fetch(`https://6073fc33066e7e0017e78bc1.mockapi.io/userdata/${props.match.params.id}`,{
            method: "PUT",
            body: JSON.stringify({
                name,
                position,
                office,
                age,
                salery
            }),
            headers: {
                "Content-type": "application/json",
              }
        });
        history.push("/profile");
        }
        
    return (
        <div>

            <h1> Profile Edit  {props.match.params.id} </h1>
            <div class="container rounded bg-white mt-5 mb-5">
            
        <div class="col-md-12 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">User Profile</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6">
                    <label class="labels">Name</label>
                    <input type="text" class="form-control" placeholder="first name" value={name} onChange={(e) => setname(e.target.value)} /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <label class="labels">Position</label>
                        <input type="text" class="form-control" placeholder="enter phone number"   value={position} onChange={(e) => setposition(e.target.value)} required/></div>
                    <div class="col-md-12">
                        <label class="labels">Office</label>
                        <input type="text" class="form-control" placeholder="enter office name"  value={office} onChange={(e) => setoffice(e.target.value)}  required/></div>
                    <div class="col-md-12">
                        <label class="labels">Age</label>
                        <input type="text" class="form-control" placeholder="enter age"  value={age} onChange={(e) => setage(e.target.value)} required /></div>
                    <div class="col-md-12">
                        <label class="labels">Salery</label>
                        <input type="text" class="form-control" placeholder="enter salery" value={salery} onChange={(e) => setsalery(e.target.value)} required /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="" /></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state" /></div>
                </div>
                <div className="row mt-3">
                    <div class="ml-4 text-center"><button class="btn btn-primary profile-button" type="button" onClick={userSubmit}>Update Profile</button></div>
                    <div class="ml-4 text-center"><button class="btn btn-primary profile-button" type="submit" onClick={remove} >Delete user</button></div>
                    <div class="ml-4 text-center"><button class="btn btn-primary profile-button" type="submit" onClick={cancel}>Cancel</button></div>
                </div>    
                </div>
        </div>
      
</div>

        </div>
    )
}


