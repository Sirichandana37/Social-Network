import React, { Component } from 'react';
import axios from 'axios';
import { AddComment } from './AddComment';
import  CommentList  from './CommentList';
import { Home } from '../Home.js'
import createHistory from 'history/createBrowserHistory';
const history=createHistory();

export class Comments extends Component{
    constructor(){
     
        super();
        this.serviceUrl="http://localhost:5000/api/comment/";
        this.state={
            comments:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/api/comment/").then((res)=>{
            console.log(res.data);
            this.setState({comments:res.data})
        })
    }
    addComment=(username,usercomment)=>{
        alert(username,usercomment);
        let newComments=[...this.state.comments];
        let newComment={
            id:newComments.length+1,
            user:username,
            comment:usercomment
        }
        axios.post(this.serviceUrl,newComment).then((res)=>{
        newComments.push(newComment);
        this.setState({comments:newComments});
    })
}
    render(){
        return(
<div>
 <AddComment addComment={(username,usercomment)=>this.addComment(username,usercomment)}   history={history}/>
 <CommentList comments={this.state.comments}/>

</div>
        )
    }
}