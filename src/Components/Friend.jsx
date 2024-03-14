import React from 'react';
import Button from './Button';

const Friend = ({ friend, onSelection }) => {

    // console.log(props);
    // const friend = props;
  
    return (
      <>
        <li>
          <img src={friend.image} alt={friend.name}  className='pro-img'/>
          <h3>{friend.name}</h3>
  
          {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name}  {Math.abs(friend.balance)}€
            </p>)}
          {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {Math.abs(friend.balance)}€
            </p>)}
          {friend.balance === 0 && (
          <p className="red">You and {friend.name} are even
          </p>)}
  
          <Button onClick={() => onSelection(friend)}>Select</Button>
  
  
        </li>
  
      </>
  
    )
  
  }

export default Friend;