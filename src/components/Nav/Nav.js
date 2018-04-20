import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export function Nav(props){
    const {username, profilePicture} = props
    console.log(props)

    return(
        
        <div>
            <h1>Nav</h1>
            <p>{username}</p>
            <img src={profilePicture} alt='Profile'/>
            <br />
            <br />
            <Link to='/dashboard'>Home</Link>
            <Link to='/new'>New Post</Link>
            <Link to='/'>Logout</Link>
        </div>
    )
}

function mapStateToProps(state){
    return{
        username: state.username,
        profilePicture: state.profilePicture
    }
}

export default connect(mapStateToProps)(Nav)
