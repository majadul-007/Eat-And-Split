import { useState } from 'react'
import FreindsList from './Components/FreindsList';
import FormAddFriends from './Components/FormAddFriends';
import Button from './Components/Button';
import FormSplitBill from './Components/FormSplitBill';
import './index.css'

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


//button function
// const Button = ({children, onClick}) =>{ 

//   return (

//     <button className='button' onClick={onClick}>{children}</button>

//   )

// }




function App() {

  const [friends, setFriends] = useState(initialFriends)
  
  const [showAddFriend, setShowFriend] = useState( true);

  const [selectedFriend, setSelectedFriend] = useState(null);




  const handleShowFriend = () => {

    setShowFriend((show) => !show);

  }

  const handleAddFriend = (friend) =>{

    setFriends((friends) => [...friends, friend])
    setShowFriend(false);
  }

  const handleSelection = (friend) => {

    setSelectedFriend(friend);
  }

  const handleSplitBill = (value) => {

    console.log(value);

    setFriends(friends => friends.map(friend => 
      friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend))
  
      setSelectedFriend(null);
    }



  return (
    <>
        {/* <h1 >Eat-N-Split Bill</h1> */}
      <div className='app main-container'>

        <div className='sidebar'>

          <FreindsList friends={friends} onSelection={handleSelection}></FreindsList>

          {showAddFriend &&  <FormAddFriends onAddFriend={handleAddFriend} />}

          
          <br />
          <br />
          <Button onClick={handleShowFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
        </div>
        <div className='sidebar-2'>

       {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} ></FormSplitBill>}
        </div>
      </div>
    </>
  )
}

//FriendList Component















export default App;
