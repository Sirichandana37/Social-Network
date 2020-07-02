import React, { Component } from 'react';
import {AddComment}  from './comments/AddComment'
import createHistory from 'history/createBrowserHistory';
import axios from 'axios';
import {withRouter} from  "react-router-dom"
const history=createHistory();

export class Home extends Component {
    constructor(){
        
        super();
        
        this.state={
            likecounter:0,
            unlikecounter:0,
            posts:[{
                _id:'',
                    id:'',
                    image: '',
                    description: '',
                    likes: ''
            }]

    }
    this.serviceUrl="http://localhost:5000/api/newsfeed/";
    // this.state={
    //     posts:[]
    // }
    this.routeChange = this.routeChange.bind(this);
    }
    componentDidMount(){
        axios.get("http://localhost:5000/api/newsfeed/").then((res)=>{
            console.log(res.data);
            this.setState({posts:res.data})
        })
    }
      
    addLike=(e)=>{
      e.preventDefault();
     
// var PostsLength = this.state.posts.length;
// for( let x=0; x<PostsLength; x++)
// {
   
//alert(Object.keys(this.state.posts[x]).length);
this.setState({
    
    
        // likes :this.state.posts.length[likes]+1
        likecounter:this.state.likecounter+1
    
  
 })

}
      
 addunlike=(e)=>{
        e.preventDefault();
        this.setState({
            // posts:{
            //     likes :this.state.posts.length[likes]+1
            // }
            unlikecounter:this.state.unlikecounter+1
          
        })
    }
      routeChange(){
        let path = `/comments`;
        this.props.history.push(path);
        }
        shareClick=(id)=>{
         this.props.history.push('/share/'+id);
        }
    
    render() {
        return (
            <div class="row">
                <div class="col-sm-6 col-md-4 col-md-offset-3">
                    <div class="thumbnail">
                    <div>{this.state.posts.map((i)=><div key={i.id}>
                            {/* <td>{c.id}</td> */}
                            <div><img src={i.image} height="300" width="300"></img></div>
                            <div>{i.description}</div>
                            <div><hr/>
                            Likes {this.state.likecounter}&nbsp;&nbsp;
                            Unlikes {this.state.unlikecounter}
                            </div>
                            
                            
                            <div class="caption">
                            <dl>
                                <hr/>
                                <dt>
                              <span class="glyphicon glyphicon-thumbs-up blue" onClick={(e)=>this.addLike(e)}>Like</span>&nbsp;&nbsp;
                              <span class="glyphicon glyphicon-thumbs-down blue"onClick={(e)=>this.addunlike(e)}>Unlike</span>&nbsp;&nbsp; 
                                <span class="glyphicon glyphicon-share-alt  blue" onClick={()=>this.shareClick(i._id)} >Share</span>&nbsp;&nbsp;
                                <span class="glyphicon glyphicon-comment  blue"  onClick={this.routeChange}>Comment</span>&nbsp;&nbsp;
                                   
                                </dt>
                            </dl>
                            
                            </div>
                        </div>
                        )}

                    </div>
                    </div>
                    </div>
                </div>

                )
            }
            


        }
       export default withRouter(Home);