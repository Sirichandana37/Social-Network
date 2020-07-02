
import React, { Component } from 'react';
import axios from 'axios';


class MyNetwork extends Component {
    item_count=0;
    constructor() {
        super();
        
        this.state = {
            friendreqs:[{
                id:0,
                name:'',
                designation:'',
                image:''
            }],
            friends:[{
                id:0,
                name:'',
                designation:'',
                image:''
            }]
    }


    }
    
    componentDidMount(){
        axios.get("http://localhost:5000/friendreq").then((res)=>{
            console.log(res.data);
            this.setState({friendreqs:res.data})
        })
    }
    add(name,designation,image){
        this.count=this.state.friends.length+1
        let newFriends=[...this.state.friends];
        let newFriend={
            id:newFriends.length+1,
            name:name,
            designation:designation,
            image:image
        }
        axios.post("http://localhost:5000/friend",newFriend).then((res)=>{
            newFriends.push(newFriend);
            this.setState({friends:newFriends})

           
        })
        // axios.get("http://localhost:5000/friend").then((res)=>{
        //     console.log(res.data);
        //     this.setState({friends:res.data})
        // })
        
    }
    move(){
        this.props.history.push('/myconnection')

    }
    delete(friendreq){
        axios.delete("http://localhost:5000/friendreq/"+friendreq._id).then((res)=>{
        let newFriendreqs=[...this.state.friendreqs]; 
        let indexPosition=newFriendreqs.indexOf(friendreq);
        newFriendreqs.splice(indexPosition,1);
        this.setState({
            friendreqs:newFriendreqs
        })
    })
    }
    
    
        

    

      
    
    render() {
        return (<div className="container">
        <div className="row">
        
        
        <div className="col-md-3 well">
              {/* <div className="col-md-3">
              
             {this.state.friends.map((friend,index)=><div className="col-md-3"key={index}> 
            {Count(friend.id)}
            {/* <img src={friend.image} height="100"width="100"className="rounded-circle" /> */}
            
           
            

{/* </div>
             )}  */}
             <h4>My Connections({this.state.friends.length})</h4>   <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={()=>this.move()}><img src="https://image.shutterstock.com/image-vector/team-icon-vector-people-solid-450w-410285647.jpg "width="40" height="40"/></button>
            </div>
        
            
            
                
            <div className="col-md-6 col-md-offset-1 well"><h1>Invitations({this.state.friendreqs.length})</h1>{this.state.friendreqs.map((friendreq,index)=><div className="col-md-4"key={index}>
           <div className="card-body"> <img src={friendreq.image}height="100"width="100" className="rounded-circle"/>
            Name:{friendreq.name}<br/>
            Designation:{friendreq.designation}<br/><button className="btn btn-primary"onClick={()=>this.add(friendreq.name,friendreq.designation,friendreq.image)}>Add Connection</button><button onClick={()=>this.delete(friendreq)} className="btn btn-danger">Cancel</button></div></div>)}
            </div>
            
        </div>
        </div>
            
            
        );
    }
}

export default MyNetwork;

