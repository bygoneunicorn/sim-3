import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav(){
    return(
        <div>
            <h1>Nav</h1>
            <Link to='/dashboard'>Home</Link>
            <Link to='/new'>New Post</Link>
            <Link to='/'>Logout</Link>
        </div>
    )
}