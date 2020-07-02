import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export class Profile extends Component {
    constructor() {
        super();
        this.state = {
            _id:'',
            first_name: '',
            last_name: '',
            email: '',
            posts: [
                {
                  _id: '',
                  id: '',
                  image: '',
                  description: '',
                  likes: '',
                }],
                profiles: [
                    {
                      _id: '',
                      id: '',
                      image: '',
                      description: '',
                      likes: '',
                    }]
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

        axios.get("http://localhost:5000/api/profile").then((res)=>{
                    console.log(res.data);
                    this.setState({profiles:res.data})
               })

// componentDidMount(){
//         axios.get("http://localhost:5000/users/profile/").then((res)=>{
//             this.setState({
//                 _id:res.data._id,
//                 first_name:res.data.first_name,
//             last_name:res.data.last_name,
//             email:res.data.email

//             })
//         })
        
    }
    // componentDidMount(){
    //     axios.get("http://localhost:5000/api/profile").then((res)=>{
    //         console.log(res.data);
    //         this.setState({profiles:res.data})
    //     })
    // }

    edit(_id){
        this.props.history.push('/editprofile/'+_id)
    }
    contact(){
        var myWindow= window.open("","","top=500,left=500,width=100,height=100");
        myWindow.document.write(this.state.email)
    }
    // function myFunction() {
    //     var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    //     myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
    // }

    render() {
        return (
            <div>
                <div className="col-md-4 col-md-offset-4">
                        <h1 className="text-center"><b>Profile</b></h1>
                    
            
                    
                    {/* <table className="table table-striped">
            <tbody>
                <tr>
                    <td>First Name</td>
                    <td>{this.state.first_name}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{this.state.last_name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{this.state.email}</td>
                </tr>

            </tbody>
            </table> */}
                    <div className="thumbnail">

                        <img src="http://www.esek.org.gr/images/ESET/eset_user.png" Style="border-radius:50%;width:200px"></img>
                        <div className="col-md-12"><h1 Style="float:right"><button onClick={()=>this.edit(this.state._id)} Style=" background-color:white;color:blue" className="glyphicon glyphicon-pencil"></button></h1></div>
                        <div class="caption">


                        <h4>{this.state.first_name}{this.state.last_name}</h4><br />
                        <div className="well">
                        <button onClick={()=>this.contact()}>Contact Info</button>
                        </div>
                        
                        
                        </div>

                    </div>
                    <div className="container">
                  <div className="well col-md-4">
                  <h4>My Posts</h4>
            {this.state.profiles.map((p,index)=><div key={index}><div className="row"><div className="thumbnail"width="50"height="50">
            <img src={p.image} height="200"width="200" />
            Description:{p.description}<br/>
            Likes:{p.likes}<br/>

</div>

            </div> </div>)}
            </div>
           
                    
                </div>
            </div>
            </div>
        )
    }
}
export default Profile
