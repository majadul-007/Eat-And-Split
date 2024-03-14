import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
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
const Button = ({children, onClick}) =>{ 

  return (

    <button className='button' onClick={onClick}>{children}</button>

  )

}




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

       {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} ></FormSplitBill>}
        </div>
      </div>
    </>
  )
}

//FriendList Component

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
        <p className="green">{friend.name} owes you
          {Math.abs(friend.balance)}€
          </p>)}
        {friend.balance === 0 && (
        <p className="red">You and {friend.name} are even
        </p>)}

        <Button onClick={() => onSelection(friend)}>Select</Button>


      </li>

    </>

  )

}





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


const FormSplitBill = ({selectedFriend}) => {

  return (

    <form className='form-split-bill'>

      <h2>Split a blill with {selectedFriend.name}</h2>
      <label>💵 Bill Value</label>
        <input type="text"></input>

        <label>💁 Your Expense</label>
        <input type="text"></input>
        <label>👨‍👧‍👦 {selectedFriend.name}'s Expense</label>
        <input type="text"></input>

        <label>🤑 Who is Paying the Bill?</label>
        <select>

          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
          
        </select>

        <Button>Add</Button>
    </form>
  )
}

export default App;
