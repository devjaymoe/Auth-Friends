import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = props => {
    const [ friends, setFriends ] = useState([])

    useEffect(()=>{
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                // console.log(res.data)
                setFriends(res.data)
            })
            .catch(err => console.log({err}))
    }, [])

    return (
        <div>
            <h1>Friends List</h1>
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