import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = props => {
    const [ friends, setFriends ] = useState([])
    const [ addFriend, setAddFriend ] = useState ({
        name: '',
        age: '',
        email: ''
    })

    useEffect(()=>{
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                // console.log(res.data)
                setFriends(res.data)
            })
            .catch(err => console.log({err}))
    }, [])

    const handleChange = e => {
        let value = e.target.value
        if (e.target.name === 'age'){
            value = parseInt(value)
        }
        setAddFriend({
            ...addFriend,
            [e.target.name]: value
        });
    };

    const friendSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/friends", addFriend)
            .then(res => {
                console.log('post friend success:', res)
                setAddFriend({
                    id: '',
                    name: '',
                    age: '',
                    email: ''
                })
                setFriends(res.data)
            })
            .catch(err => console.log({ err }));
    };

    return (
        <div>
            <h1>Friends List</h1>
            <form onSubmit={friendSubmit}>
                <input
                    type="text"
                    name="name"
                    value={addFriend.name}
                    onChange={handleChange}
                />
                <input
                    type="age"
                    name="age"
                    value={addFriend.age}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    value={addFriend.email}
                    onChange={handleChange}
                />
                <button>Add Friend</button>
            </form>
            <ul>
                {friends ? 
                    friends.map(friend =>(
                        <li key={friend.id}>
                            {friend.name}      
                        </li>
                    ))
                : null}
            </ul>
        </div>
    )
}

export default FriendsList