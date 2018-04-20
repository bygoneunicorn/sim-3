import React, {Component} from 'react';

export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            userPosts: true
        }
        this.testFn = this.testFn.bind( this )
    }
    testFn(){
        this.state.userPosts ? this.setState({userPosts: false}) : this.setState({userPosts: true})
        console.log(this.state.userPosts)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Dashboard</h1>
                <input placeholder="Search by Title" />
                <button>Button</button>
                <button>Reset</button>
                <input type="checkbox" value={this.state.userPosts} onChange={this.testFn}/>
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return{
        
//     }
// }