import React, { Component } from 'react';
import axios from 'axios';

class MyConnections extends Component {
    constructor() {
        super();
        this.state = {
            friends:[]
        }}
        componentDidMount(){
            axios.get("http://localhost:5000/friend").then((res)=>{
            console.log(res.data);
            this.setState({friends:res.data})
        })
        }
        message(){
            this.props.history.push('/chat')
        }

    render() {
        return (
            <div className="container">
                  <div className="row">
            {this.state.friends.map((friend,index)=><div className="col-md-4"key={index}><div className="thumbnail"width="50"height="50">
            <img src={friend.image} height="200"width="200"className="rounded-circle" />
            Name:{friend.name}<br/>
            Designation:{friend.designation}<br/>
            <button className="btn btn-primary" onClick={()=>this.message()}>Message</button>

</div>

            </div>)}
            </div>
            </div>
        );
    }
}

export default MyConnections;