import React from 'react';
import Button from './Button';
import { useState } from 'react'

const FormAddFriends = ({onAddFriend}) => {

    const [name, setName] = useState("");
  
    const [image, setImage] = useState("https://i.pravatar.cc/48");
      
    
    function handleSubmit(e) {
  
        e.preventDefault();
  
        const id = crypto.randomUUID();
  
        if(!name || !image){
          return;
        }
  
  
        const newFriend = {
  
          id: crypto.randomUUID(),
          name,
          image: `${image}?=${id}`,
          balance: 0,
        };
  
        onAddFriend(newFriend);
  
        setName("");
        setImage("https://i.pravatar.cc/48");
    }
  
    return (
  
        <form className='form-add-firend' onSubmit={handleSubmit}>
          <label>👨‍👧‍👦 Friend Name</label>
          <input 
          type="text"
          value={name}
          onChange={(e)=> setName(e.target.value)}
          >
  
          </input>
          
          <label>👨‍💻 Image URL</label>
          <input type="text"
          
          value={image}
          onChange={(e)=> setImage(e.target.value)}
          ></input>
  
          <Button>Add</Button>
        </form>
      )
  }

export default FormAddFriends;