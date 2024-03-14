import React from 'react';
import Friend from './Friend';

const FreindsList = ({friends, onSelection}) => {

    // const friends = initialFriends;
  
  
    return (
  
      <>
        <ul>
          {friends.map(friend => (
  
  
            <Friend friend={friend} key={friend.id} onSelection={onSelection}>
  
            </Friend>
  
          ))}
        </ul>
  
      </>
    )
  }

export default FreindsList;