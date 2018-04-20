import React, {Component} from 'react';
import axios from 'axios';

export default class Auth extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
        this.handleRegister = this.handleRegister.bind( this )
    }
    handleUsername(value){
        this.setState({ username: value})
    }
    handlePassword(value){
        this.setState({ password: value})
    }
    handleRegister(){
        const {username, password} = this.state
        axios.post('/register', {username, password})
            .then( res => {
                console.log(res.data)
            })
    }
    render(){
        return(
            <div>
                <h1>Auth</h1>
                <input placeholder='Enter username' onChange={(e) => this.handleUsername(e.target.value)}/>
                <input placeholder='Enter password' onChange={(e) => this.handlePassword(e.target.value)}/>
                <br />
                <button onClick={this.handleRegister}>Register</button>
                <button>Login</button>
            </div>
        )
    }
}