import React, {Component} from 'react';

export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {

        }
    }
    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <input placeholder="Search by Title" />
                <button>Button</button>
                <button>Reset</button>
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return{
//         5
//     }
// }