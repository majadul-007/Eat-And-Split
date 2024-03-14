import React, { useState } from 'react';
import Button from './Button';

const FormSplitBill = ({selectedFriend, onSplitBill}) => {

    const [bill, setBill] = useState(" ");
    const [paidByUser, setPaidByUser] = useState("");
    const paidByFriend = bill? bill - paidByUser : '';
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const handleSubmit = (e) =>{

        e.preventDefault();

        if(!bill || !paidByUser){
            return;
        }

        onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);





    }


    return (
  
      <form className='form-split-bill' onSubmit={handleSubmit}>
  
        <h2>Split a blill with {selectedFriend.name}</h2>
        <label>💵 Bill Value</label>
          <input type="text" value={bill}
          
          onChange={(e) => setBill(Number(e.target.value))}
          ></input>
  
          <label>💁 Your Expense</label>
          <input type="text" value={paidByUser}
          
          onChange={(e) => 
            setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}

          ></input>
          <label>👨‍👧‍👦 {selectedFriend.name}'s Expense</label>
          <input type="text" disabled value={paidByFriend}></input>
  
          <label>🤑 Who is Paying the Bill?</label>
          <select
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying((e.target.value))}

          >
  
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
            
          </select>
  
          <Button>Split Bill</Button>
      </form>
    )
  }

export default FormSplitBill;