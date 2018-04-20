import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props){
    const {username, profilePicture, location} = props
        return(

        <div>
            {
                location === "/" ?
                (
                    <div>

                    </div>
                ):
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
            }
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
