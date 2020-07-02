import React, { Component } from 'react';
import io from 'socket.io-client';
import jwt_decode from 'jwt-decode';
import axios from 'axios';


class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            _id:'',
            first_name: '',
            last_name: '',
            email: '', 
            username:'',
            message:'',
            messages:[]
        }
        this.socket = io('localhost:5000');
        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });
        
        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };
        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.first_name,
                message: this.state.message
            });
            this.setState({message: ''});
        }
       
    }
    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
       axios.get("http://localhost:5000/users/").then((res)=>{
        this.setState({
            _id:decoded._id,
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
             
        })})
    }
    onChanged=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    render() { 
        const{first_name,message,messages}=this.state
        return ( 
        <div>
            <form>
        <div className="container form-group">
       
        
        <div className="col-md-4 col-md-offset-4">
        <div className="well">
        <div className="messages">
        {messages.map(message => {
        return (
            <div>{message.author}: {message.message}</div>
        )
    })}
        </div>
        <input name="username" onChange={this.onChanged} value={first_name} placeholder="username" className="form-control"></input><br/>
        <input name="message" placeholder="Message"className="form-control" onChange={this.onChanged} value={message}  ></input><br/>
        <button onClick={this.sendMessage}  className="btn btn-primary" >Send</button>

</div>

        





        </div> 
        </div>
        </form>
</div>);
    }
}
 
export default Chat;